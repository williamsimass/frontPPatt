import React from 'react';
import { Layout, Menu } from 'antd';
import { DatabaseOutlined, FileTextOutlined, TeamOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const SidebarComponent = () => {
  const navigate = useNavigate(); // Hook para navegação

  return (
    <Sider width={250} style={{ background: 'white', padding: '16px' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['dados']}
        style={{ height: '100%', borderRight: 0, marginTop: '16px' }}
        onClick={(e) => navigate(e.key)}
      >
        <Menu.Item key="/" icon={<DatabaseOutlined />}>
          Dados do Banco de Dados
        </Menu.Item>
        <Menu.Item key="/historico" icon={<FileTextOutlined />}>
          Histórico de Relatórios
        </Menu.Item>
        <Menu.Item key="/clientes" icon={<TeamOutlined />}>
          Separação por Cliente
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SidebarComponent;
