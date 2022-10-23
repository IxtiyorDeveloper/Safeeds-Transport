import React from 'react';
import "./sc1.scss"
import {BsFillPersonFill} from "react-icons/bs"
import {useNavigate} from "react-router-dom";
import {useArticles} from "../../../hooks";
import {MainApi} from "../../../api";
import {Spin} from "antd";

function Sc1(props) {
    const navigate = useNavigate()

    const {data: articles, isLoading} = useArticles()

    return (
        <Spin spinning={isLoading}>
            <div className="wr pd">
                {
                    articles?.data?.data?.map((i, k) => {
                        return (
                            <div key={k} className="cd" onClick={() => navigate(`/blogs/${i?.title?.replace(/\s/g, '-')}`)}>
                                <div style={{backgroundImage: `url("${MainApi}/${i?.image}")`}} className="smg"/>
                                <div className="cnt">
                                    <div className="t1">
                                        {i?.title}
                                    </div>
                                    <div className="tx" dangerouslySetInnerHTML={{__html: i?.body}}/>
                                    <div className="si">
                                        <div className="ic1">
                                            <BsFillPersonFill className="icon"/>
                                        </div>
                                        <div className="tr">
                                            <div className="pr">{i?.name}</div>
                                            <div className="date">
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
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Spin>
    );
}

export default Sc1;
