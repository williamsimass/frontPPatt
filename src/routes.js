import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login'; 
import Home from './pages/Home';
import HistoricoRelatorios from './pages/HistoricoRelatorios';
import SeparacaoClientes from './pages/SeparacaoClientes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/historico" element={<HistoricoRelatorios />} />
      <Route path="/clientes" element={<SeparacaoClientes />} />
    </Routes>
  );
};

export default AppRoutes;
