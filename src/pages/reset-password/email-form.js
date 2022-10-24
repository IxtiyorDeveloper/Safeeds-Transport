import React from 'react';
import {Button, Form, Input} from "antd";
import {useSendCode} from "hooks";
import {toast} from "react-toastify";

function EmailForm({setStep,setEmail}) {

    const sendCode = useSendCode({
        onSuccess() {
            toast.success("Successfully sent")
            setStep("check")
        },
        onError(err) {
            toast.error(err?.data?.error)
        },
    })

    const onFinish = (values) => {
        sendCode.mutate({
            email: values?.email
        })
        setEmail(values?.email)
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
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input width="200"/>
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="e-button"
                        loading={sendCode?.isLoading}
                    >
                        Confirm
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default EmailForm;