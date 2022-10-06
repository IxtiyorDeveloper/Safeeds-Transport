import React from 'react';
import Section1 from "../../components/sections/section-1/section-1";
import "./home.scss"
import Reviews from "../../components/sections/reviews/reviews";
import VideoSection from "../../components/sections/video-section/video-section";
import Call from "../../components/sections/call/call";
import Stories from "../../components/sections/stories/stories";
import Faqs from "../../components/sections/faqs/faqs";
import ContactUs from "../../components/sections/contacts/contacts";

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
