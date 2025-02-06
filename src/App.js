import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import SidebarComponent from './components/SidebarComponent';
import HeaderComponent from './components/HeaderComponent';
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
        window.location.href = '/';
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
      <Layout style={{ minHeight: '100vh' }}>
        <SidebarComponent onMenuClick={handleMenuClick} />
        <Layout>
          <HeaderComponent />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/historico" element={<HistoricoRelatorios />} />
              <Route path="/separacao" element={<SeparacaoPorCliente />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;