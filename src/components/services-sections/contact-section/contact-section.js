import React from 'react';
import "./contact-section.scss"

function ContactSection(props) {
    return (
        <div className="contactSection">
            <div className="bg"/>
            <div className="content">
                <div className="text">
                    Call us 24/7 at 800-553-1828
                </div>
                <div className="bt">
                    REQUEST A QUOTE
                </div>
            </div>
            <div className="img">
                <img src="https://mercuryautotransport.com/wp-content/uploads/2022/01/happy-couple_t20_Xzndp3.jpg"
                     alt="rq" />
            </div>
        </div>
    );
}

export default ContactSection;
