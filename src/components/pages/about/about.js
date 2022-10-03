import React from 'react';
import "./about.scss"
import ASec1 from "../../about-sections/aSec1/aSec1";
import FeatureSection from "../../about-sections/feature-sections/feature-section";

function About(props) {
    return (
        <div className="about">
            <ASec1/>
            <FeatureSection/>
        </div>
    );
}

export default About;
