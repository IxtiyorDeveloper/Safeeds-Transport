import React from 'react';
import "./video-section.scss"
import ReactPlayer from 'react-player'
import {IoDesktopOutline} from "react-icons/io5"
import {FaCar} from "react-icons/fa"
import {TiTick} from "react-icons/ti"

function VideoSection(props) {
    return (
        <div className="videoSection">
            <div className="pd">
                <div className="t1">
                    How do I book with an auto transport company?
                </div>
                <div className="t2">
                    Safeeds Transport Inc's guide to quick, easy and safe auto shipping
                </div>
                <div className="vd">
                    <div className="vid">
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                            className="player"
                        />
                    </div>
                    <div className="box">
                        <div className="mt">
                            Our auto transporter steps:
                        </div>
                        <div className="steps">
                            <div className="circle">
                                <IoDesktopOutline className="ic"/>
                            </div>
                            <div className="st">
                                <div className="tit1">Step 1</div>
                                <div className="tit2">Quote and book your order</div>
                            </div>
                        </div>
                        <div className="tx">
                            Ready to experience something different? Safeeds Transport Inc is an online car shipping
                            marketplace that
                            puts you in complete control.
                        </div>
                        <div className="steps">
                            <div className="circle">
                                <FaCar className="ic"/>
                            </div>
                            <div className="st">
                                <div className="tit1">Step 2</div>
                                <div className="tit2">We pick up your vehicle</div>
                            </div>
                        </div>
                        <div className="tx">
                            Upon booking, you will instantly receive an Order Confirmation email. Look for that in your
                            email inbox or drag it over from another folder.
                        </div>
                        <div className="steps">
                            <div className="circle">
                                <TiTick className="ic"/>
                            </div>
                            <div className="st">
                                <div className="tit1">Step 3</div>
                                <div className="tit2">Receive your vehicle</div>
                            </div>
                        </div>
                        <div className="tx">
                            The auto transporter, or carrier, is once again not supposed to just show up unannounced.
                            The driver ideally should call the day before to alert your destination contact of his
                            pending arrival, and will give a rough estimation of what time of day to expect.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoSection;
