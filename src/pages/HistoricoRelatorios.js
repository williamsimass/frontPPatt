import React, { useState, useEffect } from "react";
import { Layout, Table, Typography, Button } from "antd";
import HeaderComponent from "../components/HeaderComponent";
import SidebarComponent from "../components/SidebarComponent";

const { Content } = Layout;
const { Title } = Typography;

const HistoricoRelatorios = () => {
  const [historico, setHistorico] = useState([]);

  // Buscar os relatórios salvos no localStorage
  useEffect(() => {
    const historicoSalvo = JSON.parse(localStorage.getItem("historicoRelatorios")) || [];
    setHistorico(historicoSalvo);
  }, []);

  // Definir colunas da tabela
  const columns = [
    { title: "Data", dataIndex: "data", key: "data" },
    { title: "Descrição", dataIndex: "descricao", key: "descricao" },
  ];

  // Função para limpar o histórico
  const limparHistorico = () => {
    localStorage.removeItem("historicoRelatorios");
    setHistorico([]);
  };

  return (
    <Layout>
      <HeaderComponent />
      <Layout>
        <SidebarComponent />
        <Layout style={{ padding: "24px" }}>
          <Content style={{ background: "#fff", padding: "24px", borderRadius: "8px" }}>
            <Title level={3}>Histórico de Relatórios</Title>
            <Table dataSource={historico} columns={columns} rowKey="id" />
            <Button type="primary" danger onClick={limparHistorico} style={{ marginTop: "16px" }}>
              Limpar Histórico
            </Button>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default HistoricoRelatorios;
