import React from 'react';
import "./cards.scss"
import img from "../../../assets/imgs/team.jpg"
import {AiOutlineMail} from "react-icons/ai"
import {BsFillTelephoneFill} from "react-icons/bs"

function Cards(props) {
    const data = [
        {
            name: "Damir Miller",
            img: img,
            position: "Experienced Auto transport specialist"
        },
        {
            name: "Damir Miller",
            img: img,
            position: "Experienced Auto transport specialist"
        },
        {
            name: "Damir Miller",
            img: img,
            position: "Experienced Auto transport specialist"
        },
        {
            name: "Damir Miller",
            img: img,
            position: "Experienced Auto transport specialist"
        },
        {
            name: "Damir Miller",
            img: img,
            position: "Experienced Auto transport specialist"
        },
        {
            name: "Damir Miller",
            img: img,
            position: "Experienced Auto transport specialist"
        },
        {
            name: "Damir Miller",
            img: img,
            position: "Experienced Auto transport specialist"
        },
    ]
    return (
        <div className="tcds pd">
            <div className="title">
                Meet The Team
            </div>
            <div className="ty">
                <div className="tc">
                    All Members <span>52</span>
                </div>
                <div className="line"/>
            </div>
            <div className="rw">
                {
                    data?.map((i, k) => {
                        return (
                            <div key={k} className="bxs">
                                <div style={{backgroundImage: `url(${i.img})`}} className="img"/>
                                <div className="tcw">
                                    <div className="txt1">
                                        <div className="name">
                                            {i.name}
                                        </div>
                                        <div className="pos">
                                            {i.position}
                                        </div>
                                    </div>
                                </div>
                                <div className="trew">
                                    <div className="txt223">
                                        <div className="iwr">
                                            <AiOutlineMail className="icon"/>
                                        </div>
                                        <div className="iwr">
                                            info@safeeds.us
                                        </div>
                                    </div>
                                    <div className="txt223">
                                        <div className="iwr">
                                            <BsFillTelephoneFill className="icon"/>
                                        </div>
                                        <div className="iwr">
                                            315 458 65-58
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Cards;
