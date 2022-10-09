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
                        Montway Auto Transport
                    </div>
                    <div className="bt">
                        Download as PDF
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
