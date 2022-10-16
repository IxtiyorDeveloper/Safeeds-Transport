import React, {useState} from 'react';
import "./card.scss"
import {Radio, Form} from 'antd';
import Button from "../../../elements/button/button";
import SelectOption from "../../../elements/select/select";
import {fetchSearchFields} from "../../../../utils/functions/fetchOptions";

function CardF1({setStep}) {

    const [value, setValue] = useState(1);

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const handleSubmit = () => {

    }

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
                            <Radio value="Open">Open</Radio>
                            <Radio value="Enclosed">Enclosed</Radio>
                        </Radio.Group>
                    </div>
                </div>
                <div className="on3">
                    <Button title="Continue" type="primary" onClick={() => handleSubmit()}/>
                </div>
            </div>
        </div>
    );
}

export default CardF1;
