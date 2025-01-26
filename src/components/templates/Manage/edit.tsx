import React, { useState, useEffect } from "react";
import { Form, Input, Upload, Button, Card, Select, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
const { TextArea } = Input;

const VideoUploadForm = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const { id } = router.query; // Ambil ID dari URL
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState("");
  const [thumbnailPreview, setThumbnailPreview] = useState("");

  useEffect(() => {
    if (id) {
      // Fetch data video berdasarkan ID
      axios
        .get(`http://localhost:3000/api/videos/get-videos/${id}`)
        .then((response) => {
          const videoData = response.data.data;
          form.setFieldsValue({
            video_title: videoData.video_title,
            video_description: videoData.video_description,
            video_education_level: videoData.video_education_level,
            video_subject: videoData.video_subject,
          });
          setVideoPreview(videoData.video_url); // Preview video
          setThumbnailPreview(videoData.video_thumbnail); // Preview thumbnail
        })
        .catch((error) => {
          console.error("Failed to fetch video data:", error);
          message.error("Failed to load video data.");
        });
    }
  }, [id, form]);

  const handleFinish = async (values: any) => {
    const token = Cookies.get("token");
    if (!token) {
      message.error("Unauthorized. Please log in.");
      return;
    }

    const formData = new FormData();
    formData.append("title", values.video_title);
    formData.append("description", values.video_description || "");
    formData.append("educationLevel", values.video_education_level);
    formData.append("subject", values.video_subject);
    if (videoFile) formData.append("videoFile", videoFile);
    if (thumbnailFile) formData.append("thumbnail", thumbnailFile);

    try {
      await axios.put(
        `http://localhost:3000/api/videos/update-videos/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      message.success("Video updated successfully!");
      router.push("/"); // Redirect ke halaman daftar video
    } catch (error) {
      console.error("Failed to update video:", error);
      message.error("Failed to update video. Please try again.");
    }
  };

  const handleVideoPreview = (file: any) => {
    const url = URL.createObjectURL(file);
    setVideoPreview(url);
    setVideoFile(file);
    return false; // Prevent automatic upload
  };

  const handleThumbnailUpload = (file: any) => {
    const url = URL.createObjectURL(file);
    setThumbnailPreview(url);
    setThumbnailFile(file);
    return false; // Prevent automatic upload
  };

  return (
    <Card
      title="Edit Video Details"
      bordered={false}
      style={{ maxWidth: 1200, margin: "auto" }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        initialValues={{
          video_title: "",
          video_description: "",
          video_education_level: "SD",
          video_subject: "PPKn",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            {/* Video Upload */}
            <Form.Item name="video" label="Upload Video">
              <Upload
                accept="video/*"
                beforeUpload={handleVideoPreview}
                showUploadList={false}
              >
                <Button icon={<UploadOutlined />}>Click to Upload Video</Button>
              </Upload>
            </Form.Item>
            {videoPreview && (
              <video
                controls
                style={{ marginTop: 10, width: "100%" }}
                src={videoPreview}
              />
            )}

            {/* Thumbnail Upload */}
            <Form.Item name="video_thumbnail" label="Upload Thumbnail">
              <Upload
                accept="image/*"
                beforeUpload={handleThumbnailUpload}
                showUploadList={false}
              >
                <Button icon={<UploadOutlined />}>Upload Thumbnail</Button>
              </Upload>
            </Form.Item>
            {thumbnailPreview && (
              <Image
                src={thumbnailPreview}
                alt="Thumbnail Preview"
                width={200}
                height={120}
                style={{
                  marginTop: 10,
                  objectFit: "cover",
                  border: "1px solid #ccc",
                }}
              />
            )}
          </div>

          <div style={{ flex: 2 }}>
            {/* Title */}
            <Form.Item
              name="video_title"
              label="Title"
              rules={[
                { required: true, message: "Please enter the video title!" },
              ]}
            >
              <Input placeholder="Enter video title" />
            </Form.Item>

            {/* Description */}
            <Form.Item name="video_description" label="Description">
              <TextArea rows={4} placeholder="Describe your video" />
            </Form.Item>

            {/* Education Level */}
            <Form.Item
              name="video_education_level"
              label="Education Level"
              rules={[
                {
                  required: true,
                  message: "Please select an education level!",
                },
              ]}
            >
              <Select>
                <Select.Option value="SD">SD</Select.Option>
                <Select.Option value="SMP">SMP</Select.Option>
                <Select.Option value="SMA">SMA</Select.Option>
              </Select>
            </Form.Item>

            {/* Subject */}
            <Form.Item
              name="video_subject"
              label="Subject"
              rules={[{ required: true, message: "Please select a subject!" }]}
            >
              <Select>
                <Select.Option value="PPKn">PPKn</Select.Option>
                <Select.Option value="Bahasa Indonesia">
                  Bahasa Indonesia
                </Select.Option>
                <Select.Option value="Matematika">Matematika</Select.Option>
                <Select.Option value="IPA">IPA</Select.Option>
                <Select.Option value="IPS">IPS</Select.Option>
                <Select.Option value="Agama">Agama</Select.Option>
                <Select.Option value="PJOK">PJOK</Select.Option>
              </Select>
            </Form.Item>

            {/* Submit Button */}
            <Form.Item style={{ textAlign: "left", marginTop: 20 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </Card>
  );
};

export default VideoUploadForm;
