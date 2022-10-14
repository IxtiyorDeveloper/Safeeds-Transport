import {
    SnippetsOutlined,
    TeamOutlined
} from '@ant-design/icons';
import {Breadcrumb, Button, Layout, Menu} from 'antd';
import React, {useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../redux";

const {Header, Content, Footer, Sider} = Layout;

function getItem(label, key, icon, path, children) {
    return {
        key,
        icon,
        path,
        children,
        label,
    };
}

const items = [
    getItem('Articles', '1', <SnippetsOutlined/>, "/articles"),
    getItem('Satisfied Customers', '2', <TeamOutlined/>, "/satisfied-customers")
];

const Admin = ({children}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        navigate("/login")
    }

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className="sidebar-logo"/>
                <Menu theme="dark"
                      defaultSelectedKeys={[location.pathname]}
                      mode="inline"
                >
                    {
                        items?.map((menu, k) => {
                            return (
                                <Menu.Item key={menu.path} icon={menu.icon}>
                                    <Link to={menu.path}/>
                                    {menu.label}
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </Sider>
            <Layout className="site-layout">

                <Header
                    className="mHeader"
                    onClick={() => handleLogout()}
                >
                    <Button type="primary">
                        Log out
                    </Button>
                </Header>
                <Breadcrumb style={{margin: '16px 20px'}}>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <div className="site-layout-background">
                        {children}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Safeeds Transport Inc ©2022 Created by
                    &nbsp;<a href="components/admin/admin">
                    Ikhtiyor
                </a>
                </Footer>
            </Layout>
        </Layout>
    );
};

export default Admin;