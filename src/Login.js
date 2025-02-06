import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import { Form, Input, Button, message } from 'antd';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook para navegação

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      const { username, password } = values;

      // Simulação de login
      if (username === 'admin' && password === 'admin123') {
        message.success('Login bem-sucedido!');
        navigate('/home'); // Redireciona para /home após o login
      } else {
        message.error('Usuário ou senha incorretos!');
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Form
        name="login"
        onFinish={onFinish}
        style={{ width: '300px' }}
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
          <Button type="primary" htmlType="submit" loading={loading} style={{ width: '100%' }}>
            Entrar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;