import React from 'react';
import "./section-1.scss"
import bgImg from "../../../assets/imgs/covers.jpg"
import {Select} from 'antd';

const {Option} = Select;

function Section1(props) {

    const children = [];

    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className="section-1">
            <div
                className="sWr"
                style={{backgroundImage: `url(${bgImg})`}}>
                <div className="bgMaker">
                    <div className="bold-text">
                        The Premiere Vehicle Shipping <br/>Experience
                    </div>
                    <div className="sText">
                        Sherpa Auto Transport provides the best transport experience with upfront,
                        transparent <br/> pricing
                        backed by our Price Lock Promise.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="title">
                    Request a quote online in under two minutes!
                </div>
                <div className="line"/>
                <div className="tr">
                    Transport My Vehicle From...
                </div>
                <div className="inputs">
                    <Select
                        showSearch
                        mode="tags"
                        className="sl"
                        placeholder="ENTER ZIP CODE OR CITY"
                        onChange={handleChange}
                    >
                        {children}
                    </Select>
                    <div className="to">
                        TO
                    </div>
                    <Select
                        showSearch
                        mode="tags"
                        className="sl"
                        placeholder="ENTER ZIP CODE OR CITY"
                        onChange={handleChange}
                    >
                        {children}
                    </Select>
                    <div className="button">NEXT</div>
                </div>
            </div>
        </div>
    );
}

export default Section1;
