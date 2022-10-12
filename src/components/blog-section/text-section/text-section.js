import React from 'react';
import Card from "../../services-sections/card/card";
import "./text-section.scss"
import img from "../../../assets/imgs/ship.webp"

function TextSection(props) {
    return (
        <div className="text-section pd">
            <div className="iancard">
                <div className="iwr">
                    <img src={img} alt="images"/>
                </div>
                <div className="cwr">
                    <Card/>
                </div>
            </div>
            <div className="iancard">
                <div className="iwr">
                    <div className="title">
                        Shipping your car to Europe requires several key steps to ensure you obey regional laws and
                        avoid unnecessary expense.
                    </div>
                    <div className="body">
                        Familiarity is the main advantage. You know your vehicle and its strengths and weaknesses. This
                        helps avoid the leap of faith element in renting a foreign car you’re unfamiliar with, where the
                        vendor’s word that it’s roadworthy is sometimes all a tourist has. Shipping your car could also
                        be cheaper than an extended rental.

                        Foreign territory can also mean navigating challenging new terrain. Driving a foreign car under
                        those conditions could compound your stress and potentially increase your accident risk, making
                        your own car the safer choice. Another benefit of shipping your car is having a guaranteed
                        vehicle. Tourists who don’t book a rental in advance can find it difficult or even impossible to
                        find one depending on the time of year and unpredictable customer demand.

                        Conversely, shipping your car to Europe may be more trouble and expense than it’s worth. Many
                        countries have quality public transport with well-managed bus, tram, and train systems making it
                        easy to get to or near almost any destination. These can prove far cheaper than an auto shipping
                        quote and then paying repeatedly for fuel and toll roads after your vehicle arrives in the EU.
                    </div>
                </div>
                <div className="cwr">
                    <div className="t12">
                        RECENT POST
                    </div>
                    <div className="posts">
                        <ul>
                            <li>
                                <p className="lit">
                                    How to Ship Your Car When Moving Long Distance
                                </p>
                                <p className="lid">
                                    October 5, 2022
                                </p>
                            </li>
                            <li>
                                <p className="lit">
                                    How to Ship Your Car When Moving Long Distance
                                </p>
                                <p className="lid">
                                    October 5, 2022
                                </p>
                            </li>
                            <li>
                                <p className="lit">
                                    How to Ship Your Car When Moving Long Distance
                                </p>
                                <p className="lid">
                                    October 5, 2022
                                </p>
                            </li>
                            <li>
                                <p className="lit">
                                    How to Ship Your Car When Moving Long Distance
                                </p>
                                <p className="lid">
                                    October 5, 2022
                                </p>
                            </li>
                            <li>
                                <p className="lit">
                                    How to Ship Your Car When Moving Long Distance
                                </p>
                                <p className="lid">
                                    October 5, 2022
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextSection;