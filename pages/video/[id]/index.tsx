import dynamic from "next/dynamic";

const Component = dynamic(
  () =>
    import(
      /* webpackChunkName: "login-page" */ "@/components/templates/Video/index"
    ),
  {
    ssr: false,
  }
);
export default Component;
