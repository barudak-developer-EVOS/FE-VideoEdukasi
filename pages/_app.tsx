"use client";
import React from "react";
import type { AppProps } from "next/app";
import Layout from "@/components/molecules/Layout";
import { useRouter } from "next/router";

import "../src/styles/globals.css";

const IGNORED_LAYOUT = ["/login", "/createAccount"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const withLayout = !IGNORED_LAYOUT.includes(router.pathname);
  return (
    <>
      {withLayout ? (
        <>
          <Layout id={pageProps.id}>
            <Component {...pageProps} />
          </Layout>
        </>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
