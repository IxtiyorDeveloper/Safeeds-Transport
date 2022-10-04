import React from 'react';
import "./banner.scss"
import {AiFillPhone} from "react-icons/ai"
import Card from "../card/card";

function Banner(props) {
    return (
        <div
            style={{backgroundImage: `url(https://www.amerifreight.net/public/assets/front/images/1638429154.jpg)`}}
            className="wr-banner"
        >
            <div className="row pd">
                <div className="col">
                    <div className="ctitle">
                        SAFEEDS TRANSPORT INC
                    </div>
                    <div className="nx">
                        <div className="tx">
                            Call us for free
                        </div>
                        <div className="bt">
                            <div className="ph"><AiFillPhone/></div>
                            <div className="num">
                                <a href="">(770) 486-1010</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <Card/>
                </div>
            </div>
        </div>
    );
}

export default Banner;
