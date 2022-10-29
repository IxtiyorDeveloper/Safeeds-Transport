import React, {useState} from 'react';
import QuoteBanner from "../../components/quote-sections/quote-banner/quote-banner";
import "./quote.scss"
import SuccessPage from "../../components/quote-sections/success-page/success-page";

function Quote(props) {
    const [step, setStep] = useState("quote")
    const Content = () => ({
        quote: <QuoteBanner setStep={setStep}/>,
        success: <SuccessPage/>
    }[step])
    return (
        <div className="quote-pg">
            <Content/>
        </div>
    );
}

export default React.memo(Quote);
