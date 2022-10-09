import React from 'react';
import Section1 from "../../components/home-sections/section-1/section-1";
import "./home.scss"
import Reviews from "../../components/home-sections/reviews/reviews";
import VideoSection from "../../components/home-sections/video-section/video-section";
import Call from "../../components/home-sections/call/call";
import Stories from "../../components/home-sections/stories/stories";
import Faqs from "../../components/home-sections/faqs/faqs";
import ContactUs from "../../components/home-sections/contacts/contacts";

function Home(props) {
    return (
        <div className="home">
            <Section1/>
            <Reviews/>
            <VideoSection/>
            <Call/>
            <Stories/>
            <Faqs/>
            <ContactUs/>
        </div>
    );
}

export default Home;
