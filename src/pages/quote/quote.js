import React from 'react';
import QuoteBanner from "../../components/quote-sections/quote-banner/quote-banner";
import "./quote.scss"

function Quote(props) {
    return (
        <div className="quote-pg">
            <QuoteBanner/>
        </div>
    );
}

export default React.memo(Quote);
