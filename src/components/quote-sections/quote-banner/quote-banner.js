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
                    >
                        <Row gutter={[20, 20]}>
                            <Col span={12}>
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
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
                                    label="Username"
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
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
                                    label="Username"
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ]}
                                >
                                    <Select>
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