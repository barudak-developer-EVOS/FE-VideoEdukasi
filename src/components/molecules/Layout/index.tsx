import React, { useState, useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Dropdown, Avatar, message } from "antd";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import VideoList from "@/components/templates/Dashboard";
const { Header, Sider, Content } = Layout;
import VideoContent from "@/components/templates/Video";
import Manage from "@/components/templates/Manage";
import EditVideo from "@/components/templates/Manage/edit";
import UserSettings from "@/components/templates/Setting";
import Link from "next/link";
import type { MenuProps } from "antd";
import CreateAccount from "@/components/templates/CreateAccount/index";
// import { Meera_Inimai } from "next/font/google";
// import { on } from "events";
// import { DownOutlined, SmileOutlined } from "@ant-design/icons";

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
      { key: "2", label: "PPKn" },
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
      { key: "2", label: "PPKn" },
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
      { key: "2", label: "PPKn" },
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
  id: any;
}
const App: React.FC<Props> = ({ children }) => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [selectedStudi, setSelectedStudi] = useState<string | null>(null);
  const [selectedMapel, setSelectedMapel] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { id } = router.query;
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const getPageContent = () => {
    switch (pathname) {
      case `/UserSetting/${id}`:
        return <UserSettings />;
      case `/video/${id}`:
        return <VideoContent />;
      case `/EditVideo/${id}`:
        return <EditVideo />;
      case "/manage": // Jika berada di halaman buat video
        return <Manage />;
      case "/createAccount": // Jika berada di halaman buat video
        return <CreateAccount />;
      case "/": // Jika berada di halaman daftar video
        return (
          <VideoList
            video_education_level={selectedStudi}
            video_subject={selectedMapel}
          />
        );
      default:
        return "Page not found";
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

  const [collapsed, setCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const account = Cookies.get("userId");

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  function createVideo() {
    if (Cookies.get("userRole") === "tutor") {
      router.push("/manage");
    } else {
      message.error("Anda bukan Tutor,silahkan Login sebagai Tutor");
    }
  }

  const handleLogout = () => {
    // Remove user-related cookies
    Cookies.remove("userId");
    Cookies.remove("userRole");
    Cookies.remove("profilePhoto");
    Cookies.remove("token");
    setProfilePhoto(null);
    router.push("/"); // Redirect to home page after logout
    message.success("You have logged out successfully");
  };

  const items = account
    ? [
        {
          key: "3",
          label: (
            <span
              onClick={() =>
                router.push(`/UserSetting/${Cookies.get("userId")}`)
              }
            >
              Settings
            </span>
          ),
        },
        {
          key: "2",
          label: <span onClick={handleLogout}>Logout</span>,
        },
      ]
    : [
        {
          key: "1",
          label: <Link href="/login">Login</Link>,
        },
        {
          key: "4",
          label: <Link href="/createAccount">Create</Link>,
        },
      ];

  useEffect(() => {
    // This ensures the code only runs on the client
    const profilePhoto = Cookies.get("profilePhoto");
    setProfilePhoto(profilePhoto === undefined ? null : profilePhoto);
  }, []);
  return (
    <Layout style={{ height: "100%", minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} width={200}>
        <div style={{ textAlign: "center", padding: "16px 0" }}>
          <Image
            src="/eduvidLogo.png"
            alt="Logo"
            width={80}
            height={80}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSelectedKey(null);
              setSelectedStudi(null);
              setSelectedMapel(null);
              router.push("/");
            }}
          />
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
                onClick={() => createVideo()}
              >
                + Buat
              </Button>
              <Dropdown
                overlay={<Menu items={items} />}
                trigger={["click"]}
                placement="bottomRight"
              >
                <Avatar
                  style={{ cursor: "pointer" }}
                  size="large"
                  src={
                    profilePhoto ||
                    "https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                  }
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
