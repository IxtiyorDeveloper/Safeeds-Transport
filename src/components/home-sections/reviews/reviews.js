import React from 'react';
import "./reviews.scss"
import Slider from "react-slick";
import {AiFillStar} from "react-icons/ai"
import {useSatisfieds} from "hooks";
import {Spin} from "antd";
import {MainApi} from "../../../api";

function Reviews(props) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    const {data: satisfiedUsers, isLoading} = useSatisfieds()

    return (
        <div className="reviews pd">
            <div className="title">
                Reviews From Our Satisfied Customers
            </div>
            <Spin spinning={isLoading}>
                <div className="slider">
                    <Slider {...settings}>
                        {
                            satisfiedUsers?.data?.data?.map((i, k) => {
                                return (
                                    <div className="card-wr" key={k}>
                                        <div className="card">
                                            <div className="top">
                                                <div className="abs">
                                                    <img src={`${MainApi}/${i?.icon}`} alt="someImg" className="img"/>
                                                </div>
                                                <div className="name">
                                                    {i?.name}
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
                                            <div className="bottom" dangerouslySetInnerHTML={{__html: i?.commment}}/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </Spin>
        </div>
    );
}

export default Reviews;
