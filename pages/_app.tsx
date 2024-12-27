"use client";
import React from "react";
import type { AppProps } from "next/app";
import Layout from "@/components/molecules/Layout";
import { useRouter } from "next/router";
import Link from "next/link"; // Tambahkan impor untuk Link
import "../src/styles/globals.css";

const IGNORED_LAYOUT = ["/login"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const withLayout = !IGNORED_LAYOUT.includes(router.pathname);

  return (
    <>
      {withLayout ? (
        <>
          <nav style={{ padding: "10px", backgroundColor: "#f8f9fa" }}>
            {/* Tambahkan tautan navigasi */}
            <Link href="/user-settings">User Settings</Link>
          </nav>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
