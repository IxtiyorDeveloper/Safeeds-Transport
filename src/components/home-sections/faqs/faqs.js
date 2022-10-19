import React from 'react';
import {Collapse} from 'antd';
import "./faqs.scss"

const {Panel} = Collapse;

const Faqs = () => {

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div className="pd fqwr">
            <div className="txs">
                <div className="tx1">
                    Frequently asked car shipping questions
                </div>
                <div className="tx2">
                    Everything you need to know about our reliable auto transport services
                </div>
            </div>
            <Collapse defaultActiveKey={['1']} onChange={onChange}>
                <Panel header="Can I put personal items in the car?" key="1">
                    <p>You can put personal items up to 100 lbs. in a box or single piece of luggage that will be in the
                        trunk of the car during transport.</p>
                </Panel>
                <Panel header="Is my vehicle insured during transport?" key="2">
                    <p>
                        Yes, your vehicle will be covered by the carrier’s cargo insurance. Additionally, we have our
                        own
                        contingent cargo insurance, which protects you for up to $250,000 should the truckers policy
                        fail to fully cover a valid claim.
                    </p>
                </Panel>
                <Panel header="When is the vehicle going to be picked-up?" key="3">
                    <p>
                        After an order is placed, we search our car carrier network to find a trucker to transport your
                        vehicle. We will assign the best one available and give you an estimated pickup time. The
                        trucker will call you to confirm the details ahead of schedule.
                    </p>
                </Panel>
                <Panel header="When will my vehicle be delivered?" key="4">
                    <p>
                        When you place an order, you will receive an estimated transit time for your shipment. This will
                        give you a window for when your car will be delivered. Transit times depend on moving distance.
                        With each delivery being unique, it is possible that your car would be delivered faster than the
                        estimated transit time provided.
                    </p>
                </Panel>
                <Panel header="Can I track my vehicle online?" key="5">
                    <p>
                        Geolocation live tracking is not available at this time, by stay tuned as we are working on
                        that. Please feel free to Live Chat with us and one of our representatives will keep you fully
                        informed on the current location of your vehicle. The assigned carrier will also communicate
                        with you.
                    </p>
                </Panel>
                <Panel header="What type of vehicles can you transport?" key="6">
                    <p>
                        We transport sedans, SUVs, pickup trucks, and vans within the 48 contiguous US states. We can
                        ship both operable and inoperable vehicles. If you have any questions, our auto transport
                        experts can help.
                    </p>
                </Panel>
                <Panel header="Do you offer door-to-door pickup and delivery service" key="7">
                    <p>
                        As long as it is possible, the assigned carrier will pick up and deliver your vehicle to the
                        addresses you specify. Of course, if there are transportation restrictions or safety challenges
                        the carrier will work with you to arrange a convenient pickup and delivery location.
                    </p>
                </Panel>
                <Panel header="Can I choose my pickup and delivery days?" key="8">
                    <p>
                        While we cannot guarantee a pickup or delivery date, we recommend booking with as much advance
                        notice as possible if you have preferences related to your transport.
                    </p>
                </Panel>
                <Panel header="What if I notice damage on delivery car?" key="9">
                    <p>
                        We partner with only the most professional auto transporters in the business. These carriers
                        have outstanding customer service and delivery records. In the unlikely event that your vehicle
                        is damaged in transit, be sure to note its condition on the Bill of Lading provided upon
                        delivery. We also advise that you take photos and/or video of your vehicle upon pickup and again
                        at delivery.

                        If someone is handling the pickup or delivery on your behalf, please review these instructions
                        with them. If you have any concerns related to the condition of your vehicle, please give us a
                        call at (315)-314-4337.
                    </p>
                </Panel>
            </Collapse>
        </div>
    );
};

export default Faqs;
