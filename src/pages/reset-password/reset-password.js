import React, {useState} from 'react';
import EmailForm from "./email-form";
import CheckEmail from "./check-email";
import PutPassword from "./put-password";

function ResetPassword(props) {
    const [step,setStep] = useState("email")
    const [email,setEmail] = useState("email")

    const Content = () =>
        ({
            email: <EmailForm setStep={setStep} setEmail={setEmail}/>,
            check: <CheckEmail setStep={setStep} email={email}/>,
            put_password: <PutPassword/>,
        }[step])

    return (
        <Content/>
    );
}

export default ResetPassword;