import React from 'react';
import "./success-page.scss"
import img from "../../../assets/imgs/success.jpg"

function SuccessPage(props) {
    return (
        <div className="success-page pd">
            <div className="imgwr">
                <img src={img} alt=""/>
            </div>
            <div className="ct">
                <div className="th">
                    Thank You
                </div>
                <div className="t1">
                    WE HAVE SUCCESSFULLY RECEIVED YOUR QUOTE REQUEST.
                </div>
                <div className="tr">
                    If you need immediate attention, please call us directly at <a href="tel:3153144337">(315)-314-4337</a>.
                </div>
                <div className="tr">
                    Please check out our FAQ and Supplier Code of Conduct to learn more about auto shipping works.
                </div>
                <div className="tr">
                    We look forward to assisting you with your transport.
                </div>
            </div>
        </div>
    );
}

export default SuccessPage;
