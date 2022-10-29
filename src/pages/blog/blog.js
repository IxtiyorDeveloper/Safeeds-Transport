import React from 'react';
import "./blog.scss"
import Banner from "../../components/blog-section/banner/banner";
import TextSection from "../../components/blog-section/text-section/text-section";
import ContactUs from "../../components/home-sections/contacts/contacts";
import Partners from "../../components/home-sections/partners/partners";
import {useArticle, useArticles} from "hooks";
import {Spin} from "antd";
import {useLocation} from "react-router-dom";
import { Helmet } from 'react-helmet';

function Blog(props) {
    const location = useLocation()
    const {data: articles, isLoading: isLoading1} = useArticles()
    const id = articles?.data?.data?.find(i => (
            i.title.replace(/\s/g, '').toLowerCase().toString().at(-1) === "?" ?
                i.title.replace(/\s/g, '').toLowerCase().toString().slice(0, -1) :
                i.title.replace(/\s/g, '').toLowerCase().toString()
        )
        ===
        `${location.pathname.split("/")[2].replace(/-/g, "").toLowerCase().toString()}`)?.id
    const {data: article, isLoading} = useArticle(id)

    return (
        <div className="blog">
            <Helmet>
                <title>Turbo Todo</title>
                <meta name="description" content={article?.data?.data?.body?.split('\.', 1)[0]} />
                <meta name="title" content={article?.data?.data?.title} />
                <meta name="theme-color" content="#ccc" />
            </Helmet>
            <Spin spinning={isLoading || isLoading1}>
                <Banner article={article}/>
            </Spin>
            <TextSection article={article}/>
            <ContactUs/>
            <Partners/>
        </div>
    );
}

export default React.memo(Blog);
