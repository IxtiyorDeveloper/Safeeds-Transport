import React, {useEffect, useState} from 'react';
import {
    useDeleteSatisfied,
    useSatisfied,
    useUpdateSatisfied
} from "hooks";
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


function SatisfiedCustomer(props) {
    const [info, setInfo] = useState()
    const {data, isLoading} = useSatisfied()
    const [url, setUrl] = useState("")
    const [index, setIndex] = useState(0)
    const [form] = Form.useForm()
    const navigate = useNavigate()

    const updateMutation = useUpdateSatisfied({
        onSuccess() {
            toast.success("Successfully updated")
        },
        onError(err) {
            console.log(err)
        },
    })

    const deleteMutation = useDeleteSatisfied({
        onSuccess: () => {
            toast.success("Successfully deleted")
            navigate("/satisfied-customers")
        },
        onError: (error) => {
            toast.error(error?.data?.error)
        },
    })

    const onFinish = (values) => {
        updateMutation.mutate({
            commment: draftToHtml(convertToRaw(editorState.getCurrentContent())).toString(),
            name: values?.name,
            star: values?.star,
            icon: url
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const blocks = htmlToDraft(info?.comment ?? "");

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
        setUrl(data?.data?.data?.icon)
        const blocks = htmlToDraft(data?.data?.data?.commment ?? "");
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
                    title: "Satisfied Customer",
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
                                                    message: 'Please input your comment!',
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

export default SatisfiedCustomer;
