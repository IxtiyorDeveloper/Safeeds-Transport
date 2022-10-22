import React, {useMemo, useState} from 'react';
import {Button, Table} from 'antd';
import {Link, useNavigate} from "react-router-dom";
import {MainApi} from "api";
import {PlusCircleOutlined} from "@ant-design/icons";
import Tabs from "../../../components/tabs/tabs";
import {useSatisfieds} from "hooks";

function SatisfiedCustomers(props) {
    const {data, isLoading} = useSatisfieds()
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
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Star',
            dataIndex: 'star',
            key: 'star',
        },
        {
            title: 'Icon',
            dataIndex: 'icon',
            key: 'icon',
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
                <Link to={`/satisfied-customers/${action?.id}`}>
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
            name: item?.name,
            comment: item?.comment,
            star: item?.star,
            icon: item?.icon,
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
                        title: "Satisfied Customers",
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

export default React.memo(SatisfiedCustomers);
