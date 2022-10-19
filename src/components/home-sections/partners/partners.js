import React from 'react';
import "./partners.scss"
import Slider from "react-slick";
import img2 from "../../../assets/imgs/partnerImgs/slide2.png"
import img3 from "../../../assets/imgs/partnerImgs/slide3.png"
import img4 from "../../../assets/imgs/partnerImgs/slide4.png"
import img5 from "../../../assets/imgs/partnerImgs/slide5.png"
import img7 from "../../../assets/imgs/partnerImgs/slide7.png"
import img9 from "../../../assets/imgs/partnerImgs/bbb.png"

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
            img: img2,
            link: "https://www.mymovingreviews.com/car-movers/safeeds-transport-inc-33673"
        },
        {
            img: img3,
            link: "https://www.copart.com"
        },
        {
            img: img4,
            link: "https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&query_type=queryCarrierSnapshot&query_param=USDOT&original_query_param=NAME&query_string=3938800&original_query_string=SAFEEDS%20TRANSPORT%20INC"
        },
        {
            img: img5,
            link: "https://www.transportreviews.com/Company/Safeeds-Transport-Inc"
        },
        {
            img: img7,
            link: "https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&query_type=queryCarrierSnapshot&query_param=USDOT&original_query_param=NAME&query_string=3938800&original_query_string=SAFEEDS%20TRANSPORT%20INC"
        },
        {
            img: img9,
            link: "https://www.bbb.org/us/ny/brooklyn/profile/trucking-transportation-brokers/safeeds-transport-inc-0121-87157757"
        }
    ];

    const handleNavigate = (link) => {
        window.location.href = link
    }

    return (
        <div className="partners pd">
            <div className="partner">
                OUR PARTNERS:
            </div>
            <div className="slider">
                <Slider {...settings}>
                    {
                        data?.map((i, k) => {
                            return (
                                <div key={k} className="mlr20" onClick={() => handleNavigate(i?.link)}>
                                    <img src={i.img} alt={`img${k}`} className="bgfd"/>
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
