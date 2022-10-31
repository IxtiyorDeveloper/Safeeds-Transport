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
import logo100 from "../../assets/imgs/logo100.png"

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

    function getText(html) {
        var divContainer = document.createElement("div");
        divContainer.innerHTML = html;
        return divContainer.textContent.split(
                /[\.!\?]+/).slice(0, 2)
            ||
            divContainer.innerText.split(
                /[\.!\?]+/).slice(0, 2)
            ||
            "";
    }

    return (
        <div className="blog">
            <Helmet>
                <meta charSet="utf-8"/>
                <link rel="icon" href={logo100}/>
                <meta name="keywords"
                      content="auto transport company, car shipping company, car shipping companies, companies that ship cars, auto transport companies, car transport companies, best car shipping company, best company to ship a car, car moving companies, car hauling companies, auto shipping companies, vehicle transport company, vehicle transportation company, safeeds, safeeds transport, safeeds transport inc, vehicle shipping, new york auto shipping"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="theme-color" content="#000000"/>
                <meta property="og:type" content="website" />
                <meta property="og:title"
                      content="Safeeds Transport Inc & Auto Shipping broker company | Over 1000+ 5-Star Reviews"
                      />
                <meta property="og:description"
                      content="One of the leading car transportation companies all over the states. We ship all types of vehicles CARs SUVs. Motorcycles Trucks ATVs ☎️ (315)314 43 37."
                      />
                <meta property="og:url" content="https://majtyr.vercel.app/blogs/How-long-it-takes-to-deliver-my-vehicle"
                      />
                <meta name="robots"
                      content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                      />
                <meta property="og:site_name" content="Safeeds Transport Inc" />
                <meta property="article:publisher"
                      content="https://www.facebook.com/safeedstransportinc" />
                <meta property="og:image"
                      content="https://safeeds-transport-ixtiyordeveloper.vercel.app/static/media/covers.44a7090a89d8f297b2d0.jpg"
                      />
                <meta property="og:image:width" content="2000" />
                <meta property="og:image:height" content="2000" />
                <meta property="og:image:type" content="image/jpg"
                      />
                <meta name="twitter:card"
                      content="https://safeeds-transport-ixtiyordeveloper.vercel.app/static/media/covers.44a7090a89d8f297b2d0.jpg"
                      />
                <meta name="twitter:title"
                      content="Safeeds Transport Inc & Auto Shipping broker company | Over 1000+ 5-Star Reviews"
                      />
                <meta name="twitter:description"
                      content="One of the leading car transportation companies all over the states. We ship all types of vehicles CARs SUVs. Motorcycles Trucks ATVs ☎️ (315)314 43 37."
                      />
                <meta name="twitter:site" content="@safeeds"
                      />
                <meta name="twitter:label1"
                      content="Est. reading time"
                      />
                <meta name="twitter:data1" content="10 minutes"
                      />
                <meta
                    name="description"
                    content="One of the leading car transportation companies all over the states. We ship all types of vehicles CARs SUVs. Motorcycles Trucks ATVs ☎️ (315)314 43 37."

                />
                <meta name="twitter:title"
                      content="Safeeds Transport Inc & Auto Shipping broker company | Over 1000+ 5-Star Reviews"

                />
                <meta name="twitter:description"
                      content="One of the leading car transportation companies all over the states. We ship all types of vehicles CARs SUVs. Motorcycles Trucks ATVs ☎️ (315)314 43 37."

                />
                <meta name="twitter:image"
                      content="https://safeeds-transport-ixtiyordeveloper.vercel.app/static/media/covers.44a7090a89d8f297b2d0.jpg"

                />
                <meta name="twitter:card"
                      content="https://safeeds-transport-ixtiyordeveloper.vercel.app/static/media/covers.44a7090a89d8f297b2d0.jpg"

                />
                <link rel="apple-touch-icon" href={logo100}/>
                <link rel="canonical" href="https://majtyr.vercel.app/blogs/How-long-it-takes-to-deliver-my-vehicle" />
                {/*<link rel="manifest"*/}
                {/*      href="%PUBLIC_URL%/manifest.json"/>*/}
                <title>Blog</title>
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
