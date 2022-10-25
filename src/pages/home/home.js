import React from 'react';
import Section1 from "../../components/home-sections/section-1/section-1";
import "./home.scss"
import Reviews from "../../components/home-sections/reviews/reviews";
import VideoSection from "../../components/home-sections/video-section/video-section";
import Call from "../../components/home-sections/call/call";
import Stories from "../../components/home-sections/stories/stories";
import Faqs from "../../components/home-sections/faqs/faqs";
import ContactUs from "../../components/home-sections/contacts/contacts";
import Partners from "../../components/home-sections/partners/partners";
import {Helmet} from "react-helmet";

function Home(props) {
    return (
        <div className="home">
            <Helmet>
                <meta charSet="utf-8"/>
                <link rel="icon" href="%PUBLIC_URL%/logo100.png"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="theme-color" content="#000000"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title"
                      content="Safeeds Transport Inc & Auto Shipping broker company | Over 1000+ 5-Star Reviews"/>
                <meta property="og:description"
                      content="One of the leading car transportation companies all over the states. We ship all types of vehicles CARs SUVs. Motorcycles Trucks ATVs ☎️ (315)314 43 37."/>
                <meta property="og:url" content="https://safeeds.us"/>
                <meta name="robots"
                      content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
                <meta property="og:site_name" content="Safeeds Transport Inc"/>
                <meta property="article:publisher" content="https://www.facebook.com/safeedstransportinc"/>
                <meta property="og:image" content="https://safeeds.us/static/media/covers.44a7090a89d8f297b2d0.jpg"/>
                <meta property="og:image:width" content="2000"/>
                <link rel="canonical" href="https://safeeds.us"/>
                <meta property="og:image:height" content="2000"/>
                <meta property="og:image:type" content="image/jpg"/>
                <meta name="twitter:card" content="https://safeeds.us/static/media/covers.44a7090a89d8f297b2d0.jpg"/>
                <meta name="twitter:title"
                      content="Safeeds Transport Inc & Auto Shipping broker company | Over 1000+ 5-Star Reviews"/>
                <meta name="twitter:description"
                      content="One of the leading car transportation companies all over the states. We ship all types of vehicles CARs SUVs. Motorcycles Trucks ATVs ☎️ (315)314 43 37."/>
                <meta name="twitter:site" content="@safeeds"/>
                <meta name="twitter:label1" content="Est. reading time"/>
                <meta name="twitter:data1" content="10 minutes"/>
                <meta
                    name="description"
                    content="One of the leading car transportation companies all over the states. We ship all types of vehicles CARs SUVs. Motorcycles Trucks ATVs ☎️ (315)314 43 37."
                />
                <meta name="twitter:title"
                      content="Safeeds Transport Inc & Auto Shipping broker company | Over 1000+ 5-Star Reviews"/>
                <meta name="twitter:description"
                      content="One of the leading car transportation companies all over the states. We ship all types of vehicles CARs SUVs. Motorcycles Trucks ATVs ☎️ (315)314 43 37."/>
                <meta name="twitter:image" content="https://safeeds.us/static/media/covers.44a7090a89d8f297b2d0.jpg"/>
                <meta name="twitter:card" content="https://safeeds.us/static/media/covers.44a7090a89d8f297b2d0.jpg"/>
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo100.png"/>

                <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
                <title>Safeeds Transport</title>
            </Helmet>
            <Section1/>
            <Reviews/>
            <VideoSection/>
            <Call/>
            <Stories/>
            <Faqs/>
            <ContactUs/>
            <Partners/>
        </div>
    );
}

export default React.memo(Home);
