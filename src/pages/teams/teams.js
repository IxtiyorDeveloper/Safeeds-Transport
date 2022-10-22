import React from 'react';
import "./teams.scss"
import Cards from "../../components/teams-sections/cards/cards";
import ContactSection from "../../components/services-sections/contact-section/contact-section";
import ContactUs from "../../components/home-sections/contacts/contacts";
import Partners from "../../components/home-sections/partners/partners";

function Teams(props) {
    return (
        <div className="teams">
            <Cards/>
            <ContactSection/>
            <ContactUs/>
            <Partners/>
        </div>
    );
}

export default React.memo(Teams);
