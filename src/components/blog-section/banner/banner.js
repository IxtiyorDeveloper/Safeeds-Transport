import React from 'react';
import "./banner.scss"
import img from "../../../assets/imgs/banner.webp"
import {BsPersonCircle} from "react-icons/bs"
import {AiOutlineCalendar} from "react-icons/ai"

function Banner({article}) {
    const data = article?.data?.data
    return (
        <div className="bbanner" style={{backgroundImage: `url("${img}")`}}>
            <div className="bg">
                <div className="con">
                    <div className="title">
                        {data?.title}
                    </div>
                    <div className="nrw">
                        <div className="name">
                            <BsPersonCircle/> {data?.name}
                        </div>
                        <div className="date">
                            <AiOutlineCalendar/>
                            {
                            `${new Date(data?.createdAt).getUTCFullYear()}-${new Date(data?.createdAt).getMonth() > 9 ?
                                new Date(data?.createdAt).getMonth():
                                `0${new Date(data?.createdAt).getMonth()}`
                            }-${new Date(data?.createdAt).getDate() > 9 ?
                                new Date(data?.createdAt).getDate():
                                `0${new Date(data?.createdAt).getDate()}`
                            }
                            `
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
