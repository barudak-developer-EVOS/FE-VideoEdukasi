import dynamic from "next/dynamic";

const Component = dynamic(
  () =>
    import(
      /* webpackChunkName: "dashboard-page" */ "../src/components/templates/Dashboard"
    ),
  {
    ssr: false,
  }
);
export default Component;
