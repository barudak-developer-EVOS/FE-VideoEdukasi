import React, { useState } from "react";
import { Card, Input, Avatar } from "antd";
import { PlayCircleFilled } from "@ant-design/icons";
import { Image } from "antd";
import { useRouter } from "next/router";

const { Meta } = Card;
const { Search } = Input;

const VideoList = () => {
  const router = useRouter();

  // Dummy data for videos
  const videoData = [
    {
      id: 1,
      title: "Europe Street Beat",
      accountName: "Instagram Official",
      views: 1000,
      imageUrl:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      videoUrl: "https://www.youtube.com/watch?v=dqEktoQqx44",
    },
    {
      id: 2,
      title: "Ocean Waves Relaxation",
      accountName: "Ocean Waves Channel",
      views: 2000,
      imageUrl:
        "https://i.pinimg.com/736x/c6/f6/21/c6f621e557d40dceaf794b60e960a67d.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "Mountain Adventures",
      accountName: "Adventure Seekers",
      views: 1500,
      imageUrl:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      videoUrl: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
    },
    {
      id: 4,
      title: "Cityscape Views",
      accountName: "City Lovers",
      views: 3000,
      imageUrl:
        "https://i.pinimg.com/736x/c6/f6/21/c6f621e557d40dceaf794b60e960a67d.jpg",
      videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    },
    {
      id: 5,
      title: "Wilderness Exploration",
      accountName: "Nature Explorers",
      views: 2200,
      imageUrl:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      videoUrl: "https://www.youtube.com/watch?v=dqEktoQqx44",
    },
    {
      id: 6,
      title: "Underwater Wonders",
      accountName: "Aquatic Life",
      views: 2500,
      imageUrl:
        "https://i.pinimg.com/736x/c6/f6/21/c6f621e557d40dceaf794b60e960a67d.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 7,
      title: "Sunset Serenity",
      accountName: "Calm Vibes",
      views: 1800,
      imageUrl:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      videoUrl: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
    },
    {
      id: 8,
      title: "Historic Landmarks",
      accountName: "History Buffs",
      views: 2800,
      imageUrl:
        "https://i.pinimg.com/736x/c6/f6/21/c6f621e557d40dceaf794b60e960a67d.jpg",
      videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    },
    {
      id: 9,
      title: "Cozy Cabin Retreats",
      accountName: "Home Escape",
      views: 1700,
      imageUrl:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      videoUrl: "https://www.youtube.com/watch?v=dqEktoQqx44",
    },
    {
      id: 10,
      title: "Night Sky Marvels",
      accountName: "Stargazing Lovers",
      views: 3200,
      imageUrl:
        "https://i.pinimg.com/736x/c6/f6/21/c6f621e557d40dceaf794b60e960a67d.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 11,
      title: "Rainforest Sounds",
      accountName: "Nature Harmony",
      views: 2100,
      imageUrl:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      videoUrl: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
    },
    {
      id: 12,
      title: "Desert Sunsets",
      accountName: "Golden Hour",
      views: 3400,
      imageUrl:
        "https://i.pinimg.com/736x/c6/f6/21/c6f621e557d40dceaf794b60e960a67d.jpg",
      videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    },
    {
      id: 13,
      title: "City Nightlife",
      accountName: "Urban Explorers",
      views: 2900,
      imageUrl:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      videoUrl: "https://www.youtube.com/watch?v=dqEktoQqx44",
    },
    {
      id: 14,
      title: "Winter Wonderland",
      accountName: "Snow Adventures",
      views: 2300,
      imageUrl:
        "https://i.pinimg.com/736x/c6/f6/21/c6f621e557d40dceaf794b60e960a67d.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 15,
      title: "Forest Trails",
      accountName: "Hiking Club",
      views: 2400,
      imageUrl:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      videoUrl: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
    },
    {
      id: 16,
      title: "Clouds in Motion",
      accountName: "Time Lapse Art",
      views: 3100,
      imageUrl:
        "https://i.pinimg.com/736x/c6/f6/21/c6f621e557d40dceaf794b60e960a67d.jpg",
      videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    },
    {
      id: 17,
      title: "Island Escapes",
      accountName: "Paradise Seekers",
      views: 2600,
      imageUrl:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      videoUrl: "https://www.youtube.com/watch?v=dqEktoQqx44",
    },
    {
      id: 18,
      title: "Hidden Waterfalls",
      accountName: "Nature Wonders",
      views: 2800,
      imageUrl:
        "https://i.pinimg.com/736x/c6/f6/21/c6f621e557d40dceaf794b60e960a67d.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 19,
      title: "Starry Nights",
      accountName: "Cosmic Views",
      views: 3300,
      imageUrl:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      videoUrl: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
    },
    {
      id: 20,
      title: "Vintage Streets",
      accountName: "Retro Vibes",
      views: 2700,
      imageUrl:
        "https://i.pinimg.com/736x/c6/f6/21/c6f621e557d40dceaf794b60e960a67d.jpg",
      videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVideos, setFilteredVideos] = useState(videoData);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = videoData.filter((video) =>
      video.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredVideos(filtered);
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
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {filteredVideos.map((video) => (
          <Card
            bordered={false}
            key={video.id}
            hoverable
            style={{ width: 300, boxShadow: "none" }}
            onClick={() => router.push("/video/" + video.id)}
            cover={
              <Image
                onClick={() => router.push("/video/" + video.id)}
                preview={{
                  mask: (
                    <span style={{ fontSize: 16, fontWeight: 600 }}>
                      <PlayCircleFilled /> Tonton
                    </span>
                  ),
                }}
                alt={video.title}
                src={video.imageUrl}
                width={300}
                height={160}
                style={{ borderRadius: "10px" }}
              />
            }
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title={video.title}
              description={
                <div>
                  <div>{video.accountName}</div>
                  <div style={{ fontSize: 12, color: "gray" }}>
                    {video.views.toLocaleString()} views
                  </div>
                </div>
              }
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
