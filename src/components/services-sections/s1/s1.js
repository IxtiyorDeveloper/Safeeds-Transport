import React from 'react';
import "./s1.scss"
import Card from "../card/card";

function S1(props) {
    return (
        <div className="servicesS1">
            <div className="f1">
                <div className="left">
                    <div className="tit">
                        EVERY SERVICE WE OFFER INCLUDES
                    </div>
                    <div className="bt">
                        Door-To-Door Service, 100% Bumper-To-Bumper Insurance
                    </div>
                    <div className="tx1">
                        When you go with Safeeds Transport Inc to ship your vehicle, you can rest assured that the carrier assigned to
                        move your car is fully insured and licensed with the&nbsp;<span>FMCSA (Federal Motor Carrier and Saftey
                        Administration).
                        </span>
                    </div>
                    <div className="tx2">
                        Your vehicle is covered by the carrier’s insurance policy that is doing the shipping. Depending
                        on the type and size of the truck/trailer that is shipping your car, the insurance policy can
                        cover from $100,000 to $1,000,000 of damage.
                    </div>
                    <div className="tx3">
                        Ready to get started?
                    </div>
                    <div className="cr">
                        <Card/>
                    </div>
                </div>
                <div className="right1">
                    <div className="rimg"/>
                </div>
            </div>
        </div>
    );
}

export default S1;
