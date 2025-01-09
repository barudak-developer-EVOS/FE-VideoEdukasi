import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Dropdown, Avatar } from "antd";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import VideoList from "@/components/templates/Dashboard";
const { Header, Sider, Content } = Layout;

const MENUS1 = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "STUDI",
    children: [
      { key: "1", label: "SD" },
      { key: "2", label: "SMP" },
      { key: "3", label: "SMA" },
    ],
  },
];

const MENUS2 = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "MAPEL SD",
    children: [
      { key: "1", label: "Agama" },
      { key: "2", label: "Ppkn" },
      { key: "3", label: "Bahasa Indonesia" },
      { key: "4", label: "Matematika" },
      { key: "5", label: "IPA" },
      { key: "6", label: "IPS" },
      { key: "7", label: "Seni dan Prakarya" },
      {
        key: "8",
        label: "PJOK",
      },
    ],
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: "MAPEL SMP",
    children: [
      { key: "1", label: "Agama" },
      { key: "2", label: "Ppkn" },
      { key: "3", label: "Bahasa Indonesia" },
      { key: "4", label: "Matematika" },
      { key: "5", label: "IPA" },
      { key: "6", label: "IPS" },
      { key: "7", label: "Bahasa Inggris" },
      {
        key: "8",
        label: "PJOK",
      },
      { key: "9", label: "Informatika" },
      { key: "10", label: "Seni dan Prakarya" },
    ],
  },
  {
    key: "3",
    icon: <UserOutlined />,
    label: "MAPEL SMA",
    children: [
      { key: "1", label: "Agama" },
      { key: "2", label: "Ppkn" },
      { key: "3", label: "Bahasa Indonesia" },
      { key: "4", label: "Matematika" },
      { key: "5", label: "IPA" },
      { key: "6", label: "IPS" },
      { key: "7", label: "Bahasa Inggris" },
      {
        key: "8",
        label: "PJOK",
      },
      { key: "9", label: "Informatika" },
      { key: "10", label: "Seni dan Prakarya" },
    ],
  },
];

interface Props {
  children: React.ReactNode;
}
const App: React.FC<Props> = ({ children }) => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [selectedStudi, setSelectedStudi] = useState<string | null>(null);
  const [selectedMapel, setSelectedMapel] = useState<string | null>(null);
  const pathname = usePathname();
  const getPageContent = () => {
    switch (pathname) {
      case "/manage": // Jika berada di halaman buat video
        return <div>Buat Video</div>;
      case "/": // Jika berada di halaman daftar video
        return (
          <VideoList
            video_education_level={selectedStudi}
            video_subject={selectedMapel}
          />
        );
      default:
        return "HAHAHAHHA";
    }
  };
  const handleMenu1Click = ({ key }: { key: string }) => {
    setSelectedKey(key);
    // Menentukan label studi berdasarkan key yang dipilih
    let studiLabel = "";
    switch (key) {
      case "1":
        studiLabel = "SD";
        break;
      case "2":
        studiLabel = "SMP";
        break;
      case "3":
        studiLabel = "SMA";
        break;
      default:
        studiLabel = "Unknown";
    }
    setSelectedStudi(studiLabel);
  };

  const handleMenu2Click = ({ key }: { key: string }) => {
    // Mencari mata pelajaran berdasarkan key yang dipilih
    const mapel = MENUS2.flatMap((menu) => menu.children || []).find(
      (child) => child.key === key
    )?.label;
    setSelectedMapel(mapel || null); // Set mapel yang ditemukan atau null jika tidak ada
  };
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
      <Sider trigger={null} collapsible collapsed={collapsed} width={200}>
        <div style={{ textAlign: "center", padding: "16px 0" }}>
          <Image src="/eduvidLogo.png" alt="Logo" width={80} height={80} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={handleMenu1Click}
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
        {selectedKey && (
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={MENUS2.filter((menu) => menu.key === selectedKey).map(
              (menu) => ({
                key: menu.key,
                icon: menu.icon,
                label: menu.label,
                children: menu.children?.map((child) => ({
                  key: child.key,
                  label: child.label,
                })),
              })
            )}
            onClick={handleMenu2Click}
          />
        )}
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
          {getPageContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
