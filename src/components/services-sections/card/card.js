import React, {useState} from 'react';
import "./card.scss"
import {Select,Radio} from 'antd';
import Button from "../../elements/button/button";
import SelectOption from "../../elements/select/select";
import {fetchSearchFields} from "../../../utils/functions/fetchOptions";

const {Option} = Select;

function Card(props) {

    const [value, setValue] = useState(1);

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
        <div className="mcard">
            <div className="qu">
                Start your free quote
            </div>
            <div className="inputs">
                <div className="on1">
                    <div className="t1">
                        Origin State
                    </div>
                    <SelectOption
                        fetchOptions={search => fetchSearchFields(search, "zipcode")}
                        placeholder="ENTER ZIP CODE OR CITY"
                    />
                </div>
                <div className="on2">
                    <div className="t1">
                        Destination
                    </div>
                    <SelectOption
                        fetchOptions={search => fetchSearchFields(search, "zipcode")}
                        placeholder="ENTER ZIP CODE OR CITY"
                    />
                </div>
                <div className="txt">
                    <div className="t1">
                        Select <span>Transport Type</span>
                    </div>
                    <div className="rd">
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>Open</Radio>
                            <Radio value={2}>Enclosed</Radio>
                        </Radio.Group>
                    </div>
                </div>
                <div className="on3">
                    <Button title="Continue"/>
                </div>
            </div>
        </div>
    );
}

export default Card;
