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
                        Local: <span>954-239-1780</span>
                    </div>
                    <div className="ntel">
                        TOLL-FREE: <span>800-553-1828</span>
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
                        info @ mercuryautotransport.com
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
                        2240 SW 70th, Ave., Suite H
                    </div>
                    <div className="ntel">
                        Davie, Florida 33317 USA
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sw1;
