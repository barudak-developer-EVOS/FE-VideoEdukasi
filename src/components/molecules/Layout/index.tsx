import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

const { Header, Sider, Content } = Layout;

const MENUS = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "STUDI",
    children: [
      { key: "1-1", label: "SD" },
      { key: "1-2", label: "SMP" },
      { key: "1-3", label: "SMA" },
    ],
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: "MAPEL",
    children: [
      { key: "2-1", label: "MAPEL A" },
      { key: "2-2", label: "MAPEL B" },
    ],
  },
];

interface Props {
  children: React.ReactNode;
}
const App: React.FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const router = useRouter();

  return (
    <Layout style={{ height: "100%" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div style={{ textAlign: "center", padding: "16px 0" }}>
          <Image src="/eduvidLogo.png" alt="Logo" width={80} height={80} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={MENUS.map((menu) => ({
            key: menu.key,
            icon: menu.icon,
            label: menu.label,
            children: menu.children?.map((child) => ({
              key: child.key,
              label: child.label,
            })),
          }))}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 16px",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: "16px", width: 64, height: 64 }}
            />
            <h2>VIDEO EDUKASI ONLINE</h2>
            <Button type="primary" onClick={() => router.push("/manage")}>
              + Buat
            </Button>
          </div>
        </Header>
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
