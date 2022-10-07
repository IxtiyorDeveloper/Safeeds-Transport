import React from 'react';
import "./sc1.scss"
import {BsFillPersonFill} from "react-icons/bs"

function Sc1(props) {
    const data = [
        {
            id: 1,
            title: "Shipping Your Car Across the Country",
            text: "Did you know the average person in America moved about eleven times in their life?  Moving can be a stressful process, and figuring out how…",
            person: "Jack Squire",
            img: "https://mercuryautotransport.com/wp-content/uploads/2022/09/Rear-view-of-trailer-of-new-ca.jpg"
        },
        {
            id: 2,
            title: "Shipping Your Car Across the Country",
            text: "Did you know the average person in America moved about eleven times in their life?  Moving can be a stressful process, and figuring out how…",
            person: "Jack Squire",
            img: "https://mercuryautotransport.com/wp-content/uploads/2022/09/Rear-view-of-trailer-of-new-ca.jpg"
        },
        {
            id: 3,
            title: "Shipping Your Car Across the Country",
            text: "Did you know the average person in America moved about eleven times in their life?  Moving can be a stressful process, and figuring out how…",
            person: "Jack Squire",
            img: "https://mercuryautotransport.com/wp-content/uploads/2022/09/Rear-view-of-trailer-of-new-ca.jpg"
        },
        {
            id: 4,
            title: "Shipping Your Car Across the Country",
            text: "Did you know the average person in America moved about eleven times in their life?  Moving can be a stressful process, and figuring out how…",
            person: "Jack Squire",
            img: "https://mercuryautotransport.com/wp-content/uploads/2022/09/Rear-view-of-trailer-of-new-ca.jpg"
        },
        {
            id: 5,
            title: "Shipping Your Car Across the Country",
            text: "Did you know the average person in America moved about eleven times in their life?  Moving can be a stressful process, and figuring out how…",
            person: "Jack Squire",
            img: "https://mercuryautotransport.com/wp-content/uploads/2022/09/Rear-view-of-trailer-of-new-ca.jpg"
        },
        {
            id: 6,
            title: "Shipping Your Car Across the Country",
            text: "Did you know the average person in America moved about eleven times in their life?  Moving can be a stressful process, and figuring out how…",
            person: "Jack Squire",
            img: "https://mercuryautotransport.com/wp-content/uploads/2022/09/Rear-view-of-trailer-of-new-ca.jpg"
        },
    ]
    return (
        <div className="wr pd">
            {
                data?.map((i, k) => {
                    return (
                        <div key={k} className="cd">
                            <div style={{backgroundImage: `url("${i.img}")`}} className="smg"/>
                            <div className="cnt">
                                <div className="t1">
                                    {i.title}
                                </div>
                                <div className="tx">
                                    {i.text}
                                </div>
                                <div className="si">
                                    <div className="ic1">
                                        <BsFillPersonFill className="icon"/>
                                    </div>
                                    <div className="tr">
                                        <div className="pr">{i.person}</div>
                                        <div className="date">September 7, 2022</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Sc1;
