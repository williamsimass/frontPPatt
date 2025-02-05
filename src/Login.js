import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import './Login.css'; // Arquivo CSS para estilos personalizados

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      const { username, password } = values;

      // Simulação de login
      if (username === 'admin' && password === 'admin123') {
        message.success('Login bem-sucedido!');
        navigate('/home');
      } else {
        message.error('Usuário ou senha incorretos!');
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-overlay">
        <div className="login-box">
          <img
            src="/caminho/para/logo.png" // Substitua pelo caminho do logo
            alt="Logo do Escritório"
            className="logo"
          />
          <h2 className="welcome-message">Bem-vindo ao Núcleo de Inteligência Tecnológica</h2>
          <Form name="login" onFinish={onFinish} layout="vertical">
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
              <Button type="primary" htmlType="submit" loading={loading} style={{ width: '100%' }}>
                Entrar
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;