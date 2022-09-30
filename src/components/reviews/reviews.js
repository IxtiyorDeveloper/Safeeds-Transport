import React from 'react';
import "./reviews.scss"
import Slider from "react-slick";
import {AiFillStar} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"
import {FcGoogle} from "react-icons/fc"

function Reviews(props) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const data = [
        {
            name: "Carolyn W.",
            star: 5,
            site: "Google",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto est exercitationem facere odit optio saepe ullam! Accusantium alias dolor error, eveniet facere mollitia officia perferendis quia recusandae, repellat tempora.\n"
        },
        {
            name: "Shaun M.",
            star: 5,
            site: "Google",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto est exercitationem facere odit optio saepe ullam! Accusantium alias dolor error, eveniet facere mollitia officia perferendis quia recusandae, repellat tempora.\n"
        },
        {
            name: "Amanda W.",
            star: 5,
            site: "Facebook",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto est exercitationem facere odit optio saepe ullam! Accusantium alias dolor error, eveniet facere mollitia officia perferendis quia recusandae, repellat tempora.\n"
        },
        {
            name: "Carolyn W.",
            star: 5,
            site: "Facebook",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto est exercitationem facere odit optio saepe ullam! Accusantium alias dolor error, eveniet facere mollitia officia perferendis quia recusandae, repellat tempora.\n"
        },
        {
            name: "Carolyn W.",
            star: 5,
            site: "Facebook",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto est exercitationem facere odit optio saepe ullam! Accusantium alias dolor error, eveniet facere mollitia officia perferendis quia recusandae, repellat tempora.\n"
        },
        {
            name: "Carolyn W.",
            star: 5,
            site: "Facebook",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto est exercitationem facere odit optio saepe ullam! Accusantium alias dolor error, eveniet facere mollitia officia perferendis quia recusandae, repellat tempora.\n"
        },
    ];

    return (
        <div className="reviews pd">
            <div className="title">
                Reviews From Our Satisfied Customers
            </div>
            <div className="slider">
                <Slider {...settings}>
                    {
                        data?.map((i, k) => {
                            return (
                                <div className="card-wr" key={k}>
                                    <div className="card">
                                        <div className="top">
                                            <div className="abs">
                                                {
                                                    i.site === "Facebook" ?
                                                        <FaFacebookF className="icon fc" />
                                                        :
                                                        <FcGoogle className="icon"/>
                                                }
                                            </div>
                                            <div className="name">
                                                {i.name}
                                            </div>
                                            <div className="st">
                                                {
                                                    Array.from(Array(i.star).keys())?.map((m, index) => {
                                                        return (
                                                            <div key={index}>
                                                                <AiFillStar className="star"/>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                                            consequatur deleniti dignissimos doloribus eos, fugiat hic illum labore
                                            maiores minus modi placeat quo voluptates. Eaque eius ex obcaecati officiis
                                            perferendis quam, qui rerum tempora. Ab adipisci eveniet natus porro sequi?
                                            Amet animi consectetur, dolorum itaque neque praesentium quidem vel
                                            voluptatum!
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    );
}

export default Reviews;
