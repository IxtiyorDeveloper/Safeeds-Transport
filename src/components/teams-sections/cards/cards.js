import React from 'react';
import "./cards.scss"
import img from "../../../assets/imgs/account.png"
import {AiOutlineMail,AiOutlinePhone} from "react-icons/ai"
import Button from "../../elements/button/button";

function Cards(props) {

    const data = [
        {
            name: "Michael Steven",
            img: img,
            position: "Managing director",
            email: "michael@safeeds.us",
            phone: "315-849-2823"
        },
        {
            name: "Richard Kane",
            img: img,
            position: "Experienced Auto transport specialist",
            email: "richard@safeeds.us",
            phone: "315-849-1255"
        },
        {
            name: "David Johnson",
            img: img,
            position: "Experienced Auto transport specialist",
            email: "david@safeeds.us",
            phone: "315-221-9095"
        },
        {
            name: "Frank Lannister",
            img: img,
            position: "Experienced Auto transport specialist",
            email: "frank@safeeds.us",
            phone: "315-234-0511"
        },
        {
            name: "Jake Scott",
            img: img,
            position: "Experienced Auto transport specialist",
            email: "jake@safeeds.us",
            phone: "315-314-3543"
        },
        {
            name: "Tony Davis",
            img: img,
            position: "Experienced Auto transport specialist",
            email: "tony@safeeds.us",
            phone: "315-819-5263"
        }
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
