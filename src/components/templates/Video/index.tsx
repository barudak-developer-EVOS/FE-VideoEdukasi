import React, { useState, useEffect } from "react";
import {
  Card,
  Avatar,
  Typography,
  Space,
  Button,
  Divider,
  Input,
  message,
} from "antd";
import {
  LikeOutlined,
  DislikeOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

const { Title, Text } = Typography;
const { TextArea } = Input;

interface VideoData {
  data: {
    id: string;
    video_title: string;
    video_description: string;
    uploader: string;
    video_url: string;
    likes: number;
    dislikes: number;
    comments: string[];
    account: {
      name: string;
      profilePhoto: string;
    };
  };
}
interface Comment {
  comment_content: string;
  account_name: string;
  account_profile_photo: string;
}

const VideoContent = () => {
  const router = useRouter();
  const { id } = router.query; // Ambil ID dari URL
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [comments, setComments] = useState<Comment[]>([]); // State untuk komentar
  const [comment, setComment] = useState<string>(""); // State untuk input komentar
  const [isLiked, setIsLiked] = useState<boolean>(false); // Status tombol like
  const [isDisliked, setIsDisliked] = useState<boolean>(false); // Status tombol dislike

  useEffect(() => {
    if (id) {
      // Fetch data video menggunakan ID
      fetch(`http://localhost:3000/api/videos/get-videos/${id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Video data:", data);
          setVideoData(data);
        })
        .catch((error) => console.error("Error fetching video data:", error));

      // Fetch komentar untuk video
      fetch(`http://localhost:3000/api/comments/get-comments/video/${id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Comments data:", data);
          if (data.data && Array.isArray(data.data.comments)) {
            setComments(data.data.comments);
          }
        })
        .catch((error) => console.error("Error fetching comments:", error));
    }
  }, [id]);

  const handleSendComment = async () => {
    const token = Cookies.get("token"); // Ambil token dari cookies
    if (!token) {
      console.error("Token tidak ditemukan.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/api/comments/add-comments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Sertakan token di header
          },
          body: JSON.stringify({
            videoId: id, // Gunakan ID dari URL
            content: comment,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Komentar berhasil dikirim:", data);

      // Reset komentar setelah berhasil mengirim
      setComment("");
      alert("Komentar berhasil dikirim!");
    } catch (error) {
      console.error("Error saat mengirim komentar:", error);
      alert("Gagal mengirim komentar. Silakan coba lagi.");
    }
  };

  const handleLike = async () => {
    if (!id) return;

    try {
      const response = await axios.patch(
        `http://localhost:3000/api/videos/videos/${id}/like`
      );
      if (response.status === 200) {
        message.success("You liked the video!");
        setIsLiked(!isLiked);
        if (isDisliked) setIsDisliked(false); // Reset dislike jika sebelumnya aktif

        // Update jumlah likes
        setVideoData((prev) =>
          prev
            ? {
                ...prev,
                data: {
                  ...prev.data,
                  likes: prev.data.likes + 1,
                },
              }
            : null
        );
      }
    } catch (error) {
      console.error("Error liking video:", error);
    }
  };

  const handleDislike = async () => {
    if (!id) return;

    try {
      const response = await axios.patch(
        `http://localhost:3000/api/videos/videos/${id}/dislike`
      );
      if (response.status === 200) {
        message.success("You disliked the video!");
        setIsDisliked(!isDisliked);
        if (isLiked) setIsLiked(false); // Reset like jika sebelumnya aktif

        // Update jumlah dislikes
        setVideoData((prev) =>
          prev
            ? {
                ...prev,
                data: {
                  ...prev.data,
                  dislikes: prev.data.dislikes + 1,
                },
              }
            : null
        );
      }
    } catch (error) {
      console.error("Error disliking video:", error);
    }
  };

  if (!videoData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: 20 }}>
      {/* Video Section */}
      <Card style={{ marginBottom: 20 }}>
        <div
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
            backgroundColor: "#e0e0e0",
          }}
        >
          <video
            controls
            style={{
              width: "100%",
              height: 400,
              borderRadius: "10px",
              backgroundColor: "black",
            }}
          >
            <source src={videoData.data.video_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Title level={4} style={{ marginTop: 20 }}>
          {videoData.data.video_title}
        </Title>
        <Space
          align="center"
          style={{ justifyContent: "space-between", width: "100%" }}
        >
          <Space align="center" size="large">
            <Avatar
              src={
                videoData.data.account.profilePhoto
                  ? videoData.data.account.profilePhoto
                  : "https://api.dicebear.com/7.x/miniavs/svg?seed=8"
              }
            />
            <Text strong>{videoData.data.account.name}</Text>
          </Space>
          <Space size="middle" style={{ marginLeft: "auto" }}>
            <Button
              icon={<LikeOutlined />}
              shape="circle"
              type={"default"}
              onClick={handleLike}
            />
            <span>{videoData.data.likes}</span>
            <Button
              icon={<DislikeOutlined />}
              shape="circle"
              type={"default"}
              onClick={handleDislike}
            />
            <span>{videoData.data.dislikes}</span>
            <Button icon={<ShareAltOutlined />} shape="circle" />
          </Space>
        </Space>
      </Card>

      {/* Description Section */}
      <Card style={{ marginBottom: 20 }}>
        <Title level={5}>Deskripsi</Title>
        <Text>{videoData.data.video_description}</Text>
      </Card>

      {/* Comments Section */}
      <Card>
        <Title level={5}>Komentar</Title>
        <Divider />
        <Space direction="vertical" style={{ width: "100%" }}>
          {/* Tampilkan Komentar */}
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <Space key={index} align="start" style={{ width: "100%" }}>
                <Avatar src={comment.account_profile_photo} />
                <div>
                  <Text strong>{comment.account_name}</Text>
                  <br />
                  <Text>{comment.comment_content}</Text>
                </div>
              </Space>
            ))
          ) : (
            <Text>Tidak ada komentar.</Text>
          )}

          {/* Form Tambah Komentar */}
          <TextArea
            rows={3}
            placeholder="Tambahkan komentar Anda..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button type="primary" onClick={handleSendComment}>
            Kirim
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default VideoContent;
