import React from 'react';
import {GoLocation} from "react-icons/go"
import {AiFillPhone, AiFillStar} from "react-icons/ai"
import {FaFax} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillCalendarFill} from "react-icons/bs"
import "./footer.scss"
import logo from "../../assets/imgs/logo.png"

function Footer(props) {
    return (
        <div className="footer">
            <div className="pd inner">
                <div className="col">
                    <img src={logo}
                         alt="footerImg"/>
                    <div className="tx">
                        AmeriFreight is accredited and highly rated with the BBB. We offer REAL Discount car shipping
                        rates
                        and
                        Comprehensive Auto Transport Protection with the AFta PLAN. Don't ship your car before you give
                        us a
                        call. We want to earn your Trust. MC # : 597401 USDOT # : 2238770
                    </div>
                </div>
                <div className="col">
                    <div className="title">
                        CONTACT US
                    </div>
                    <div className="list">
                        <div className="item">
                            <GoLocation className="icon"/>
                            <div className="tc">
                                417 Dividend Drive,
                                Suite D,
                                Peachtree City, GA 30269
                            </div>
                        </div>
                        <div className="item">
                            <AiFillPhone className="icon"/>
                            <div className="tc">
                                Phone: (770) 486-1010
                            </div>
                        </div>
                        <div className="item">
                            <FaFax className="icon"/>
                            <div className="tc">
                                Fax: 1 (470) 745-6078
                            </div>
                        </div>
                        <div className="item">
                            <HiOutlineMail className="icon"/>
                            <div className="tc">
                                Email: Click here
                            </div>
                        </div>
                        <div className="item">
                            <BsFillCalendarFill className="icon"/>
                            <div className="tc">
                                Mon - Fri: 8am - 9pm EST
                                Sat: 9am - 6pm
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">
                        REVEWS
                    </div>
                    <div className="list">
                        <div className="item">
                            <div className="tc">
                                <div>
                                    TRANSPORT REVIEWS
                                </div>
                                <div className="stars">
                                    <AiFillStar className="star"/>
                                    <AiFillStar className="star"/>
                                    <AiFillStar className="star"/>
                                    <AiFillStar className="star"/>
                                </div>
                                <div className="nums">
                                    (2735 Reviews)
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="tc">
                                <div>
                                    FACEBOOK
                                </div>
                                <div className="stars">
                                    <AiFillStar className="star"/>
                                    <AiFillStar className="star"/>
                                    <AiFillStar className="star"/>
                                    <AiFillStar className="star"/>
                                </div>
                                <div className="nums">
                                    (1270 Reviews)
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="tc">
                                <div>
                                    GOOGLE
                                </div>
                                <div className="stars">
                                    <AiFillStar className="star"/>
                                    <AiFillStar className="star"/>
                                    <AiFillStar className="star"/>
                                    <AiFillStar className="star"/>
                                </div>
                                <div className="nums">
                                    (2735 Reviews)
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="tc">
                                <div>
                                    BBB
                                </div>
                                <div className="stars">
                                    <AiFillStar className="star"/>
                                    <AiFillStar className="star"/>
                                    <AiFillStar className="star"/>
                                    <AiFillStar className="star"/>
                                </div>
                                <div className="nums">
                                    (2735 Reviews)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">
                        MENU
                    </div>
                    <div className="list">
                        <div className="item">
                            <div className="tc">
                                <a href="">About us</a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="tc">
                                <a href=""> Get An Instant Quote</a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="tc">
                                <a href="">Reviews</a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="tc">
                                <a href="">Discounts</a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="tc">
                                <a href="">CARE</a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="tc">
                                <a href="">Job Openings</a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="tc">
                                <a href="">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line pd"/>
            <div className="term pd">
                <div className="chl">
                    Website Terms
                </div>
                <div className="chl">
                    Privacy Policy
                </div>
                <div className="chl">
                   Accessibility Statement
                </div>
                <div className="chl">
                    CA Transparency in Supply Chains Act
                </div>
                <div className="chl">
                    Supplier Code of Conduct
                </div>
                <div className="chl">
                    Marketing to Children
                </div>
                <div className="chl">
                    Do Not Sell My Information
                </div>
            </div>
            <div className="rg pd">
                &copy;2022 Safeeds Transport Inc, LLC. All Rights Reserved
            </div>
        </div>
    );
}

export default Footer;
