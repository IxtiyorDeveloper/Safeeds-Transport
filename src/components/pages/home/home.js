import React from 'react';
import Section1 from "../../section-1/section-1";
import "./home.scss"
import Reviews from "../../reviews/reviews";
import VideoSection from "../../video-section/video-section";
import Call from "../../call/call";
import Stories from "../../stories/stories";

function Home(props) {
    return (
        <div className="home">
            <Section1/>
            <Reviews/>
            <VideoSection/>
            <Call/>
            <Stories/>
        </div>
    );
}

export default Home;
