import React, {useEffect, useState} from 'react';
import "./card.scss"
import {Radio, Form} from 'antd';
import Button from "../../../elements/button/button";
import SelectOption from "../../../elements/select/select";
import {fetchSearchFields} from "../../../../utils/functions/fetchOptions";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setQuoteLocations} from "../../../../redux";

function CardF1({setStep}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form] = Form.useForm();
    const [value, setValue] = useState("Open");
    const [p, setP] = useState("")
    const [d, setD] = useState("")

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onFinish = (values) => {
        dispatch(setQuoteLocations({
            ...values,
            type: value
        }))
        navigate("/quote")
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        if (!!p) {
            form.setFieldValue("pickup", p)
        }
        if (!!d) {
            form.setFieldValue("delivery", d)
        }
    }, [p, d, form])

    return (
        <Form
            name="basic"
            labelCol={{
                span: 24,
            }}
            wrapperCol={{
                span: 24,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            form={form}
        >
        <div className="mcard">
            <div className="qu">
                Start your free quote
            </div>
                <div className="inputs">
                    <div className="on1">
                        {/*<div className="t1">*/}
                        {/*    Origin State*/}
                        {/*</div>*/}
                        <Form.Item
                            label="Pickup location"
                            name="pickup"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Pickup location!',
                                },
                            ]}
                        >
                            <SelectOption
                                fetchOptions={search => fetchSearchFields(search, "zipcode")}
                                placeholder="ENTER ZIP CODE OR CITY"
                                setP={setP}
                                type="pickup"
                            />
                        </Form.Item>
                    </div>
                    <div className="on2">
                        {/*<div className="t1">*/}
                        {/*    Destination*/}
                        {/*</div>*/}
                        <Form.Item
                            label="Delivery location"
                            name="delivery"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Delivery location!',
                                },
                            ]}
                        >
                            <SelectOption
                                fetchOptions={search => fetchSearchFields(search, "zipcode")}
                                placeholder="ENTER ZIP CODE OR CITY"
                                setD={setD}
                                type="delivery"
                            />
                        </Form.Item>
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
                        <Form.Item>
                            <Button title="Continue" type="primary" htmlType="submit"/>
                        </Form.Item>
                    </div>
                </div>
        </div>
</Form>
);
}

export default CardF1;
