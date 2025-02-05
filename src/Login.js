import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';

const Login = () => {
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento
  const navigate = useNavigate(); // Hook para navegação

  // Função chamada ao submeter o formulário
  const onFinish = (values) => {
    setLoading(true); // Ativa o estado de carregamento

    // Simulação de uma requisição de login (substitua por uma chamada real à API)
    setTimeout(() => {
      const { username, password } = values;

      // Verificação simples de login (substitua por lógica real)
      if (username === 'admin' && password === 'admin123') {
        message.success('Login bem-sucedido!');
        navigate('/home'); // Redireciona para a página principal
      } else {
        message.error('Usuário ou senha incorretos!');
      }

      setLoading(false); // Desativa o estado de carregamento
    }, 1000);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5', // Fundo suave
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '24px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          width: '300px',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Login</h2>
        <Form
          name="login"
          onFinish={onFinish}
          layout="vertical" // Layout vertical para os campos do formulário
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Por favor, insira seu nome de usuário!' }]}
          >
            <Input placeholder="Nome de usuário" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
          >
            <Input.Password placeholder="Senha" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              style={{ width: '100%' }}
            >
              Entrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;