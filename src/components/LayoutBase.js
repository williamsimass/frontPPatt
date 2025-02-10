import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import SidebarComponent from './SidebarComponent';

const { Content } = Layout;

const LayoutBase = ({ children, breadcrumb }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <Layout>
      <HeaderComponent onLogout={handleLogout} />
      <Layout>
        <SidebarComponent />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>{breadcrumb}</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: '16px 0',
              minHeight: 280,
              background: '#fff',
              borderRadius: 8,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutBase;
