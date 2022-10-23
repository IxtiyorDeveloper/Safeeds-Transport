import React from 'react';
import "./cards.scss"
import {AiOutlineMail,AiOutlinePhone} from "react-icons/ai"
import Button from "../../elements/button/button";
import {data} from "../data";
import {useNavigate} from "react-router-dom";

function Cards(props) {
    const navigate = useNavigate()
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
                                            {i?.email}
                                        </div>
                                    </div>
                                    <div className="txt223">
                                        <div className="iwr">
                                            <AiOutlinePhone className="icon1"/>&nbsp;Phone:
                                        </div>
                                        <div className="iwr1">
                                            {i?.phone}
                                        </div>
                                    </div>
                                </div>
                                <div className="btr">
                                    <Button title="View profile" size="18px" onClick={() => navigate(`/team/${i?.id}`)}/>
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
