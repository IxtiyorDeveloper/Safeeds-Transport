import React from 'react';
import "./team.scss"
import TeamSection from "../../components/team/team-section/team-section";
import ContactSection from "../../components/services-sections/contact-section/contact-section";
import ContactUs from "../../components/home-sections/contacts/contacts";
import Partners from "../../components/home-sections/partners/partners";

function Team(props) {
    return (
        <div className="teamPage">
            <TeamSection/>
            <ContactSection/>
            <ContactUs/>
            <Partners/>
        </div>
    );
}

export default React.memo(Team);
