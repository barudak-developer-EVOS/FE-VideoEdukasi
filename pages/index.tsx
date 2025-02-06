import dynamic from "next/dynamic";

const Component = dynamic(
  () =>
    import(
      /* webpackChunkName: "login-page" */ "../src/components/templates/Dashboard/index"
    ),
  {
    ssr: false,
  }
);
export default Component;
