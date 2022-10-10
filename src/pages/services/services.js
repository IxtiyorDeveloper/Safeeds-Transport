import React from 'react';
import S1 from "../../components/services-sections/s1/s1";
import "./services.scss"
import S2 from "../../components/services-sections/s2/s2";
import Vd from "../../components/services-sections/vd/vd";
import Cards from "../../components/services-sections/cards/cards";
import SInfo from "../../components/services-sections/sInfo/sInfo";
import ContactSection from "../../components/services-sections/contact-section/contact-section";
import ContactUs from "../../components/home-sections/contacts/contacts";
import Partners from "../../components/home-sections/partners/partners";

function Services(props) {
    return (
        <div className="spg">
            <S1/>
            <S2
                title="Open Auto Transport"
                text="Open auto transport carriers are trucks that are used to haul vehicles, as the name says, openly, with no walls around the carrier. They are the trailers you see on the roads every day with cars stacked seemingly precariously on the back of their rigs. They are the most common and easiest-to-find carriers in the transportation industry, moving roughly 90% of all auto freight each year."
                order={true}
                picture="https://mercuryautotransport.com/wp-content/uploads/2022/01/HomePage-Hero-4.jpg"

            />
            <S2
                title="Enclosed Auto Transport"
                text="Shipping Enclosed is the safest way to transport a vehicle if you don't want it exposed to the elements. Only the most experienced and highest quality carriers run these exclusive trailers."
                order={false}
                picture="https://mercuryautotransport.com/wp-content/uploads/2022/01/AdobeStock_72577955-scaled.jpeg"
            />
            <S2
                title="Flatbed Auto Transport"
                text="The method you choose – whether open, enclosed, or flatbed – can impact the safety of your vehicle as well as the price and how long it takes to get your car."
                order={true}
                picture="https://mercuryautotransport.com/wp-content/uploads/2022/01/MERCURY_AUTO_TRANSPORT.jpg"
            />
            <Vd/>
            <Cards/>
            <SInfo/>
            <ContactSection/>
            <ContactUs/>
            <Partners/>
        </div>
    );
}

export default Services;
