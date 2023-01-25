import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

import { logOutUser } from 'store/register/register-operetions';
import {
  UserAddOutlined,
  ContactsOutlined,
  UserOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';

import { Breadcrumb, Layout, Menu, Typography, Button, Tooltip } from 'antd';

const { Content, Footer, Sider } = Layout;
const { Title } = Typography;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export default function LayoutM() {
  const isLoggedIn = useSelector(state => state.register.isLoggedIn);
  const nameUser = useSelector(state => state.register.user.name);
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();

  const items = [
    isLoggedIn &&
      getItem(
        <NavLink to="/contacts">Contacts</NavLink>,
        '1',
        <ContactsOutlined />
      ),
    !isLoggedIn &&
      getItem(<NavLink to="/login">Log in</NavLink>, '2', <UserOutlined />),
    !isLoggedIn &&
      getItem(
        <NavLink to="/register">Register</NavLink>,
        '3',
        <UserAddOutlined />
      ),
  ];

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
      >
        <Link to={'/'}>
          <Title
            style={{
              height: 32,
              margin: 16,
              color: 'white',
              fontSize: '24px',
              opacity: `${collapsed ? 0 : 1} `,
              transition: `${!collapsed ? 'all 1s ease' : 'none'} `,
            }}
          >
            Phonebook
          </Title>
        </Link>

        <Menu theme="dark" mode="inline" items={items} />
        {isLoggedIn && (
          <Tooltip title="Exit" placement="right">
            <Button
              type="primary"
              icon={<PoweroffOutlined />}
              style={{
                width: 70,
                marginLeft: '5px',
                marginTop: '10px',
              }}
              onClick={() => {
                dispatch(logOutUser());
              }}
            ></Button>
          </Tooltip>
        )}
      </Sider>
      <Layout
        className="site-layout"
        style={{
          background: '#002140',
        }}
      >
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item
              style={{
                color: 'white',
              }}
            >
              User
            </Breadcrumb.Item>
            {isLoggedIn && (
              <Breadcrumb.Item
                style={{
                  color: 'white',
                }}
              >
                {nameUser}
              </Breadcrumb.Item>
            )}
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: '#a8a6a6',
              borderRadius: 10,
              maxWidth: 600,
              margin: 'auto auto',
            }}
          >
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </Content>
        <Footer
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20px',
            position: 'fixed',
            bottom: 0,
            width: '100%',
          }}
        >
          Phone Book Design ©2023 Created by Danylo Slavnyi
        </Footer>
      </Layout>
    </Layout>
  );
}
