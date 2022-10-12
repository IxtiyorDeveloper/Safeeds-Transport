import React, {useMemo, useState} from 'react';
import {useArticles} from "hooks";
import {Button, Table} from 'antd';
import {Link, useNavigate} from "react-router-dom";
import {MainApi} from "api";
import {PlusCircleOutlined} from "@ant-design/icons";
import Tabs from "../../../components/tabs/tabs";

function SatisfiedCustomers(props) {
    const {data, isLoading} = useArticles()
    const [index, setIndex] = useState(0)
    const navigate = useNavigate()

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: (id) => <Link to={`/satisfied-customers/${id}`}>{id}</Link>,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Read Time',
            dataIndex: 'readTime',
            key: 'readTime',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image) => {
              return(
                  <div>
                      <img src={`${MainApi}/${image}`} alt="image" className="t-img"/>
                  </div>
              )
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (action) => (
                <Link to={`/articles/${action?.id}`}>
                    <Button type="primary">
                        More
                    </Button>
                </Link>
            ),
        }
    ];

    let dataSource = useMemo(() => {
        return data?.data?.data?.map(item => ({
            key: item?.id,
            id: item.id,
            createdAt: item?.createdAt,
            updatedAt: item?.updatedAt,
            title: item?.title,
            body: item?.body,
            readTime: item?.body,
            image: item?.image,
            action: {id: item?.id},
        }))
    }, [data])

    return (
        <div>
            <Tabs
                index={index}
                setIndex={setIndex}
                tabs={[
                    {
                        title: "SatisfiedCustomers",
                        content: (
                            <Table columns={columns} dataSource={dataSource} loading={isLoading}/>
                        ),
                    },
                ]}
                tabRightContent={[
                    {
                        icon: <PlusCircleOutlined/>,
                        onClick: () => navigate("create"),
                    }
                ]}
            />
        </div>
    );
}

export default SatisfiedCustomers;