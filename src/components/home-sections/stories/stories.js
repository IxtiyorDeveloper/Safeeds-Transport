import React from 'react';
import "./stories.scss"
import img from "../../../assets/imgs/openhauler.jpg"

function Stories(props) {
    const data = [
        {
            id: 1,
            img: img,
            text: "How Motorcycle Shipping Works",
            date: "12-18-2022",
        },
        {
            id: 1,
            img: img,
            text: "How Motorcycle Shipping Works",
            date: "12-18-2022",
        },
        {
            id: 1,
            img: img,
            text: "How Motorcycle Shipping Works",
            date: "12-18-2022",
        },
        {
            id: 1,
            img: img,
            text: "How Motorcycle Shipping Works",
            date: "12-18-2022",
        },
    ]
    return (
        <div className="stories pd">
            <div className="title">
                Latest stories for you
            </div>
            <div className="wr">
                {
                    data?.slice(0, 3).map((i, k) => {
                        return (
                            <div className="latest" key={k}>
                                <div style={{backgroundImage: `url(${i.img})`}} className="img"/>
                                <div className="tx-main">{i.text}</div>
                                <div className="date">Posted on: {i.date}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Stories;
