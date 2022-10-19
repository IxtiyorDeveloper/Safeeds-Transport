import React from 'react';
import "./sw1.scss"
import {BsTelephone} from "react-icons/bs"
import {GoLocation} from "react-icons/go"
import {TiMessage} from "react-icons/ti"

function Sw1(props) {
    return (
        <div className="sw1 pd">
            <div className="title">
                We're here to help
            </div>
            <div className="rws">
                <div className="bx">
                    <div className="ic">
                        <BsTelephone/>
                    </div>
                    <div className="call">
                        Give Us A Call
                    </div>
                    <div className="tel">
                        Local: <span>315-314-4337</span>
                    </div>
                </div>
                <div className="bx">
                    <div className="ic">
                        <TiMessage/>
                    </div>
                    <div className="call">
                        Email Us
                    </div>
                    <div className="tel">
                        <a href="mailto:info@safeeds.us">info@safeeds.us</a>
                    </div>
                </div>
                <div className="bx">
                    <div className="ic">
                        <GoLocation/>
                    </div>
                    <div className="call">
                        Our Address
                    </div>
                    <div className="tel">
                        Our team is worldwide and our physical office is located at:
                    </div>
                    <div className="ntel">
                        1201 Avenue K 3b
                    </div>
                    <div className="ntel">
                        Brooklyn, NY 11230,
                        United States
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sw1;
