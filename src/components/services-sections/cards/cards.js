import React from 'react';
import "./cards.scss"

function Cards(props) {
    const data = [
        {
            id: 1,
            title: "Experts You Can Trust",
            text: "Drivers and dispatch managers for carriers contact Mercury based on our Central Dispatch postings. Once we verify rates and timing on your behalf, Mercury performs a thorough carrier background check. \n" +
                "\n" +
                "As part of providing a great car transport service, it is our job to guarantee that the carrier we assign to pickup your vehicle is licensed and insured.  Click here to check out our license.\n" +
                "\n"
        },
        {
            id: 1,
            title: "No Surprises",
            text: "You have peace of mind knowing that the carrier shipping your vehicle is qualified, reputable, and that there will be no surprises, guaranteed. Only then is our deposit due, which can be paid via the debit or credit card that was placed on file when we booked the order. The balance of fees is paid C.O.D. to driver upon delivery. You can also opt to pay the driver with a credit card with a convenience fee."
        },
        {
            id: 1,
            title: "Everything's Included",
            text: "Once you confirm your acceptance of the rates, we assign the carrier. Your service agreement guarantees the price, door-to-door service, and 100% bumper-to-bumper insurance. There are never any hidden fees or charges. At that time, all fees are locked in, as well as pick-up and estimated time of delivery."
        },
        {
            id: 1,
            title: "We've Got You Covered",
            text: "We verify the carrier’s ratings, references, and obtain a certified copy of their insurance certificate. We ensure they are licensed with FMCSA (Federal Motor Carrier and Safety Administration) and research to determine if any past clients have lodged complaints."
        },
    ]
    return (
        <div className="crds pd">
            {
                data?.map((i, k) => {
                    return (
                        <div key={k} className="bx">
                            <div className="tit">
                                {i.title}
                            </div>
                            <div className="text">
                                {i.text}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Cards;
