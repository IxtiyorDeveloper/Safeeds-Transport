import React from 'react';
import "./contact.scss"
import Sw1 from "../../components/contact-sections/sw1/sw1";
import Acmem from "../../components/contact-sections/acmem/acmem";
import ContactSection from "../../components/services-sections/contact-section/contact-section";

function Contact(props) {
    return (
        <div className="contactPage">
            <Sw1/>
            <Acmem/>
            <ContactSection/>
        </div>
    );
}

export default Contact;
