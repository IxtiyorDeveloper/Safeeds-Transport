import React from 'react';
import "./help.scss"
import Banner from "../../components/help-sections/banner/banner";
import TSections from "../../components/help-sections/t-sections/t-sections";
import ContactSection from "../../components/services-sections/contact-section/contact-section";
import ContactUs from "../../components/home-sections/contacts/contacts";
import Partners from "../../components/home-sections/partners/partners";

function Help(props) {
    return (
        <div className="help">
            <Banner/>
            <TSections/>
            <ContactSection/>
            <ContactUs/>
            <Partners/>
        </div>
    );
}

export default Help;
