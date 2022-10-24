import React from 'react';
import {Button, Form, Input} from "antd";
import {useResetPassword} from "../../hooks";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {getCookie, removeCookie} from "../../utils/cookie";
import {useNavigate} from "react-router-dom";

function PutPassword(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const resetPassword = useResetPassword({
        onSuccess() {
            toast.success("Successfully reset")
            navigate("/articles")
            removeCookie("reset_unique")
        },
        onError(err) {
            toast.error(err?.data?.error)
        },
    })

    const onFinish = (values) => {
        resetPassword.mutate({
            data: {
                password: values?.password,
                uniqueId: getCookie("reset_unique").substring(1, getCookie("reset_unique")?.length - 1)
            },
            dispatch: dispatch
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="cel">
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
                className="form"
            >
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="e-button"
                        loading={resetPassword?.isLoading}
                    >
                        Confirm
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default PutPassword;