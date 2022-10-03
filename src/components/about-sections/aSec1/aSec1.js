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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum error explicabo, fugit impedit
                        nam perferendis quasi quibusdam quis quisquam recusandae?
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ASec1;
