import React from 'react';
import "./aSec1.scss"

function ASec1(props) {
    return (
        <div className="aSec1">
            <div style={{
                backgroundImage:
                    `url("https://www.amerifreight.net/public/assets/front/images/AboutUsHeroImage-scaled.webp")`
            }}
                 className="banner"
            >
                <div className="bg"/>
                <div className="content">
                    <div className="t1">
                        About Us
                    </div>
                    <div className="t2">
                        Safeeds Transport Inc has grown to one of the largest auto transport companies in the country
                        in less than five years!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ASec1;
