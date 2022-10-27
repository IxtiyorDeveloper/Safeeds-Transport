import React from 'react';
import {GoLocation} from "react-icons/go"
import {AiFillPhone, AiFillStar} from "react-icons/ai"
import {FaFax} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillCalendarFill} from "react-icons/bs"
import "./footer.scss"
import logo from "../../assets/imgs/yellow-logo.png"

function Footer(props) {
    return (
        <div className="footer">
            <div className="pd inner">
                <div className="col">
                    <img src={logo}
                         alt="footerImg"/>
                    <div className="txfr">
                        Safeeds Transport Inc is accredited and highly rated with the BBB. We offer REAL Discount car
                        shipping
                        rates
                        and
                        Comprehensive Auto Transport Protection with the AFta PLAN. Don't ship your car before you give
                        us a
                        call. We want to earn your Trust. MC # : 01462168 USDOT # : 3938800
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
                                1201 Avenue K 3b,
                                Brooklyn, NY 11230,
                                United States
                            </div>
                        </div>
                        <div className="item">
                            <AiFillPhone className="icon"/>
                            <div className="tc">
                                <a href="tel:3153144337">Phone: (315)-314-4337</a>
                            </div>
                        </div>
                        <div className="item">
                            <FaFax className="icon"/>
                            <div className="tc">
                                <a href="tel:3153144337">Fax: (315)-314-4337</a>
                            </div>
                        </div>
                        <div className="item">
                            <HiOutlineMail className="icon"/>
                            <div className="tc">
                                <a href="mailto:info@safeeds.us">Email: info@safeeds.us</a>
                            </div>
                        </div>
                        <div className="item">
                            <BsFillCalendarFill className="icon"/>
                            <div className="tc">
                                Mon - Fri: 8am - 7pm EST
                                <br/>
                                Sat - Sun: 9am - 5pm
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
                                    (225 Reviews)
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
                                    (170 Reviews)
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
                                    (284 Reviews)
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
                                    (136 Reviews)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">
                        QUICK LINKS
                    </div>
                    <div className="list">
                        <div className="item">
                            <div className="tc">
                                <a>Our Licence</a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="tc">
                                <a href="/terms-and-conditions">Terms & Conditions</a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="tc">
                                <a>Condition Report & Checklist</a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="tc">
                                <a href="">Car Shipping Analytics</a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="tc">
                                <a href="">How Auto Transport Works</a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="tc">
                                <a href="">How We Determine Your Quote</a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="tc">
                                <a href="">The Safeeds Guarantee</a>
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
