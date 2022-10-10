import React from 'react';
import Sc1 from "../../components/blog-sections/sc1/sc1";
import "./blogs.scss"
import ContactUs from "../../components/home-sections/contacts/contacts";
import Partners from "../../components/home-sections/partners/partners";

function Blogs(props) {
    return (
        <div className="blogs">
            <Sc1/>
            <ContactUs/>
            <Partners/>
        </div>
    );
}

export default Blogs;
