import dynamic from "next/dynamic";

const Component = dynamic(
  () =>
    import(
      /* webpackChunkName: "login-page" */ "@/components/templates/Setting/index"
    ),
  {
    ssr: false,
  }
);
export default Component;
