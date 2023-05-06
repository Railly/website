import "../styles/globals.css";
import { Metadata } from "next";
import { Outfit } from "next/font/google";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import Providers from "./providers";
import { TailwindIndicator } from "@/components/misc/tailwind-indicator";
import AppLayout from "@/components/layouts/app-layout";
import { ServerThemeProvider } from "@wits/next-themes";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} | %s`,
  },
  description: siteConfig.description,
  keywords: [],
  authors: [
    {
      name: "Railly Hugo",
      url: "https://raillyhugo.com",
    },
  ],
  creator: "Railly Hugo",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl("/images/og.png"),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.png`],
    creator: "@raillyhugo",
  },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/favicon/site.webmanifest`,
};

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "500", "700", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en" className={outfit.variable} suppressHydrationWarning>
        <body className="flex flex-col items-center min-h-screen leading-7 dark:bg-[#1c1c1c] bg-hunter-black-50 text-zinc-800 dark:text-zinc-100 selection:bg-black/80 selection:text-white dark:selection:bg-white/90 dark:selection:text-black transition-all">
          <AppLayout>
            <Providers>{children}</Providers>
            <TailwindIndicator />
          </AppLayout>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
