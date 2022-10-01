import React from 'react';
import {GoLocation} from "react-icons/go"
import {AiFillPhone} from "react-icons/ai"
import {FaFax} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillCalendarFill} from "react-icons/bs"
import "./footer.scss"

function Footer(props) {
    return (
        <div className="footer">
            <div className="pd inner">
                <div className="col">
                    <img src="https://mercuryautotransport.com/wp-content/uploads/2022/01/Asset-31.svg"
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
                <div className="col">
                    <div className="title">
                        RECENT POSTS
                    </div>
                    <div className="list">
                        <div className="item">
                            <div className="tc">
                                Something
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
