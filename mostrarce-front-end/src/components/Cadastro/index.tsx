import React from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';

const Cadastro = () => {
  const onFinish = (values) => {
    // Aqui você pode adicionar a lógica para enviar os dados para o banco de dados
    // Por exemplo, fazer uma requisição HTTP para uma API usando Axios ou Fetch
    // Neste exemplo, apenas exibiremos os dados no console
    console.log('Valores enviados:', values);
    message.success('Cadastro realizado com sucesso!');
  };

  return (
    <Row justify='center' align='middle' style={{ height: '100vh' }}>
      <Col span={12}>
        <Form
          name='cadastro'
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          onFinish={onFinish}
          style={{ maxWidth: '500px', margin: '0 auto' }}
        >
          <Form.Item
            label='Nome'
            name='nome'
            rules={[{ required: true, message: 'Por favor, insira o nome' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Email'
            name='email'
            rules={[
              { required: true, message: 'Por favor, insira o email' },
              { type: 'email', message: 'Email inválido' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Senha'
            name='senha'
            rules={[{ required: true, message: 'Por favor, insira a senha' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
            <Button type='primary' htmlType='submit'>
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Cadastro;
