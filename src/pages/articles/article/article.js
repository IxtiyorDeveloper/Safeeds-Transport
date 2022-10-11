import React from 'react';
import {useArticle} from "hooks";
import {Button, Form, Input, Row, Col,Spin } from 'antd';

function Article(props) {

    const {data, isLoading} = useArticle()
    console.log(data, "data")
    console.log(data, "data")

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Spin spinning={isLoading}>
            <div>
                <Form
                    name="basic"
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
                                label="Title"
                                name="title"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your title!',
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Read Time"
                                name="Read Time"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Read Time!',
                                    },
                                ]}
                            >
                                <Input type="number"/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Spin>
    );
}

export default Article;