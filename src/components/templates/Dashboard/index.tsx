import React, { useState, useEffect } from "react";
import { Card, Input, Avatar, Image, message } from "antd";
import {
  PlayCircleFilled,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
const { Meta } = Card;
const { Search } = Input;

interface VideoListProps {
  video_education_level: string | null;
  video_subject: string | null;
}

interface Video {
  video_id: number;
  video_title: string;
  video_description: string;
  video_url: string;
  video_thumbnail: string;
  account_id: number;
  video_education_level: string;
  video_subject: string;
  likes: number;
  dislikes: number;
  views: number;
  account: {
    name: string;
    profilePhoto: string;
  };
}

const VideoList: React.FC<VideoListProps> = ({
  video_education_level,
  video_subject,
}) => {
  const router = useRouter();
  const [video, setVideo] = useState<Video[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);

  // Get user role and user ID from cookies
  const userRole = Cookies.get("userRole");
  const userId = Cookies.get("userId");

  // Handle search functionality
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = video.filter(
      (video) =>
        video.video_title.toLowerCase().includes(value.toLowerCase()) &&
        (!video_education_level ||
          video.video_education_level === video_education_level) &&
        (!video_subject || video.video_subject === video_subject)
    );
    setFilteredVideos(filtered);
  };

  // Function to update video views
  const updateViewsAndRedirect = async (
    videoId: number,
    currentViews: number
  ) => {
    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/videos/videos/${videoId}/view`,
        {
          views: currentViews + 1,
        }
      );
      // Redirect to video detail page after updating views
      router.push("/video/" + videoId);
    } catch (error) {
      console.error("Failed to update views:", error);
      router.push("/video/" + videoId);
    }
  };

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/videos/getAll-videos`)
      .then((res) => {
        const fetchedVideos = res.data.data;
        setVideo(fetchedVideos);
        const filtered = fetchedVideos.filter(
          (video: Video) =>
            (!video_education_level ||
              video.video_education_level === video_education_level) &&
            (!video_subject || video.video_subject === video_subject) &&
            (userRole !== "tutor" || video.account_id === Number(userId))
        );
        setFilteredVideos(filtered);
      })
      .catch((err) => {
        console.log("Failed to fetch videos, using dummy data", err);
        const dummyVideos: Video[] = [
          {
            video_id: 28,
            video_title: "Testing Video",
            video_description: "This is a dummy testing video.",
            video_url: "video.mp4",
            video_thumbnail: "thumbnail.png",
            account_id: 4,
            video_education_level: "SMP",
            video_subject: "Informatika",
            likes: 9,
            dislikes: 5,
            views: 6,
            account: {
              name: "Dummy User",
              profilePhoto: "logo.png",
            },
          },
          {
            video_id: 29,
            video_title: "Sample Video",
            video_description: "Another dummy video description.",
            video_url: "video.mp4",
            video_thumbnail: "thumbnail.png",
            account_id: 4,
            video_education_level: "SMA",
            video_subject: "Informatika",
            likes: 0,
            dislikes: 0,
            views: 1,
            account: {
              name: "Sample User",
              profilePhoto: "logo.png",
            },
          },
        ];
        setVideo(dummyVideos);
        setFilteredVideos(dummyVideos);
      });
  }, [video_education_level, video_subject, userRole, userId]);

  const handleEditVideo = (videoId: number) => {
    router.push("/EditVideo/" + videoId);
  };
  const DeleteVideo = async (videoId: number) => {
    const token = Cookies.get("token");
    console.log(token);
    if (!token) {
      message.error("Unauthorized. Please log in.");
      return;
    }
    try {
      axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/videos/delete-videos/${videoId}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      message.success("Video Deleted successfully!");
      router.push("/");
    } catch (error) {
      console.error("Failed to Deleted video:", error);
      message.error("Failed to Deleted video. Please try again.");
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Search
          placeholder="Search video title"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
          style={{ marginBottom: "20px", maxWidth: "800px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        {filteredVideos.length === 0 ? (
          <div>No videos found for the selected criteria.</div>
        ) : (
          filteredVideos.map((video) => (
            <Card
              bordered={false}
              key={video.video_id}
              hoverable
              style={{ width: 300, boxShadow: "none" }}
              actions={
                Cookies.get("userRole") === "tutor"
                  ? [
                      <EditOutlined
                        key="edit"
                        onClick={() => handleEditVideo(video.video_id)}
                      />,
                      <DeleteOutlined
                        key="delete"
                        onClick={() => DeleteVideo(video.video_id)}
                      />,
                    ]
                  : undefined
              }
              cover={
                <Image
                  preview={{
                    mask: (
                      <span style={{ fontSize: 16, fontWeight: 600 }}>
                        <PlayCircleFilled /> Tonton
                      </span>
                    ),
                  }}
                  alt={video.video_title}
                  src={video.video_thumbnail}
                  width={300}
                  height={160}
                  style={{ borderRadius: "10px" }}
                  onClick={() =>
                    updateViewsAndRedirect(video.video_id, video.views)
                  }
                />
              }
            >
              <Meta
                avatar={
                  <Avatar
                    src={
                      video.account.profilePhoto
                        ? video.account.profilePhoto
                        : "https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    }
                  />
                }
                title={video.video_title}
                description={
                  <div>
                    <div>{video.account.name}</div>
                    <div style={{ fontSize: 12, color: "gray" }}>
                      {video.views.toLocaleString()} views
                    </div>
                  </div>
                }
              />
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default VideoList;
