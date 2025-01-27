import dynamic from "next/dynamic";

const Component = dynamic(
  () =>
    import(
      /* webpackChunkName: "createAccount-page" */ "@/components/templates/CreateAccount"
    ),
  {
    ssr: false,
  }
);
export default Component;
