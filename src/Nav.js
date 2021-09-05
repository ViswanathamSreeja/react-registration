import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { AppstoreOutlined, UserOutlined, UserAddOutlined, EyeOutlined } from '@ant-design/icons'



const Nav = () => {
    return (
        <div>

            <Menu theme="dark" mode="horizontal">

                <Menu.Item key="home" icon={<AppstoreOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="login" icon={< UserOutlined />}>
                    <Link to="/login">Login</Link>
                </Menu.Item>
                <Menu.Item key="register" icon={<UserAddOutlined />}>
                    <Link to="/register">Register</Link>
                </Menu.Item>
                <Menu.Item key="list" icon={<EyeOutlined />}>
                    <Link to="/list">List</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Nav
