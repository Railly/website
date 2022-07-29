import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";
import Layout from "components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={{}}>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </MDXProvider>
  );
}

export default MyApp;
