import React from 'react';
import { Menu } from 'antd';
import { DatabaseOutlined, FileTextOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

const { Sider } = Layout;

const SidebarComponent = ({ onMenuClick }) => {
  return (
    <Sider width={250} style={{ background: 'white', padding: '16px' }}>
      <Menu 
        mode="inline" 
        defaultSelectedKeys={['dados']} 
        style={{ height: '100%', borderRight: 0, marginTop: '16px' }}
        onClick={(e) => onMenuClick(e.key)}
      >
        <Menu.Item key="dados" icon={<DatabaseOutlined />}>
          Dados do Banco de Dados
        </Menu.Item>
        <Menu.Item key="historico" icon={<FileTextOutlined />}>
          Histórico de Relatórios
        </Menu.Item>
        <Menu.Item key="separacao" icon={<TeamOutlined />}>
          Separação por Cliente
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SidebarComponent;