import React from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';

const { Title, Text } = Typography;

const Login = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
      }}
    >
      <div
        style={{
          width: 400,
          padding: 24,
          backgroundColor: 'white',
          borderRadius: 8,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <img
            src="/favicon.ico"
            alt="icon"
            style={{ width: 50, marginBottom: 8 }}
          />
          <Title level={3}>Welcome back to EduVid!</Title>
          <Text type="secondary">Please enter your details below to sign in.</Text>
        </div>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log in
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: 'center' }}>
          <Text>
            Don't have an account? <a href="/signup">Sign up now</a>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Login;
