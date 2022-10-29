import React from 'react';
import "./blog.scss"
import Banner from "../../components/blog-section/banner/banner";
import TextSection from "../../components/blog-section/text-section/text-section";
import ContactUs from "../../components/home-sections/contacts/contacts";
import Partners from "../../components/home-sections/partners/partners";
import {useArticle, useArticles} from "hooks";
import {Spin} from "antd";
import {useLocation} from "react-router-dom";
import {Helmet} from 'react-helmet';

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
                <title>{article?.data?.data?.title}</title>
                <meta property="og:title"
                      content={article?.data?.data?.title}
                />
                <meta property="og:description"
                      content={article?.data?.data?.body}
                />
                <meta property="og:url" content={`https://safeeds.us/blogs/${location.pathname.split("/")[2].replace(/-/g, " ")}`} />
                <meta name="robots"
                      content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                />
                <meta property="og:image"
                      content={article?.data?.data?.image}
                      />
                <meta property="og:image:width" content="2000"/>
                <meta property="og:image:height" content="2000"/>
                <meta property="og:image:type" content="image/jpg"/>
                <meta name="twitter:card"
                      content={article?.data?.data?.image}
                />
                <meta name="twitter:title"
                      content={article?.data?.data?.title}
                />
                <meta name="twitter:description"
                      content={article?.data?.data?.body}
                />
                <meta name="twitter:site" content="@safeeds"/>
                <meta name="twitter:label1" content="Est. reading time"/>
                <meta name="twitter:data1" content="10 minutes"/>
                <meta
                    name="description"
                    content={article?.data?.data?.body}
                />
                <meta name="twitter:title"
                      content={article?.data?.data?.title}
                />
                <meta name="twitter:description"
                      content={article?.data?.data?.body}
                />
                <meta name="twitter:image"
                      content={article?.data?.data?.image}
                />
                <meta name="twitter:card"
                      content={article?.data?.data?.image}
                />
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
