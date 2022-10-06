import React from 'react';
import "./about.scss"
import ASec1 from "../../components/about-sections/aSec1/aSec1";
import FeatureSection from "../../components/about-sections/feature-sections/feature-section";

function About(props) {
    return (
        <div className="about">
            <ASec1/>
            <FeatureSection/>
        </div>
    );
}

export default About;
