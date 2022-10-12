import React from 'react';
import "./banner.scss"
import img from "../../../assets/imgs/banner.webp"
import {BsPersonCircle} from "react-icons/bs"
import {AiOutlineCalendar} from "react-icons/ai"

function Banner(props) {
    return (
        <div className="bbanner" style={{backgroundImage: `url("${img}")`}}>
            <div className="bg">
                <div className="con">
                    <div className="title">
                        Can you Drive Your Car in Europe
                    </div>
                    <div className="nrw">
                        <div className="name">
                            <BsPersonCircle/> By Marcus Stawarski
                        </div>
                        <div className="date">
                            <AiOutlineCalendar/> September 7, 2022
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;