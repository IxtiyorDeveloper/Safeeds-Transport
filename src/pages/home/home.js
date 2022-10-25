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
import {Helmet} from 'react-helmet';

function Home(props) {
    return (
        <div className="home">
            <Helmet>git
                <meta property="og:title"
                      content="Safeeds Transport Inc & Auto Shipping broker company | Over 1000+ 5-Star Reviews"/>
                <meta property="og:description"
                      content="One of the leading car transportation companies all over the states. We ship all types of vehicles CARs SUVs. Motorcycles Trucks ATVs ☎️ (315)314 43 37."/>
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
