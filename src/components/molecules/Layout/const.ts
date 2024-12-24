import { TeamOutlined, UserOutlined } from "@ant-design/icons";

export const MENUS = () => [
  {
    key: "sub1",
    label: "STUDI",
    icon: UserOutlined,
    children: [
      { key: "3", label: "SD" },
      { key: "4", label: "SMP" },
      { key: "5", label: "SD" },
    ],
  },
  {
    key: "sub2",
    label: "MAPEL",
    icon: TeamOutlined,
    children: [
      { key: "6", label: "MAPEL A" },
      { key: "8", label: "MAPEL B" },
    ],
  },
  {
    key: "sub3",
    label: "SUBMAPEL",
    icon: TeamOutlined,
    children: [
      { key: "9", label: "SUBMAPEL A" },
      { key: "10", label: "SUBMAPEL B" },
    ],
  },
];
