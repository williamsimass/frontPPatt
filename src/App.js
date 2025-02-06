import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import SidebarComponent from './components/SidebarComponent';
import HeaderComponent from './components/HeaderComponent';
import Login from './Login'; // Importe o componente de login
import Home from './pages/Home';
import HistoricoRelatorios from './pages/HistoricoRelatorios';
import SeparacaoPorCliente from './pages/SeparacaoPorCliente';
import './App.css';

const { Content } = Layout;

const App = () => {
  const handleMenuClick = (key) => {
    // Redireciona para a página correspondente ao item clicado
    switch (key) {
      case 'dados':
        window.location.href = '/home';
        break;
      case 'historico':
        window.location.href = '/historico';
        break;
      case 'separacao':
        window.location.href = '/separacao';
        break;
      default:
        break;
    }
  };

  return (
    <Router>
      <Routes>
        {/* Rota para a tela de login */}
        <Route path="/login" element={<Login />} />

        {/* Rota padrão redireciona para o login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Rotas protegidas (após o login) */}
        <Route
          path="/home"
          element={
            <Layout style={{ minHeight: '100vh' }}>
              <SidebarComponent onMenuClick={handleMenuClick} />
              <Layout>
                <HeaderComponent />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                  <Home />
                </Content>
              </Layout>
            </Layout>
          }
        />
        <Route
          path="/historico"
          element={
            <Layout style={{ minHeight: '100vh' }}>
              <SidebarComponent onMenuClick={handleMenuClick} />
              <Layout>
                <HeaderComponent />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                  <HistoricoRelatorios />
                </Content>
              </Layout>
            </Layout>
          }
        />
        <Route
          path="/separacao"
          element={
            <Layout style={{ minHeight: '100vh' }}>
              <SidebarComponent onMenuClick={handleMenuClick} />
              <Layout>
                <HeaderComponent />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                  <SeparacaoPorCliente />
                </Content>
              </Layout>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;