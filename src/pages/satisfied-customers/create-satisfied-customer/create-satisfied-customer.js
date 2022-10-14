import React, { useState} from 'react';
import {Button, Col, Form, Input, Row} from "antd";
import ImageUpload from "../../../components/image-upload/image-upload";
import {MainApi} from "../../../api";
import {Editor} from "react-draft-wysiwyg";
import {useCreateSatisfied} from "hooks";
import {toast} from "react-toastify";
import draftToHtml from "draftjs-to-html";
import {ContentState, convertToRaw, EditorState} from "draft-js";
import htmlToDraft from "html-to-draftjs";
import {useNavigate} from "react-router-dom";

function CreateSatisfiedCustomer(props) {
    const navigate = useNavigate()

    const [url, setUrl] = useState("")

    const createMutation = useCreateSatisfied({
        onSuccess() {
            toast.success("Successfully created")
            navigate(-1)
        },
        onError(err) {
            toast.error(err?.data?.error)
        },
    })

    const onFinish = (values) => {
        createMutation.mutate({
            commment: draftToHtml(convertToRaw(editorState.getCurrentContent())).toString(),
            name: values?.name,
            star: Number(values?.star),
            icon: url
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const blocks = htmlToDraft("");

    const {contentBlocks, entityMap} = blocks;
    const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
    );
    const [editorState, setEditorState] = useState(() => EditorState.createWithContent(contentState));
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }

    return (
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
                <Row gutter={[20, 20]} className="alce">
                    <Col span={4}>
                        <ImageUpload
                            onSetImage={image => setUrl(image)}
                            url={`${MainApi}/${url}`}
                            forEdit={true}
                            isCreate={true}
                            imgLoading={!url}
                        />
                    </Col>
                    <Col span={9}>
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
                    <Col span={9}>
                        <div>
                            <Form.Item
                                label="Star"
                                name="star"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your star!',
                                    },
                                ]}
                            >
                                <Input type="number"/>
                            </Form.Item>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Form.Item
                        label="Comment"
                        name="commment"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your commment!',
                            },
                        ]}
                    >
                        <Editor
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={onEditorStateChange}
                            toolbar={{
                                options: [
                                    "inline",
                                    "blockType",
                                    "fontSize",
                                    "fontFamily",
                                    "list",
                                    "textAlign",
                                    "colorPicker",
                                    "link",
                                    "embedded",
                                    "emoji",
                                    "image",
                                    "remove",
                                    "history",
                                ],
                                colorPicker: {
                                    popupClassName: "colorModal",
                                },
                                link: {
                                    popupClassName: "colorModal",
                                },
                                image: {
                                    popupClassName: "colorModal",
                                },
                            }}
                        />
                    </Form.Item>
                </Row>

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={createMutation?.isLoading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default CreateSatisfiedCustomer;