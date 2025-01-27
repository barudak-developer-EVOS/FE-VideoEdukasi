import React, { useState } from "react";
import { Form, Input, Button, Select, Typography, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
const { Title } = Typography;
const { Option } = Select;

// Simulasi daftar pengguna yang sudah ada

const CreateAccount = () => {
  const router = useRouter();
  const onFinish = async (values: any) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/accounts/create-accounts",
        values
      );
      if (response.status === 201) {
        message.success("Account created successfully!");
        // router.push("/login");
      }
    } catch (error) {
      console.error("Error creating account:", error);
      message.error("Failed to create account. Please try again.");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error("Failed:", errorInfo);
    message.error("Please complete the form correctly.");
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
          <Title level={3}>Create a New Account</Title>
        </div>
        <Form
          name="createAccount"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Username"
            name="name"
            rules={[
              { required: true, message: "Please input your username!" },
              { min: 3, message: "Username must be at least 3 characters!" },
            ]}
          >
            <Input placeholder="Username" />
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
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Please select a role!" }]}
          >
            <Select placeholder="Select a role">
              <Option value="student">Student</Option>
              <Option value="tutor">Tutor</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
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

export default CreateAccount;
