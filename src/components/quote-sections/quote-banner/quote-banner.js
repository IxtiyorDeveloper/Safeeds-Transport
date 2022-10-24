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
import 'react-phone-number-input/style.css'
import {StyledPhoneInput} from "./quote-banner.e";

function QuoteBanner(props) {
    const [years, setYears] = useState([])
    const [p, setP] = useState(undefined)
    const [d, setD] = useState(undefined)
    const [f, setF] = useState([0])
    const locations = useSelector(getQuoteLocations())
    const navigate = useNavigate()
    const [phone, setPhone] = useState()
    const [phoneError, setPhoneError] = useState(false)

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
        setP("")
        setD("")
        let v = [];
        for (let i = 0; i < f?.length; i++) {
            v = [...v,
                {
                    year: values[`year${f[i]}`],
                    make: values[`make${f[i]}`],
                    model: values[`make${f[i]}`],
                }
            ]
        }
        let vehicles = ""

        for (let i = 0; i < v?.length; i++) {
            vehicles += `
                <tr style="border-collapse:collapse" >
        <td align="left"
    style="padding:0;Margin:0;padding-top:5px;padding-left:20px;padding-right:20px;background-position:center center">
        <table align="left" cellPadding="0" cellSpacing="0"
    style="border-collapse:collapse;border-spacing:0px;float:left">
        <tbody>
        <tr style="border-collapse:collapse">
        <td align="center"
    style="padding:0;Margin:0;width:180px" valign="top">
        <table cellPadding="0" cellSpacing="0"
    role="presentation"
    style="border-collapse:collapse;border-spacing:0px"
    width="100%">
        <tbody>
        <tr style="border-collapse:collapse">
        <td align="left"
    style="padding:0;Margin:0;padding-left:5px">
        <p style="Margin:0;font-size:14px;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333">Vehicle (${i + 1}):</p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>


    <table align="right" cellPadding="0" cellSpacing="0"
           style="border-collapse:collapse;border-spacing:0px">
        <tbody>
        <tr style="border-collapse:collapse">
            <td align="left" style="padding:0;Margin:0;width:380px">
                <table cellPadding="0" cellSpacing="0"
                       role="presentation"
                       style="border-collapse:collapse;border-spacing:0px;background-position:left top"
                       width="100%">
                    <tbody>
                    <tr style="border-collapse:collapse">
                        <td align="left"
                            style="padding:0;Margin:0;padding-left:5px">
                            <p style="Margin:0;font-size:14px;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333333">
                                ${v[i]?.year} ${v[i]?.model} ${v[i]?.make}</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        </tbody>
    </table>
</td>
</tr>
    <tr style="border-collapse:collapse">
                                                    <td align="left"
                                                        style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-position:left top">
                                                        <table cellPadding="0" cellSpacing="0"
                                                               style="border-collapse:collapse;border-spacing:0px"
                                                               width="100%">
                                                            <tbody>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;width:560px" valign="top">
                                                                    <table cellPadding="0" cellSpacing="0"
                                                                           role="presentation"
                                                                           style="border-collapse:collapse;border-spacing:0px"
                                                                           width="100%">
                                                                        <tbody>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="center"
                                                                                style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px">
                                                                                <table border="0" cellPadding="0"
                                                                                       cellSpacing="0" height="100%"
                                                                                       role="presentation"
                                                                                       style="border-collapse:collapse;border-spacing:0px"
                                                                                       width="100%">
                                                                                    <tbody>
                                                                                    <tr style="border-collapse:collapse">
                                                                                        <td style="padding:0;Margin:0px 0px 0px 0px;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px">&nbsp;</td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
`
        }

        const body = Template({
            vehicles: vehicles,
            condition: values?.run,
            origin: values?.pickup,
            destination: values?.delivery,
            date: moment(values?.ship_date, "DD-MM-YYYY"),
            type: values?.type,
            email: values?.email,
            phone: values?.phone,
            name: values?.name,
        })
        // sendEmail.mutate({
        //     email: "ixtiyor6689@gmail.com",
        //     body: body,
        //     subject: "Car shipment"
        // })

        sendEmail.mutate({
            email: "contact@safeeds.us",
            body: body,
            subject: "New Request for Auto Shipping"
        })
    };

    const handlePhone = (e) => {
        setPhone(e)
        if (!!e) {
            setPhoneError(false)
        } else {
            setPhoneError(true)
        }
    }
    const onFinishFailed = (errorInfo) => {
        if (form.getFieldError("phone")) {
            setPhoneError(true)
        } else {
            setPhoneError(false)
        }
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
                                            defaultValue={!!locations?.pickup ? locations.pickup : undefined}
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
                                            defaultValue={!!locations?.delivery ? locations.delivery : undefined}
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
                                                            <Select placeholder="2022">
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
                                                            <Input placeholder="E.g. Tesla"/>
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
                                                            <Input placeholder="E.g. Model S"/>
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
                                        <Input placeholder="Enter your name"/>
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
                                            {
                                                type: 'email',
                                                message: 'The input is not valid E-mail!',
                                            },
                                        ]}
                                    >
                                        <Input type="email" placeholder="Enter your email"/>
                                    </Form.Item>
                                </Col>
                                <Col lg={12} md={24} sm={24}>
                                    <Form.Item
                                        label="Phone"
                                        name="phone"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your phone!',
                                            },
                                        ]}
                                    >
                                        <StyledPhoneInput
                                            value={phone}
                                            onChange={e => handlePhone(e)}
                                            mask="-"
                                            format="+1 ### ### ####"
                                            country="USA"
                                            iserr={phoneError}
                                            placeholder="123 456 7890"
                                        />
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
