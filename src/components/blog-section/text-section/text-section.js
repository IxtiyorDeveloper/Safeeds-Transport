import React from 'react';
import Card from "../../services-sections/card/card";
import "./text-section.scss"
import {MainApi} from "../../../api";
import {useArticles} from "../../../hooks";
import {Spin} from "antd";
import {useNavigate} from "react-router-dom";

function TextSection({article}) {
    const navigate = useNavigate()
    const data = article?.data?.data

    const arr = data?.body?.split(/\./);

    arr?.shift();

    let rest = arr?.join('. ');

    const {data: articles, isLoading} = useArticles()

    const handlePath = (id) => {
        navigate(`/blogs/${id}`)
    }

    return (
        <Spin spinning={isLoading}>
            <div className="text-section pd">
                <div className="iancard">
                    <div className="iwr">
                        <img src={`${MainApi}/${data?.image}`} alt="images"/>
                    </div>
                    <div className="cwr">
                        <Card/>
                    </div>
                </div>
                <div className="iancard">
                    <div className="iwr">
                        <div className="title" dangerouslySetInnerHTML={{__html: `${data?.body?.split('\.', 1)[0]}.`}}/>
                        <div className="body" dangerouslySetInnerHTML={{__html: `${rest}.`}}/>
                    </div>
                    <div className="cwr">
                        <div className="t12">
                            RECENT POST
                        </div>
                        <div className="posts">
                            <ul>
                                {
                                    articles?.data?.data?.map((i, k) => {
                                        return (
                                            <li key={k}>
                                                <p className="lit" onClick={() => handlePath(i.id)}>
                                                    {i?.title}
                                                </p>
                                                <p className="lid">
                                                    {
                                                        `${new Date(i?.createdAt).getUTCFullYear()}-${new Date(i?.createdAt).getMonth() > 9 ?
                                                            new Date(i?.createdAt).getMonth() :
                                                            `0${new Date(i?.createdAt).getMonth()}`
                                                        }-${new Date(i?.createdAt).getDate() > 9 ?
                                                            new Date(i?.createdAt).getDate() :
                                                            `0${new Date(i?.createdAt).getDate()}`
                                                        }
                            `
                                                    }
                                                </p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Spin>
    );
}

export default TextSection;
