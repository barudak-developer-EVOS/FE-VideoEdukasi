import React, { useState, ReactNode } from "react";
import { Layout, Menu, theme } from "antd";
import Image from "next/image";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

interface Props {
  children: ReactNode;
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const MENUS = [
  {
    key: "sub1",
    label: "STUDI",
    icon: UserOutlined,
    children: [
      { key: "1", label: "SD" },
      { key: "2", label: "SMP" },
      { key: "3", label: "SMA" },
    ],
  },
  {
    key: "sub2",
    label: "MAPEL",
    icon: TeamOutlined,
    children: [
      { key: "4", label: "MAPEL A" },
      { key: "5", label: "MAPEL B" },
    ],
  },
  {
    key: "sub3",
    label: "SUBMAPEL",
    icon: TeamOutlined,
    children: [
      { key: "6", label: "SUBMAPEL A" },
      { key: "7", label: "SUBMAPEL B" },
    ],
  },
];

const App: React.FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenus, setActiveMenus] = useState<number>(1); // Melacak jumlah menu yang aktif
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = (key: string) => {
    if (activeMenus < MENUS.length) {
      setActiveMenus((prev) => prev + 1); // Aktifkan menu berikutnya
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        style={{
          position: "sticky",
          top: 0, // Makes the sidebar stick to the top
          height: "100vh", // Ensures the sidebar takes full height
          zIndex: 1, // Makes sure the sidebar is always above content
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="" style={{ textAlign: "center" }}>
          <Image src="/eduvidLogo.png" alt="Logo" width={100} height={100} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          onClick={(e) => handleMenuClick(e.key)}
          items={MENUS.slice(0, activeMenus).map((menuItem) => ({
            ...menuItem,
            icon: React.createElement(menuItem.icon),
          }))}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        />
        <Content style={{ margin: "10px 16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
