import React from 'react';
import { useState } from 'react';

import {
  UserAddOutlined,
  ContactsOutlined,
  UserOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';

import { Breadcrumb, Layout, Menu, theme, Typography, Button } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const { Header, Content, Footer, Sider } = Layout;
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
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.register.isLoggedIn);

  const items = [
    getItem(<Link to="/contacts">Contacts</Link>, '1', <ContactsOutlined />),
    !isLoggedIn &&
      getItem(<Link to="/login">Log in</Link>, '2', <UserOutlined />),
    !isLoggedIn &&
      getItem(<Link to="/register">Register</Link>, '3', <UserAddOutlined />),
  ];

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            style={{
              marginLeft: '25px',
              marginTop: '4px',
            }}
            onClick={() => {
              console.log('hello');
            }}
          ></Button>
        )}
      </Sider>
      <Layout
        className="site-layout"
        style={{
          background: '#002140',
        }}
      >
        <Header
          style={{
            padding: 0,
            background: '#7e7d7d',
          }}
        />
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
            <Breadcrumb.Item
              style={{
                color: 'white',
              }}
            >
              Bill
            </Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20px',
          }}
        >
          Phone Book Design ©2023 Created by Danylo Slavnyi
        </Footer>
      </Layout>
    </Layout>
  );
}
