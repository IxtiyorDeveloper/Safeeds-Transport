import React, {useEffect, useState} from 'react';
import {useArticle, useDeleteArticle, useUpdateArticle} from "hooks";
import {Button, Col, Form, Input, Modal, Row, Spin} from 'antd';
import {Editor} from "react-draft-wysiwyg";
import {ContentState, convertToRaw, EditorState} from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import ImageUpload from "../../../components/image-upload/image-upload";
import {MainApi} from "../../../api";
import {toast} from "react-toastify";
import {DeleteOutlined, ExclamationCircleOutlined} from "@ant-design/icons";
import Tabs from "../../../components/tabs/tabs";
import {useNavigate} from "react-router-dom";


function Article(props) {
    const [info, setInfo] = useState()
    const {data, isLoading} = useArticle()
    const [url, setUrl] = useState("")
    const [index, setIndex] = useState(0)
    const [form] = Form.useForm()
    const navigate = useNavigate()

    const updateMutation = useUpdateArticle({
        onSuccess() {
            toast.success("Successfully updated")
        },
        onError(err) {
            console.log(err)
        },
    })

    const deleteMutation = useDeleteArticle({
        onSuccess: () => {
            toast.success("Successfully deleted")
            navigate("/articles")
        },
        onError: (error) => {
            toast.error(error?.data?.error)
        },
    })

    const onFinish = (values) => {
        updateMutation.mutate({
            body: draftToHtml(convertToRaw(editorState.getCurrentContent())).toString(),
            title: values?.title,
            readTime: Number(values?.readTime),
            name:values?.name,
            image: url
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const blocks = htmlToDraft(info?.body ?? "");

    const {contentBlocks, entityMap} = blocks;
    const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
    );
    const [editorState, setEditorState] = useState(() => EditorState.createWithContent(contentState));
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }

    const handleDelete = () => {
        Modal.confirm({
            centered: true,
            title: "Are you sure to delete?",
            icon: <ExclamationCircleOutlined/>,
            onOk() {
                deleteMutation.mutate()
            },
        })
    }

    useEffect(() => {
        form.setFieldsValue(data?.data?.data)
        setInfo(data?.data?.data)
        setUrl(data?.data?.data?.image)
        const blocks = htmlToDraft(data?.data?.data?.body ?? "");
        const {contentBlocks, entityMap} = blocks;
        const contentState = ContentState.createFromBlockArray(
            contentBlocks,
            entityMap
        );
        setEditorState(EditorState.createWithContent(contentState))
    }, [data, form])

    return (
        <Tabs
            index={index}
            setIndex={setIndex}
            tabs={[
                {
                    title: "Article",
                    content: (
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
                                    form={form}
                                >
                                    <Row gutter={[20, 20]} className="alce">
                                        <Col span={4}>
                                            <ImageUpload
                                                onSetImage={image => setUrl(image)}
                                                url={`${MainApi}/${url}`}
                                                forEdit={true}
                                                imgLoading={!url}
                                            />
                                        </Col>
                                        <Col span={9}>
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
                                        <Col span={9}>
                                            <div>
                                                <Form.Item
                                                    label="Read Time"
                                                    name="readTime"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your Read Time!',
                                                        },
                                                    ]}
                                                >
                                                    <Input type="number"/>
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={9}>
                                            <Form.Item
                                                label="Name"
                                                name="name"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your Name!',
                                                    },
                                                ]}
                                            >
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Form.Item
                                            label="Body"
                                            name="body"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your body!',
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
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            loading={updateMutation?.isLoading}
                                        >
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </Spin>
                    ),
                },
            ]}
            tabRightContent={[
                {
                    icon: <DeleteOutlined/>,
                    onClick: () => handleDelete(),
                }
            ]}
        />
    );
}

export default Article;
