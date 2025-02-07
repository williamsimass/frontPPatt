import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import { DatabaseOutlined, FileTextOutlined, TeamOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const SidebarComponent = ({ onMenuClick }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider 
      width={250} 
      collapsible 
      collapsed={collapsed} 
      onCollapse={setCollapsed}
      style={{ background: '#fff', padding: '16px', borderRight: '1px solid #ddd' }}
    >
      <div 
        style={{ textAlign: 'center', marginBottom: '16px', cursor: 'pointer' }} 
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>

      <Menu 
        mode="inline" 
        defaultSelectedKeys={['dados']} 
        style={{ height: '100%', borderRight: 0, marginTop: '16px' }}
        onClick={(e) => onMenuClick(e.key)}
      >
        <Menu.Item key="dados" icon={<DatabaseOutlined />} aria-label="Dados do Banco de Dados">
          Dados do Banco de Dados
        </Menu.Item>
        <Menu.Item key="historico" icon={<FileTextOutlined />} aria-label="Histórico de Relatórios">
          Histórico de Relatórios
        </Menu.Item>
        <Menu.Item key="separacao" icon={<TeamOutlined />} aria-label="Separação por Cliente">
          Separação por Cliente
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SidebarComponent;
