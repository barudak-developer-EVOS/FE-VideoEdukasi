import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Dropdown, Avatar } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

const { Header, Sider, Content } = Layout;

const MENUS1 = [
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
];

const MENUS2 = [
  {
    key: "2",
    icon: <UserOutlined />,
    label: "MAPEL",
    children: [
      { key: "2-1", label: "MAPEL SD" },
      { key: "2-2", label: "MAPEL SMP" },
      { key: "2-3", label: "MAPEL SMA" },
    ],
  },
];

const MENUS3 = [
  {
    key: "3",
    icon: <UserOutlined />,
    label: "SUBMAPEL",
    children: [
      { key: "3-1", label: "SUBMAPEL SD" },
      { key: "3-2", label: "SUBMAPEL SMP" },
      { key: "3-3", label: "SUBMAPEL SMA" },
    ],
  },
];

interface Props {
  children: React.ReactNode;
}
const App: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const menuItems = [
    {
      key: "1",
      label: "Profile",
      onClick: () => {
        router.push("/user-settings");
      },
    },
    {
      key: "3",
      label: "Logout",
      onClick: () => {
        router.push("/login");
      },
    },
  ];

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100%", minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div style={{ textAlign: "center", padding: "16px 0" }}>
          <Image src="/eduvidLogo.png" alt="Logo" width={80} height={80} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={MENUS1.map((menu) => ({
            key: menu.key,
            icon: menu.icon,
            label: menu.label,
            children: menu.children?.map((child) => ({
              key: child.key,
              label: child.label,
            })),
          }))}
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={MENUS2.map((menu) => ({
            key: menu.key,
            icon: menu.icon,
            label: menu.label,
            children: menu.children?.map((child) => ({
              key: child.key,
              label: child.label,
            })),
          }))}
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={MENUS3.map((menu) => ({
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
            <div>
              <Button
                type="primary"
                style={{ marginRight: 16 }}
                onClick={() => router.push("/manage")}
              >
                + Buat
              </Button>
              <Dropdown
                menu={{ items: menuItems }}
                trigger={["click"]}
                placement="bottomRight"
              >
                <Avatar
                  style={{ cursor: "pointer" }}
                  size="large"
                  icon={<UserOutlined />}
                />
              </Dropdown>
            </div>
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
