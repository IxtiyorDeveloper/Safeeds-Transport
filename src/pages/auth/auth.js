import React, {useEffect} from 'react';
import {Button, Form, Input} from 'antd';
import "./auth.scss"
import {useSignIn} from "hooks/useAuth";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

function Auth(props) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signIn = useSignIn({
        onSuccess: () => {
            console.log("success")
            navigate("/articles")
        },
        onError: (err) => {
            console.log("err", err)
        },
    })

    const onFinish = (values) => {
        signIn.mutate({
            data: {
                email: values?.email,
                password: values?.password,
            },
            dispatch: dispatch
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        console.log(signIn, "sign")
    }, [signIn])

    return (
        <div className="auth">
            <Form
                layout="vertical"
                name="basic"
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="form"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {required: true, message: 'Please input your email!'},
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                    ]}
                >
                    <Input width="200"/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{width: "100%"}}
                        loading={signIn?.isLoading}
                    >
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Auth;
