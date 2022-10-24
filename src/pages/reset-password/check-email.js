import React, {useEffect} from 'react';
import ReactCodeInput from "react-code-input"
import {Button, Form} from "antd";
import {useCheckCode, useSendCode} from "hooks";
import {toast} from "react-toastify";
import {ResendLink} from "./check-email.e";
import useCountDown from "react-countdown-hook"
import {getFormattedTime} from "../../utils/functions/getFormattedTime";
import {useDispatch} from "react-redux";

function CheckEmail({setStep, email}) {
    const dispatch = useDispatch()
    const [timeLeft, {start}] = useCountDown(120000, 100)

    useEffect(() => {
        start()
    }, [start])

    const props = {
        className: "reactCodeInput",
        inputStyle: {
            fontFamily: "Poppins",
            margin: "10px",
            width: "60px",
            minHeight: "60px",
            borderRadius: "3px",
            fontSize: "20px",
            backgroundColor: "",
            textAlign: "center",
            color: "lightskyblue",
            border: "2px solid lightskyblue",
        },
    }

    const sendCode = useSendCode({
        onSuccess() {
            toast.success("We have sent sms")
        },
        onError(err) {
            toast.error(err?.data?.error)
        },
    })

    const checkCode = useCheckCode({
        onSuccess() {
            toast.success("Successfully checked")
            setStep("put_password")
        },
        onError(err) {
            toast.error(err?.data?.error)
        },
    })

    const onFinish = (values) => {
        checkCode.mutate({
            data: {
                email: email,
                code: Number(values?.code)
            },
            dispatch: dispatch
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleResendSms = async () => {
        sendCode.mutate({
            email: email
        })
    }

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
                    label="Code"
                    name="code"
                    style={{marginBottom: 0}}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <ReactCodeInput
                        inputMode="numeric"
                        name="smsCode"
                        fields={4}
                        {...props}
                    />
                </Form.Item>
                {!timeLeft ? (
                    <div className="lres">
                        <span>Don't get SMS?</span>
                        <ResendLink
                            onClick={() => {
                                handleResendSms()
                                start()
                            }}
                        >
                            Resend
                        </ResendLink>
                    </div>
                ) : (
                    <div className="lres">You can resend after {getFormattedTime(timeLeft)} minutes</div>
                )}
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="e-button"
                        loading={checkCode?.isLoading}
                    >
                        Confirm
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default CheckEmail;