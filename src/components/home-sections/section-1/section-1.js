import React, {useEffect, useState} from 'react';
import "./section-1.scss"
import bgImg from "../../../assets/imgs/covers.jpg"
import {Button, Form, Radio} from 'antd';
import SelectOption from "../../elements/select/select";
import {fetchSearchFields} from "../../../utils/functions/fetchOptions";
import {useDispatch} from "react-redux";
import {setQuoteLocations} from "../../../redux";
import {useNavigate} from "react-router-dom";


function Section1(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form] = Form.useForm();
    const [value, setValue] = useState("Open");
    const [p, setP] = useState("")
    const [d, setD] = useState("")

    const onFinish = (values) => {
        dispatch(setQuoteLocations({
            ...values,
            type:value
        }))
        navigate("/quote")
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    const onChange = (e) => {
        setValue(e.target.value);
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
                    <div className="inputs">
                        <div className="col">
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
                        <div className="col">
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

                        <Form.Item
                        >
                            <Button className="button"
                                    type="primary"
                                    htmlType="submit"
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
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
