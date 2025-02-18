import React from "react";
import { Button, message } from "antd";

const GerarRelatorioButton = ({ onClick }) => {
  const handleClick = () => {
    // Criar um novo relatório com data e horário
    const novoRelatorio = {
      id: Date.now(),
      data: new Date().toLocaleString(),
      descricao: "Relatório gerado com sucesso.",
    };

    // Pegar histórico anterior do localStorage
    const historicoSalvo = JSON.parse(localStorage.getItem("historicoRelatorios")) || [];

    // Adicionar o novo relatório ao histórico
    const novoHistorico = [novoRelatorio, ...historicoSalvo];

    // Salvar no localStorage
    localStorage.setItem("historicoRelatorios", JSON.stringify(novoHistorico));

    // Feedback para o usuário
    message.success("Relatório salvo no histórico!");

    // Chamar a função onClick caso tenha
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button type="default" onClick={handleClick} style={{ marginBottom: "16px", marginLeft: "8px" }}>
      Gerar Relatório
    </Button>
  );
};

export default GerarRelatorioButton;
