import React from 'react';
import "./team-section.scss"
import Card from "../../services-sections/card/card";
import {useParams} from "react-router-dom";
import {data} from "../../teams-sections/data";
import {Empty, Tabs} from 'antd';
import {AiOutlineProfile} from "react-icons/ai";
import {GoGithubAction} from "react-icons/go";
import {MdGroups} from "react-icons/md";
import {IoMdContacts} from "react-icons/io";


function TeamSection(props) {
    const {id} = useParams()

    const one = data?.filter(i => i.id === Number(id))[0]

    const profile = () => {
        return (
            <div className="prteam">
                Profile
                <div className="line"/>
                <table>
                    {
                        Object.entries(one?.data?.profile)?.map((k, v) => {
                            return (
                                <tr key={v}>
                                    <td className="label">{k[0]}</td>
                                    <td className="value">{k[0] === "Direct" ?
                                        <a href={`tel:${k[1]}`}>{k[1]}</a> : k[1]}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        )
    }

    const timeline = () => {
        return (
            <div className="timeline">
                {
                    one?.data?.timeline?.map((k, v) => {
                        return (
                            <div className="card" key={v}>
                                <div className="imgWr">
                                    <img src={one?.img} alt="anoimg"/>
                                </div>
                                <div className="con">
                                    <div className="f">
                                        <span>{one?.name}</span> {k?.action}
                                    </div>
                                    <div className="t">
                                        {k?.time}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    const children = [
        profile(),
        timeline(),
        <Empty/>,
        <Empty/>
    ]

    const list = [
        {
            title: "Profile",
            icon: <AiOutlineProfile/>
        },
        {
            title: "Timeline",
            icon: <GoGithubAction/>
        },
        {
            title: "Groups",
            icon: <MdGroups/>
        },
        {
            title: "Connections",
            icon: <IoMdContacts/>
        },
    ]
    return (
        <div className="team-section pd">
            <div className="content">
                <div className="card">
                    <Card/>
                </div>
                <div className="info">
                    <div className="img">
                    </div>
                    <div className="bt">
                        <div className="iwr">
                            <img
                                src={one?.img}
                                alt="s"/>
                        </div>
                        <div className="name">
                            <div className="law">
                                {one?.name}
                            </div>
                            <div className="link">
                                @{one?.data?.profile?.["First Name"]}
                            </div>
                        </div>
                    </div>
                    <Tabs
                        defaultActiveKey="1"
                        items={list.map((item, i) => {
                            const id = String(i + 1);
                            return {
                                label: (
                                    <div className="tab-menu">
                                        {item?.icon} {item?.title}
                                    </div>
                                ),
                                key: id,
                                children: children[i],
                            };
                        })}
                    />
                </div>
            </div>
        </div>
    );
}

export default TeamSection;
