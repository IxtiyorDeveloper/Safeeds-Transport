import React from 'react';
import "./teams.scss"
import Cards from "../../components/teams-sections/cards/cards";
import ContactSection from "../../components/services-sections/contact-section/contact-section";

function Teams(props) {
    return (
        <div className="teams">
            <Cards/>
            <ContactSection/>
        </div>
    );
}

export default Teams;
