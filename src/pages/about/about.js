import React from 'react';
import "./about.scss"
import ASec1 from "../../components/about-sections/aSec1/aSec1";
import FeatureSection from "../../components/about-sections/feature-sections/feature-section";
import ContactUs from "../../components/home-sections/contacts/contacts";
import Partners from "../../components/home-sections/partners/partners";
import {Helmet} from "react-helmet";
import img from "../../assets/imgs/photo.jpg";

function About(props) {
    return (
        <div className="about">
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Safeeds Transport Inc</title>
                <link rel="canonical" href="https://safeeds.us/"/>
                <meta property="og:image" content={img}/>
                <meta property="og:type" content="website"/>
                <meta property="og:title"
                      content="About desc"/>
            </Helmet>
            <ASec1/>
            <FeatureSection/>
            <ContactUs/>
            <Partners/>
        </div>
    );
}

export default React.memo(About);
