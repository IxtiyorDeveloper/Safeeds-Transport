import React, { useMemo} from 'react';
import {useArticles} from "hooks";
import {Button, Table} from 'antd';
import {Link} from "react-router-dom";
import {MainApi} from "api";

function Articles(props) {
    const {data, isLoading} = useArticles()

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: (id) => <Link to={`/articles/${id}`}>{id}</Link>,
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
            <Table columns={columns} dataSource={dataSource} loading={isLoading}/>
        </div>
    );
}

export default Articles;