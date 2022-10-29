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
import {MainApi} from "../../api";
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';

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

    const blocksFromHtml = htmlToDraft(article?.data?.data?.body ?? "");
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const editorState = EditorState.createWithContent(contentState);

    return (
        <div className="blog">
            <Helmet>
                <title>{article?.data?.data?.title}</title>
                <meta property="og:title"
                      content={article?.data?.data?.title}
                />
                <meta property="og:description"
                      content={editorState}
                />
                <meta property="og:url" content={`https://safeeds.us/blogs/${location.pathname.split("/")[2].replace(/-/g, " ")}`} />
                <meta name="robots"
                      content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                />
                <meta property="og:image"
                      content={`${MainApi}/${article?.data?.data?.image}`}
                      />
                <meta property="og:image:width" content="2000"/>
                <meta property="og:image:height" content="2000"/>
                <meta property="og:image:type" content="image/jpg"/>
                <meta name="twitter:card"
                      content={`${MainApi}/${article?.data?.data?.image}`}
                />
                <meta name="twitter:title"
                      content={article?.data?.data?.title}
                />
                <meta name="twitter:description"
                      content={editorState}
                />
                <meta name="twitter:site" content="@safeeds"/>
                <meta name="twitter:label1" content="Est. reading time"/>
                <meta name="twitter:data1" content="10 minutes"/>
                <meta
                    name="description"
                    content={editorState}
                />
                <meta name="twitter:title"
                      content={article?.data?.data?.title}
                />
                <meta name="twitter:description"
                      content={editorState}
                />
                <meta name="twitter:image"
                      content={`${MainApi}/${article?.data?.data?.image}`}
                />
                <meta name="twitter:card"
                      content={`${MainApi}/${article?.data?.data?.image}`}
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
