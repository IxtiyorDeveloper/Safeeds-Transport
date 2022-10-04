import React from 'react';
import "./card.scss"
import {Select} from 'antd';
import Button from "../../elements/button/button";

const {Option} = Select;

function Card(props) {

    const children = [];

    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className="mcard">
            <div className="qu">
                Start your free quote
            </div>
            <div className="inputs">
                <div className="on1">
                    <div className="t1">
                        Origin State
                    </div>
                    <Select
                        showSearch
                        mode="tags"
                        className="sl"
                        placeholder="ENTER ZIP CODE OR CITY"
                        onChange={handleChange}
                        style={{width:"100%"}}
                    >
                        {children}
                    </Select>
                </div>
                <div className="on2">
                    <div className="t1">
                       Destination
                    </div>
                    <Select
                        showSearch
                        mode="tags"
                        className="sl"
                        placeholder="ENTER ZIP CODE OR CITY"
                        onChange={handleChange}
                        style={{width:"100%"}}
                    >
                        {children}
                    </Select>
                </div>
                <div className="on3">
                    <Button title="Continue"/>
                </div>
            </div>
        </div>
    );
}

export default Card;
