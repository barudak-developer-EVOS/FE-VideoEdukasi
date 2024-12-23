import React from "react";
import { Card, Flex, Button, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  PlayCircleFilled,
} from "@ant-design/icons";

import { Image } from "antd";
const { Meta } = Card;
import { useRouter } from "next/router";

const VideoList = () => {
  const router = useRouter();

  // Dummy data for videos
  const videoData = [
    {
      id: 1,
      title: "Europe Street beat",
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
  ];

  return (
    <div>
      <Flex
        wrap
        gap="middle"
        justify={"start"}
        style={{ alignItems: "stretch" }}
      >
        {videoData.map((video) => (
          <Card
            bordered={false}
            key={video.id}
            hoverable
            style={{ width: 300, boxShadow: "none" }}
            cover={
              <Image
                onClick={() => router.push(video.videoUrl)}
                preview={{
                  mask: (
                    <span style={{ fontSize: 16, fontWeight: 600 }}>
                      <PlayCircleFilled />
                      {""}
                      Tonton
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
      </Flex>
    </div>
  );
};

export default VideoList;
