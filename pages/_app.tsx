import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import Layout from "components/Layout";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={{}}>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </ThemeProvider>
    </MDXProvider>
  );
}

export default MyApp;
