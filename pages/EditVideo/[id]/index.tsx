import dynamic from "next/dynamic";

const Component = dynamic(
  () =>
    import(
      /* webpackChunkName: "login-page" */ "@/components/templates/Manage/edit"
    ),
  {
    ssr: false,
  }
);
export default Component;
