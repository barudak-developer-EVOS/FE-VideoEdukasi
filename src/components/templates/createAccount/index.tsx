import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select as AntdSelect,
  Typography,
  message,
} from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

// const existingUsers = [
//   { email: "student@example.com" },
//   { email: "tutor@example.com" },
// ];

const { Title } = Typography;

const Index = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Pindahkan useRouter ke sini

  // const onFinish = (values: any) => {
  //   setLoading(true);
  // Periksa apakah email sudah digunakan
  // const userExists = existingUsers.some(
  //   (user) => user.email === values.email
  // );

  //   if (userExists) {
  //     message.warning("Account already exists. Redirecting to login...");
  //     setTimeout(() => {
  //       router.push("/login"); // Redirect ke halaman login
  //     }, 2000);
  //   } else {
  //     console.log("Success:", values);
  //     message.success("Account created successfully!");
  //     setTimeout(() => {
  //       router.push("/"); // Redirect ke halaman utama
  //     }, 2000);
  //   }
  //   setLoading(false);
  // };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    message.error("Failed to create account. Please check the form.");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <div
        style={{
          width: 400,
          padding: 24,
          backgroundColor: "white",
          borderRadius: 8,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 24, marginTop: 16 }}>
          <Image src="/eduVidlogo.png" alt="icon" width={90} height={90} />
          <Title>Create a New Account</Title>
        </div>
        <Form
          name="createAccount"
          // onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Please input your username!" },
              { min: 3, message: "Username must be at least 3 characters!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 6, message: "Password must be at least 6 characters!" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Please select a role!" }]}
          >
            <AntdSelect placeholder="Select a role">
              <AntdSelect.Option value="student">Student</AntdSelect.Option>
              <AntdSelect.Option value="tutor">Tutor</AntdSelect.Option>
            </AntdSelect>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Create Account
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <span>Already have an account?</span>
          <Button type="link" onClick={() => router.push("/login")}>
            Log in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
