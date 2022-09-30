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
                    Montway Auto Transport’s company guide to quick, easy and safe auto shipping
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut cum dolor dolorum
                            eaque eos et, excepturi id itaque labore mollitia neque nisi repellendus similique
                            tempora. Est ipsum laborum rerum?
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut cum dolor dolorum
                            eaque eos et, excepturi id itaque labore mollitia neque nisi repellendus similique
                            tempora. Est ipsum laborum rerum?
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut cum dolor dolorum
                            eaque eos et, excepturi id itaque labore mollitia neque nisi repellendus similique
                            tempora. Est ipsum laborum rerum?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoSection;
