import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Lexend:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="text-base leading-7 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 font-dm">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
