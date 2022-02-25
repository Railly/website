import "../styles/globals.css";
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={{}}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
