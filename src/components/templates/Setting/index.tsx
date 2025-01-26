"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button, Form, Input, Upload, message } from "antd";
import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import Image from "next/image";

const UserSettings: React.FC = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Handle image upload and preview
  const handleImageChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const beforeUpload = (file: File) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
    } else {
      handleImageChange(file);
    }
    return false; // Prevent automatic upload
  };

  // Handle form submission
  const handleSubmit = (values: any) => {
    console.log("Form Data:", values);
    message.success("Settings saved successfully!");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      {/* Back Button */}
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={() => router.back()}
        style={{ marginBottom: "20px" }}
      >
        Back
      </Button>

      <h1>User Settings</h1>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input type="email" placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item label="Profile Image" valuePropName="fileList">
          <Upload
            accept="image/*"
            beforeUpload={beforeUpload}
            showUploadList={false}
          >
            <Button icon={<UploadOutlined />}>Upload Profile Image</Button>
          </Upload>
          {imagePreview && (
            <div style={{ marginTop: "10px" }}>
              <Image
                src={imagePreview}
                alt="Profile Preview"
                width={100}
                height={100}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
            </div>
          )}
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Save Settings
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserSettings;
