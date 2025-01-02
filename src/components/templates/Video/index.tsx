import React from "react";
import { Card, Avatar, Typography, Space, Button, Divider, Input } from "antd";
import {
  LikeOutlined,
  DislikeOutlined,
  ShareAltOutlined,
  UserOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { TextArea } = Input;

const VideoContent = () => {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: 20 }}>
      {/* Video Section */}
      <Card style={{ marginBottom: 20 }}>
        <div
          style={{
            width: "100%",
            height: 400,
            backgroundColor: "#e0e0e0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button shape="circle" size="large" icon={<PlayCircleOutlined />} />
        </div>
        <Title level={4} style={{ marginTop: 20 }}>
          Lorem Ipsum Ini Adalah Judul Video
        </Title>
        <Space align="center" size="large">
          <Avatar icon={<UserOutlined />} />
          <Text strong>Name</Text>
          <Space size="middle">
            <Button icon={<LikeOutlined />} shape="circle" />
            <Button icon={<DislikeOutlined />} shape="circle" />
            <Button icon={<ShareAltOutlined />} shape="circle" />
          </Space>
        </Space>
      </Card>

      {/* Description Section */}
      <Card style={{ marginBottom: 20 }}>
        <Title level={5}>Deskripsi</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Card>

      {/* Comments Section */}
      <Card>
        <Title level={5}>Komentar</Title>
        <Divider />
        <Space direction="vertical" style={{ width: "100%" }}>
          {[...Array(3)].map((_, index) => (
            <Space key={index} align="start" style={{ width: "100%" }}>
              <Avatar icon={<UserOutlined />} />
              <Text>
                komentar komentar komentar komentar komentar komentar komentar
              </Text>
            </Space>
          ))}
          <TextArea
            rows={3}
            placeholder="Tambahkan komentar Anda..."
            style={{ resize: "none" }}
          />
          <Button type="primary">Kirim</Button>
        </Space>
      </Card>
    </div>
  );
};

export default VideoContent;
