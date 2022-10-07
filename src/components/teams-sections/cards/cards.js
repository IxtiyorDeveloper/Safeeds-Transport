import React from 'react';
import "./cards.scss"

function Cards(props) {
    const data = [
        {
            name: "Damir Miller",
            img: "https://mercuryautotransport.com/wp-content/uploads/avatars/72/633f38a7c0cf9-bpfull.jpg"
        },
        {
            name: "Damir Miller",
            img: "https://mercuryautotransport.com/wp-content/uploads/avatars/72/633f38a7c0cf9-bpfull.jpg"
        },
        {
            name: "Damir Miller",
            img: "https://mercuryautotransport.com/wp-content/uploads/avatars/72/633f38a7c0cf9-bpfull.jpg"
        },
        {
            name: "Damir Miller",
            img: "https://mercuryautotransport.com/wp-content/uploads/avatars/72/633f38a7c0cf9-bpfull.jpg"
        },
        {
            name: "Damir Miller",
            img: "https://mercuryautotransport.com/wp-content/uploads/avatars/72/633f38a7c0cf9-bpfull.jpg"
        },
        {
            name: "Damir Miller",
            img: "https://mercuryautotransport.com/wp-content/uploads/avatars/72/633f38a7c0cf9-bpfull.jpg"
        },
        {
            name: "Damir Miller",
            img: "https://mercuryautotransport.com/wp-content/uploads/avatars/72/633f38a7c0cf9-bpfull.jpg"
        },
    ]
    return (
        <div className="tcds pd">
            <div className="title">
                Meet The Team
            </div>
            <div className="ty">
                <div className="tc">
                    All Members <span>52</span>
                </div>
                <div className="line"/>
            </div>
            <div className="rw">
                {
                    data?.map((i, k) => {
                        return (
                            <div key={k} className="bxs">
                                <div style={{backgroundImage: `url(${i.img})`}} className="img"/>
                                <div className="txt">{i.name}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Cards;
