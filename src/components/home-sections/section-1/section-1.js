import React, {useState} from 'react';
import "./section-1.scss"
import bgImg from "../../../assets/imgs/covers.jpg"
import {Radio, Select} from 'antd';
import SelectOption from "../../elements/select/select";
import {fetchSearchFields} from "../../../utils/functions/fetchOptions";

const {Option} = Select;

function Section1(props) {

    const [value, setValue] = useState("Open");

    const children = [];

    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <div className="section-1">
            <div
                className="sWr"
                style={{backgroundImage: `url(${bgImg})`}}>
                <div className="bgMaker">
                    <div className="bold-text">
                        The leading transportation company <br/> all over the states
                    </div>
                    <div className="sText">
                        Safeeds Transport Inc provides the best transport experience with upfront,
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
                    <SelectOption
                        fetchOptions={search => fetchSearchFields(search, "zipcode")}
                        placeholder="ENTER ZIP CODE OR CITY"
                    />
                    <div className="to">
                        TO
                    </div>
                    <SelectOption
                        fetchOptions={search => fetchSearchFields(search, "zipcode")}
                        placeholder="ENTER ZIP CODE OR CITY"
                    />
                    <div className="button">NEXT</div>
                </div>
                <div className="txt">
                    <div className="t1">
                        Select <span>Transport Type</span>
                    </div>
                    <div className="rd">
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value="Open">Open</Radio>
                            <Radio value="Enclosed">Enclosed</Radio>
                        </Radio.Group>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;
