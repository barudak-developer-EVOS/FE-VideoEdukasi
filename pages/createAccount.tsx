import dynamic from "next/dynamic";

const Component = dynamic(
  () =>
    import(
      /* webpackChunkName: "login-page" */ "../src/components/templates/CreateAccount/index"
    ),
  {
    ssr: false,
  }
);
export default Component;
