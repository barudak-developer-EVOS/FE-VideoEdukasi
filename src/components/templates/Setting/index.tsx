"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Form, Input, Upload, message } from "antd";
import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import Image from "next/image";
import axios from "axios";
import Cookies from "js-cookie";
import { UploadFile } from "antd/es/upload/interface";

const UserSettings: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Ambil ID dari URL
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState<any>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);

  useEffect(() => {
    if (id) {
      const token = Cookies.get("token");

      if (!token) {
        message.error("You are not authorized. Please log in.");
        return;
      }

      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/accounts/get-accounts/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          const data = response.data;
          setInitialValues({
            name: data.account_name,
            email: data.account_email,
            password: data.account_password,
            profilePhotoFile: data.account_profile_photo,
          });
          setThumbnailPreview(data.account_profile_photo || null);
        })
        .catch((error) => {
          console.error("Error fetching account data:", error);
          message.error("Failed to load account data.");
        });
    }
  }, [id]);
  // Dependencies include `id` so that it updates when `id` changes

  // Handle image upload and preview

  const handleThumbnailUpload = (file: any) => {
    const url = URL.createObjectURL(file);
    setThumbnailPreview(url);
    setThumbnailFile(file);
    return false; // Mencegah upload otomatis oleh Ant Design
  };

  // Handle form submission
  const handleSubmit = (values: any) => {
    if (id) {
      const token = Cookies.get("token");

      if (!token) {
        message.error("You are not authorized. Please log in.");
        return;
      }

      const formData = new FormData();
      if (thumbnailFile) {
        formData.append("profilePhotoFile", thumbnailFile);
      }
      formData.append("name", values.name);
      formData.append("email", values.email);

      axios
        .put(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/accounts/update-accounts/${id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            const profilePhotoUrl = response.data?.data?.profilePhoto;
            if (profilePhotoUrl) {
              Cookies.set("profilePhoto", profilePhotoUrl, { path: "/" });
            }

            message.success("Settings saved successfully!");

            router.push("/").then(() => {
              window.location.reload(); // Reload setelah navigasi
            });
          } else {
            message.error("Failed to save settings.");
          }
        })
        .catch((error) => {
          console.error("Error updating account data:", error);
          message.error("Failed to save settings.");
        });
    }
  };

  if (!initialValues) {
    // Optionally show a loading spinner while the data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "100%", margin: "auto" }}>
      <Button type="primary" onClick={() => router.back()}>
        <ArrowLeftOutlined />
        Back
      </Button>
      <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
        <h1>User Settings</h1>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={initialValues}
        >
          <div style={{ textAlign: "center" }}>
            {thumbnailPreview && (
              <Image
                src={thumbnailPreview}
                alt="Thumbnail Preview"
                width={200}
                height={200}
                style={{
                  marginTop: 10,
                  objectFit: "cover",
                  border: "1px solid #ccc",
                  borderRadius: "50%", // Circular image
                }}
              />
            )}
            <Form.Item name="profilePhotoFile" style={{ marginTop: 20 }}>
              <Upload
                accept="image/*"
                beforeUpload={handleThumbnailUpload}
                showUploadList={false}
              >
                <Button icon={<UploadOutlined />}>Upload Photo Profile</Button>
              </Upload>
            </Form.Item>
          </div>

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

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Save Settings
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UserSettings;
