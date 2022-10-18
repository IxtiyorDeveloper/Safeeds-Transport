import React from 'react';
import "./acmem.scss"
import {BsFillPersonFill} from "react-icons/bs"
import img from "../../../assets/imgs/avatar.jpg"

function Acmem(props) {
    const data = [
        {
            name: "David Miller",
            action: "Updated their profile",
            date: "2 days ago",
            img: img
        },
        {
            name: "David Miller",
            action: "Updated their profile",
            date: "2 days ago",
            img: img
        },
        {
            name: "David Miller",
            action: "Updated their profile",
            date: "2 days ago",
            img: img
        },
        {
            name: "David Miller",
            action: "Updated their profile",
            date: "2 days ago",
            img: img
        },
    ];
    const people = [
        {
            name: "Jack Squire",
            img: ""
        },
        {
            name: "Jack Squire",
            img: ""
        },
        {
            name: "Jack Squire",
            img: ""
        },
        {
            name: "Jack Squire",
            img: ""
        },
        {
            name: "Jack Squire",
            img: ""
        },
        {
            name: "Jack Squire",
            img: ""
        },
        {
            name: "Jack Squire",
            img: ""
        },
        {
            name: "Jack Squire",
            img: ""
        },
        {
            name: "Jack Squire",
            img: ""
        },
        {
            name: "Jack Squire",
            img: ""
        },
        {
            name: "Jack Squire",
            img: ""
        },
        {
            name: "Jack Squire",
            img: ""
        },
        {
            name: "Jack Squire",
            img: ""
        },
        {
            name: "Jack Squire",
            img: ""
        },
        {
            name: "Jack Squire",
            img: ""
        },
    ]
    return (
        <div className="acmem pd">
            <div className="c1">
                <div className="ft">
                    <div className="lf">
                        Activity
                    </div>
                    <div className="rg">
                        ALL ACTIVITY >
                    </div>
                </div>
                {
                    data?.map((i, k) => {
                        return (
                            <div key={k} className="rw">
                                <div style={{backgroundImage: `url(${i.img})`}} className="img">

                                </div>
                                <div className="txs">
                                    <div className="na">
                                        {i.name} <span>{i.action}</span>
                                    </div>
                                    <div className="date">
                                        {i.date}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="card">
                    <img
                        className="mim"
                        src="https://mercuryautotransport.com/wp-content/uploads/2022/10/ship-your-car.png"
                        alt="img"
                    />
                    <p className="t1">How to Ship Your Car When Moving Long Distance</p>
                    <p className="t2">2021 saw 8.4% of Americans up sticks and head for pastures new. Are you planning a big move
                        sometime soon? Maybe you’re a…</p>
                </div>
            </div>
            <div className="c1">
                <div className="ft">
                    <div className="lf">
                        Team Members
                    </div>
                    <div className="rg">
                        ALL STAFF >
                    </div>
                </div>
                {
                    people?.map((i, k) => {
                        return (
                            <div key={k} className="rw">
                                <div className="icImg">
                                    <BsFillPersonFill/>
                                </div>
                                <div className="tx1">
                                    {i.name}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Acmem;
