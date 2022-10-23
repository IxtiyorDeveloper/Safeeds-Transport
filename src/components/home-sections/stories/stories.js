import React from 'react';
import "./stories.scss"
import {useArticles} from "../../../hooks";
import {Spin} from "antd";
import {MainApi} from "../../../api";
import {useNavigate} from "react-router-dom";

function Stories(props) {
    const navigate = useNavigate()

    const {data: articles, isLoading} = useArticles()

    return (
        <div className="stories pd">
            <div className="title">
                Latest stories for you
            </div>
            <Spin spinning={isLoading}>
                <div className="wr">
                    {
                        articles?.data?.data?.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())?.slice(0,3)?.map((i, k) => {
                            return (
                                <div className="latest" key={k} onClick={() => navigate(`/blogs/${i?.title?.replace(/\s/g, '-')}`)}>
                                    <div style={{backgroundImage: `url(${MainApi}/${i?.image})`}} className="img"/>
                                    <div className="t1">
                                        {i?.title}
                                    </div>
                                    <div className="tx-main" dangerouslySetInnerHTML={{__html: i?.body}}/>
                                    <div className="date">Posted on:&nbsp;
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
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Spin>
        </div>
    );
}

export default Stories;
