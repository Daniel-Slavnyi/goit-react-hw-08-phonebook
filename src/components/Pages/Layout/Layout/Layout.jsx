import React from 'react';
import { useState } from 'react';

import {
  UserAddOutlined,
  ContactsOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { Breadcrumb, Layout, Menu, theme, Typography } from 'antd';
import { Link, Outlet } from 'react-router-dom';
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

const items = [
  getItem(<Link to="/contacts">Contacts</Link>, '1', <ContactsOutlined />),
  getItem(<Link to="/login">Log in</Link>, '2', <UserOutlined />),
  getItem(<Link to="/register">Register</Link>, '3', <UserAddOutlined />),
];

export default function LayoutM() {
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

        <Menu theme="dark" mode="inline" items={items} />
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
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
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
