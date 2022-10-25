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
import { Helmet } from 'react-helmet-async';

function Home(props) {
    return (
        <div className="home">
            <Helmet>
                <title>Hello World</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
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
