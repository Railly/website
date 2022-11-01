import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";
import Layout from "components/Layout";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={{}}>
      <ThemeProvider attribute="class">
        <Layout>
          <Head>
            <title>Railly Hugo</title>
            <meta
              name="description"
              content="Hi, welcome to my digital space. Here I share my side projects, tutorials & what I learn over time. I am looking to grow my career in tech 🚀"
            />
            <meta property="og:title" content="Railly Hugo" />
            <meta
              property="og:description"
              content="Hi, welcome to my digital space. Here I share my side projects, tutorials & what I learn over time. I am looking to grow my career in tech 🚀"
            />
            <meta property="og:url" content="https://raillyhugo.com" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Railly Hugo" />
          </Head>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </ThemeProvider>
    </MDXProvider>
  );
}

export default MyApp;
