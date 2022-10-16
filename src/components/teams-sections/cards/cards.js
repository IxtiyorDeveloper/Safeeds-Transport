import React from 'react';
import "./cards.scss"
import img from "../../../assets/imgs/team.jpg"
import {AiOutlineMail} from "react-icons/ai"
import Button from "../../elements/button/button";

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
    ];

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
                                    </div>
                                </div>
                                <div className="trew">
                                    <div className="txt223">
                                        <div className="iwr">
                                            <AiOutlineMail className="icon"/>&nbsp;Email:
                                        </div>
                                        <div className="iwr1">
                                            info@safeeds.us
                                        </div>
                                    </div>
                                    <div className="txt223">
                                        <div className="iwr">
                                            <AiOutlineMail className="icon"/>&nbsp;Phone:
                                        </div>
                                        <div className="iwr1">
                                            315 458 65-58
                                        </div>
                                    </div>
                                </div>
                                <div className="btr">
                                    <Button title="View profile" size="18px"/>
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
