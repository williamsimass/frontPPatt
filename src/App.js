import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import SidebarComponent from './components/SidebarComponent';
import HeaderComponent from './components/HeaderComponent';
import AppRoutes from './routes'; // Importando o arquivo de rotas

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <SidebarComponent />
        <Layout>
          <HeaderComponent />
          <Content style={{ padding: '24px' }}>
            <AppRoutes /> {/* Rotas da aplicação */}
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
