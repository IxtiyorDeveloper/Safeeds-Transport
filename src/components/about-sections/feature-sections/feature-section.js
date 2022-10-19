import React from 'react';
import "./feature-section.scss"
import {TiTick} from "react-icons/ti"
import {TbDiscount2} from "react-icons/tb"
import {AiOutlineFileProtect, AiOutlineInsurance} from "react-icons/ai"
import {FcRating} from "react-icons/fc"
import {FaMoneyCheck} from "react-icons/fa"
import logo from "../../../assets/imgs/logo.png"
import img1 from "../../../assets/imgs/img1.jpg"

function FeatureSection(props) {
    return (
        <div className="feature-section">
            <div className="title">
                THE MOST IMPORTANT FEATURES OF AN AUTO TRANSPORT COMPANY
            </div>
            <div className="pd">
                <div className="row">
                    <div className="col">
                        <TiTick className="icon"/>
                    </div>
                    <div className="col"><TbDiscount2 className="ic"/>DISCOUNTS</div>
                    <div className="col">
                        Finding a company that offers discounts helps you save money. Look for discounts that include
                        our Military, First Responders, Seniors, Students, Return Customers, and Early Bird discounts.
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <TiTick className="icon"/>
                    </div>
                    <div className="col"><AiOutlineInsurance className="ic"/>Insurance</div>
                    <div className="col">
                        It’s critical that a broker validates that a carrier that is used to ship a vehicle has the
                        required basic insurance to protect your vehicle.
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <TiTick className="icon"/>
                    </div>
                    <div className="col"><AiOutlineFileProtect className="ic"/>AFta GAP Protection</div>
                    <div className="col">
                        A carrier’s regular insurance may not protect your vehicle from all damage and inconvenience
                        that can happen during shipment. AFta GAP Protection offers superior protection over the
                        carrier’s basic insurance and gives you peace of mind when shipping one of your greatest assets.
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <TiTick className="icon"/>
                    </div>
                    <div className="col"><FcRating className="ic"/>High Review Ratings</div>
                    <div className="col">
                        The level of customer service separates you from a nightmare shipping experience to everything
                        being seamless and worry-free. Customer reviews and surveys are good indicators of who you can
                        trust, especially the BBB and Google reviews.
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <TiTick className="icon"/>
                    </div>
                    <div className="col"><FaMoneyCheck className="ic"/>No Deposit</div>
                    <div className="col">
                        Be wary of companies that ask for money up-front. Reputable companies will only take a deposit
                        after a carrier has been secured for you and you’ve agreed to the shipping price.
                    </div>
                </div>
            </div>
            <div className="nx">
                <div className="pd">
                    <div className="rw">
                        <div className="on">
                            <img src={logo} alt="logo"/>
                        </div>
                        <div className="tx">
                            Who We Are
                            Built on American values, Safeeds Transport Inc was founded in Brooklyn, New York, a
                            beautiful town located south of Atlanta. From the onset, Safeeds Transport Inc’s mission was
                            to
                            become
                            the #1 most trusted logistics service provider in the US. From our humble beginnings in
                            2020
                            Safeeds Transport Inc has always brought honesty and transparency into the very complex
                            vehicle
                            shipping
                            industry.
                        </div>
                    </div>
                    <div className="tx21">
                        For the past many years till now, Safeeds Transport Inc has continued to disrupt the auto
                        transport
                        industry
                        with honesty, competence, and innovation, providing high-quality service to our customers
                        nationwide. Safeeds Transport Inc considers people first, and productivity second with a sincere
                        intent
                        to be
                        an accountable corporate citizen contributing towards the industry, society, and the community.
                        We
                        aspire to transform the shipping industry with a people-first approach in all things.

                        We CARE
                        Safeeds Transport Inc takes its role in the community very seriously. We at
                        Safeeds Transport Inc believe it is a privileged duty to help others and pay forward to our
                        communities.
                        Please visit our CARE page to learn more about the causes we support.
                    </div>
                </div>
            </div>
            <div className="quote">
                <div style={{backgroundImage: `url(${img1})`}} className="img1">
                    <div className="bgMaker">
                        <div className="ct">
                            <div className="b1">
                                Start Your Free Quote
                            </div>
                            <div className="b2">
                                SEE HOW WE CAN SAVE YOUR MONEY
                            </div>
                            <button className="glow-on-hover" type="button">GET A QUOTE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureSection;
