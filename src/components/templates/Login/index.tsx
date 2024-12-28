import React from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
const { Title, Text } = Typography;

const Login = () => {
  const router = useRouter();
  const onFinish = (values: any) => {
    console.log('Success:', values);
    router.push('/');
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
        <div style={{ textAlign: 'center', marginBottom: 24, marginTop: 16 }}>
          <Image src="/eduVidlogo.png" alt="icon" width={90} height={90} />
          <Title level={3}>Welcome to EduVid!</Title>
        </div>
        <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
          <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={onFinish} block>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
