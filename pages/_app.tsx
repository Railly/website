import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import Layout from "components/Layout";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { Lexend, Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-lexend",
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={{}}>
      <ThemeProvider attribute="class">
        {/* <Layout> */}
        <Component {...pageProps} />
        <style jsx global>{`
          html {
            font-family: ${outfit.style.fontFamily};
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${lexend.style.fontFamily};
          }
        `}</style>{" "}
        <Analytics />
        {/* </Layout> */}
      </ThemeProvider>
    </MDXProvider>
  );
}

export default MyApp;
