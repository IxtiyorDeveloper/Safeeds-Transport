import React, {useEffect, useState} from 'react';
import "./quote-banner.scss"
import {Button, Col, DatePicker, Form, Input, Radio, Row, Select} from "antd"
import SelectOption from "../../elements/select/select";
import {fetchSearchFields} from "../../../utils/functions/fetchOptions";
import {getQuoteLocations} from "../../../redux";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import Template from "../../services-sections/card/template";
import moment from "moment"
import {useSendEmail} from "hooks";
import {useNavigate} from "react-router-dom";

function QuoteBanner(props) {
    const [years, setYears] = useState([])
    const [p, setP] = useState("")
    const [d, setD] = useState("")
    const [f, setF] = useState([0])
    const locations = useSelector(getQuoteLocations())
    const navigate = useNavigate()

    const sendEmail = useSendEmail({
        onSuccess() {
            toast.success("Successfully sent")
            navigate("/success")
        },
        onError(err) {
            toast.error(err?.data?.error)
        },
    })

    const onFinish = (values) => {
        let v = [];
        for (let i = 0; i < f?.length; i++) {
            v = [...v,
                {
                    year:values[`year${f[i]}`],
                    make:values[`make${f[i]}`],
                    model:values[`make${f[i]}`],
                }
            ]
        }

        const body = Template({
            vehicles:v,
            condition:values?.run,
            origin:values?.pickup,
            destination:values?.destination,
            date:moment(values?.ship_date).format("dd-mm-yyyy"),
            type:values?.type,
            email:values?.email,
            phone:values?.phone,
            name:values?.name,
        })
        sendEmail.mutate({
            email:"ixtiyor6689@gmail.com",
            body:body,
            "subject":"Car shipment"
        })
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
        if (!!locations?.pickup && !!locations?.delivery) {
            form.setFieldValue("pickup", locations?.pickup)
            form.setFieldValue("delivery", locations?.delivery)
            form.setFieldValue("type", locations?.type)
        }
    }, [form, locations])

    useEffect(() => {
        if (!!p) {
            form.setFieldValue("pickup", p)
        }
        if (!!d) {
            form.setFieldValue("delivery", d)
        }
    }, [p, d, form])

    return (
        <div className="wr-quote-sp">
            <div className="quote-wr">
                <div className="quote-banner">
                    Get a quote
                </div>

            </div>
            <div className="pd">
                <div className="frq">
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
                                <Col lg={12} md={24} sm={24}>
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
                                            defaultValue={locations?.pickup}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col lg={12} md={24} sm={24}>
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
                                            defaultValue={locations?.delivery}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <>
                                {
                                    f.map((y, index) => {
                                        return (
                                            <div key={index}>
                                                <div>
                                                    {y + 1} - car
                                                </div>
                                                <Row gutter={[20, 20]}>
                                                    <Col lg={12} md={24} sm={24}>
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
                                                    <Col lg={12} md={24} sm={24}>
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
                                                    <Col lg={12} md={24} sm={24}>
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
                                                        <Col lg={12} md={24} sm={24}
                                                             style={{marginTop: "35.8px", marginBottom: "20px"}}>
                                                            <Button type="primary"
                                                                    onClick={() => setF(f.filter(p => p !== y))}>
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
                                <Col lg={12} md={24} sm={24}>
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
                                        <Radio.Group defaultValue={locations?.type}>
                                            <Radio value="Open">Open</Radio>
                                            <Radio value="Enclosed">Enclosed</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                </Col>
                                <Col lg={12} md={24} sm={24}>
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
                                            <Radio value="Operable">Vehicle drives</Radio>
                                            <Radio value="Inoperable">Inoperable</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[20, 20]}>
                                <Col lg={12} md={24} sm={24}>
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
                                <Col lg={12} md={24} sm={24}>
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
                                <Col lg={12} md={24} sm={24}>
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
                                <Col lg={12} md={24} sm={24}>
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
        </div>
    );
}

export default QuoteBanner;
