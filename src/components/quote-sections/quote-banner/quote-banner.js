import React, {useEffect, useState} from 'react';
import "./quote-banner.scss"
import {Button, Col, DatePicker, Form, Input, Radio, Row, Select} from "antd"
import SelectOption from "../../elements/select/select";
import {fetchSearchFields} from "../../../utils/functions/fetchOptions";

function QuoteBanner(props) {
    const [years, setYears] = useState([])
    const [p, setP] = useState("")
    const [d, setD] = useState("")
    const [f, setF] = useState([0])

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const {Option} = Select;

    const [form] = Form.useForm();

    const handleAdd = () => {
        let a = []
        for (let i = 0; i <= f[f.length - 1] + 1; i++) {
            a = [...a, i]
        }
        setF(a)
    }

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
        if (!!p) {
            form.setFieldValue("pickup", p)
        }
        if (!!d) {
            form.setFieldValue("delivery", d)
        }
    }, [p, d, form])


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
                                        setP={setP}
                                        type="pickup"
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
                                        setD={setD}
                                        type="delivery"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <>
                            {
                                f.map((y, index) => {
                                    return (
                                        <div>
                                            <div>
                                                {y + 1} - car
                                            </div>
                                            <Row gutter={[20, 20]} key={index}>
                                                <Col span={12}>
                                                    <Form.Item
                                                        label="Year"
                                                        name={`year${y}`}
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
                                                                        <Option key={k} value={i}>{i}</Option>
                                                                    )
                                                                })
                                                            }

                                                        </Select>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Form.Item
                                                        label="Make"
                                                        name={`make${y}`}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Please input your make!',
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder="Make"/>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Form.Item
                                                        label="Model"
                                                        name={`model${y}`}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Please input your model!',
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder="Model"/>
                                                    </Form.Item>
                                                </Col>
                                                {
                                                    y > 0 &&
                                                    <Col span={12} style={{marginTop: "35.8px"}}>
                                                        <Button type="primary" onClick={() => setF(f.filter(p => p !== y))}>
                                                            Remove
                                                        </Button>
                                                    </Col>
                                                }
                                            </Row>
                                        </div>
                                    )
                                })
                            }
                            <Button onClick={() => handleAdd()} type="primary">Add Car</Button>
                        </>
                        <Row gutter={[20, 20]} style={{marginTop: "20px"}}>
                            <Col span={12}>
                                <Form.Item
                                    label="Type"
                                    name="type"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your type!',
                                        },
                                    ]}
                                >
                                    <Radio.Group>
                                        <Radio value="Open">Open</Radio>
                                        <Radio value="Enclosed">Enclosed</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Run and drive"
                                    name="run"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your run and drive!',
                                        },
                                    ]}
                                >
                                    <Radio.Group>
                                        <Radio value="Open">Vehicle drives</Radio>
                                        <Radio value="Enclosed">Inoperable</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[20, 20]}>
                            <Col span={12}>
                                <Form.Item
                                    label="Ship date"
                                    name="ship_date"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Ship date!',
                                        },
                                    ]}
                                >
                                    <DatePicker/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Name"
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your name!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your email!',
                                        },
                                    ]}
                                >
                                    <Input type="email"/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Phone"
                                    name="phone"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your name!',
                                        },
                                    ]}
                                >
                                  <Input/>
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
