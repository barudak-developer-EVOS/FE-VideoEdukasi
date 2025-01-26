import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Typography, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

const { Title } = Typography;

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true); // Tampilkan loading saat proses login
    try {
      const response = await axios.post(
        "http://localhost:3000/api/accounts/auth/login",
        {
          email: values.email,
          password: values.password,
        }
      );

      const { token, id, accountName, email, role, profilePhoto } =
        response.data;

      // Simpan token ke cookies
      Cookies.set("token", token, { expires: 7 }); // Cookie akan bertahan 7 hari
      Cookies.set("userId", id.toString(), { expires: 7 }); // Simpan ID jika diperlukan
      Cookies.set("userRole", role, { expires: 7 });
      Cookies.set("profilePhoto", profilePhoto, { expires: 7 });

      message.success("Login successful!");
      router.push("/"); // Arahkan ke halaman utama
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Sembunyikan loading
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    message.error("Please check your input.");
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
          <Title level={3}>Welcome to EduVid!</Title>
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
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Log in
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: "center", marginTop: 16 }}>
          <span>Dont have an account?</span>
          <Button type="link" onClick={() => router.push("../createAccount")}>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
