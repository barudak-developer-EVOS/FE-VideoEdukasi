"use client";
import React from "react";
import type { AppProps } from "next/app";
import Layout from "@/components/molecules/Layout";
import { useRouter } from "next/router";
const IGNORED_LAYOUT = ["/login"];
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const withLayout = !IGNORED_LAYOUT.includes(router.pathname);
  return (
    <>
      {withLayout ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
