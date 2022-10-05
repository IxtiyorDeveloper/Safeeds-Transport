import React from 'react';
import Section1 from "../../sections/section-1/section-1";
import "./home.scss"
import Reviews from "../../sections/reviews/reviews";
import VideoSection from "../../sections/video-section/video-section";
import Call from "../../sections/call/call";
import Stories from "../../sections/stories/stories";
import Faqs from "../../sections/faqs/faqs";
import ContactUs from "../../sections/contacts/contacts";

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
