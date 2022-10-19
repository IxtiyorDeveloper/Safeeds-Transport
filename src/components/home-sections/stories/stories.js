import React from 'react';
import "./stories.scss"
import img from "../../../assets/imgs/openhauler.jpg"
import {useArticles} from "../../../hooks";
import {Spin} from "antd";
import {MainApi} from "../../../api";

function Stories(props) {

    const {data: articles, isLoading} = useArticles()

    return (
        <div className="stories pd">
            <div className="title">
                Latest stories for you
            </div>
            <Spin spinning={isLoading}>
                <div className="wr">
                    {
                        articles?.data?.data?.slice(0, 3).map((i, k) => {
                            return (
                                <div className="latest" key={k}>
                                    <div style={{backgroundImage: `url(${MainApi}/${i?.image})`}} className="img"/>
                                    <div className="tx-main" dangerouslySetInnerHTML={{__html: i?.body}}/>
                                    <div className="date">Posted on:&nbsp;
                                        {
                                        `${new Date(i?.createdAt).getUTCFullYear()}-${new Date(i?.createdAt).getMonth() > 9 ?
                                            new Date(i?.createdAt).getMonth():
                                            `0${new Date(i?.createdAt).getMonth()}`
                                        }-${new Date(i?.createdAt).getDate() > 9 ?
                                            new Date(i?.createdAt).getDate():
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
