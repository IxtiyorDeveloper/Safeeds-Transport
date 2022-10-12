import React from 'react';
import "./blog.scss"
import Banner from "../../components/blog-section/banner/banner";
import TextSection from "../../components/blog-section/text-section/text-section";
import ContactUs from "../../components/home-sections/contacts/contacts";
import Partners from "../../components/home-sections/partners/partners";

function Blog(props) {
    return (
        <div className="blog">
            <Banner/>
            <TextSection/>
            <ContactUs/>
            <Partners/>
        </div>
    );
}

export default Blog;