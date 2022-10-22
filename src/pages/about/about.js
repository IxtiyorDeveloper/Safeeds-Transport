import React from 'react';
import "./about.scss"
import ASec1 from "../../components/about-sections/aSec1/aSec1";
import FeatureSection from "../../components/about-sections/feature-sections/feature-section";
import ContactUs from "../../components/home-sections/contacts/contacts";
import Partners from "../../components/home-sections/partners/partners";

function About(props) {
    return (
        <div className="about">
            <ASec1/>
            <FeatureSection/>
            <ContactUs/>
            <Partners/>
        </div>
    );
}

export default React.memo(About);
