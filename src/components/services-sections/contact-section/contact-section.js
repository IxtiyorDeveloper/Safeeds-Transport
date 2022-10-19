import React from 'react';
import "./contact-section.scss"
import {useNavigate} from "react-router-dom";

function ContactSection(props) {
    const navigate = useNavigate()

    return (
        <div className="contactSection">
            <div className="bg"/>
            <div className="content">
                <div className="text">
                    Call us 24/7 at 315-314-4337
                </div>
                <div className="btiy" onClick={() => navigate("/quote")} style={{cursor:"pointer"}}>
                    REQUEST A QUOTE
                </div>
            </div>
            <div className="img">
                <img src="https://mercuryautotransport.com/wp-content/uploads/2022/01/happy-couple_t20_Xzndp3.jpg"
                     alt="rq"/>
            </div>
        </div>
    );
}

export default ContactSection;
