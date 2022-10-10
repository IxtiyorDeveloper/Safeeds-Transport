import React from 'react';
import "./partners.scss"
import Slider from "react-slick";
import img1 from "../../../assets/imgs/partnerImgs/slide1.png"
import img2 from "../../../assets/imgs/partnerImgs/slide2.png"
import img3 from "../../../assets/imgs/partnerImgs/slide3.png"
import img4 from "../../../assets/imgs/partnerImgs/slide4.png"
import img5 from "../../../assets/imgs/partnerImgs/slide5.png"
import img6 from "../../../assets/imgs/partnerImgs/slide6.png"
import img7 from "../../../assets/imgs/partnerImgs/slide7.png"
import img8 from "../../../assets/imgs/partnerImgs/slide8.png"

function Partners(props) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const data = [
        {
            img:img1,
        },
        {
            img:img2,
        },
        {
            img:img3,
        },
        {
            img:img4,
        },
        {
            img:img5,
        },
        {
            img:img6,
        },
        {
            img:img7,
        },
        {
            img:img8,
        }
    ];

    return (
        <div className="partners pd">
            <div className="partner">
                OUR PARTNERS:
            </div>
            <div className="slider">
                <Slider {...settings}>
                    {
                        data?.map((i,k) => {
                            return(
                                <div  key={k} className="mlr20">
                                    <img src={i.img} alt={`img${k}`}/>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    );
}

export default Partners;