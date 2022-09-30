import React from 'react';
import "./section-1.scss"

function Section1(props) {
    return (
        <div className="section-1">
            <div
                className="sWr"
                style={{backgroundImage: `url("https://sherpaautotransport-media.s3.amazonaws.com/wp-content/uploads/2022/03/21120222/sherpa-optimized-hero-compressor.jpeg")`}}>
                <div className="bold-text">
                    The Premiere Vehicle Shipping <br/>Experience
                </div>
                <div className="sText">
                    Sherpa Auto Transport provides the best transport experience with upfront, transparent <br/> pricing
                    backed by our Price Lock Promise.
                </div>
            </div>
            <div className="card">
                <div className="title">
                    Request a quote online in under two minutes!
                </div>
                <div className="line"/>
                <div className="tr">
                    Transport My Vehicle From...
                </div>
                <div className="inputs">
                    <input type="text" placeholder="ENTER ZIP CODE OR CITY"/>
                    <div className="to">
                        TO
                    </div>
                    <input type="text" placeholder="ENTER ZIP CODE OR CITY"/>
                    <div className="button">NEXT</div>
                </div>
            </div>
        </div>
    );
}

export default Section1;
