import React from 'react';
import "./banner.scss"

function Banner(props) {

    return (
        <div style={{
            backgroundImage: `url("https://d1d9oqfe9g83w6.cloudfront.net/assets/prod/images/covers/buildings.jpg?f8edef460cdad55a")`
        }}
             className="bannerHelp"
        >
            <div className="drMaker">
                <div className="pd">
                    <div className="tr">
                        Terms & conditions
                    </div>
                    <div className="mt">
                        Safeeds Transport Inc
                    </div>
                    <a href="../../../assets/termsAndConditions.pdf" download className="bt">
                        Download as PDF
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Banner;
