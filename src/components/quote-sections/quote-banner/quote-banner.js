import React, {useEffect, useState} from 'react';
import "./quote-banner.scss"
import {Row, Col, Select} from "antd"
import SelectOption from "../../elements/select/select";
import {fetchSearchFields} from "../../../utils/functions/fetchOptions";
import {Button, Form} from 'antd';

function QuoteBanner(props) {
    const [years, setYears] = useState([])
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const {Option} = Select;

    const [form] = Form.useForm();

    useEffect(() => {
        const date = new Date()
        if (!years.length) {
            let a = []
            for (let i = date?.getFullYear(); i >= 1900; i--) {
                a = [...a, i]
            }
            setYears(a)
        }

    }, [years])

    useEffect(() => {
        console.log(form,"form")
    },[form])

    return (
        <div className="wr">
            <div className="quote-wr">
                <div className="quote-banner">
                    Get a quote
                </div>

            </div>
            <div className="frq pd">
                <div className="tit">
                    Get a quote
                </div>
                <div className="sdrt">
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
                        <Row gutter={[20, 20]}>
                            <Col span={12}>
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
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
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
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Year"
                                    name="year"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your year!',
                                        },
                                    ]}
                                >
                                    <Select placeholder="Year">
                                        {
                                            years?.map((i, k) => {
                                                return (
                                                    <Option key={k}>{i}</Option>
                                                )
                                            })
                                        }

                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item
                            wrapperCol={{
                                offset: 0,
                                span: 24,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default QuoteBanner;
