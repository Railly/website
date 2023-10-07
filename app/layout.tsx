import "../styles/globals.css";
import { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { absoluteUrl, cn } from "@/lib/utils";
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

const kanit = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "500", "700"],
  variable: "--font-kanit",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "500", "700"],
  variable: "--font-playfair-display",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute="class">
      <html
        lang="en"
        className={cn(
          playfairDisplay.variable,
          kanit.variable,
          "selection:bg-foreground selection:text-background"
        )}
        suppressHydrationWarning
      >
        <body className={cn("px-4 py-2")}>
          <AppLayout>
            <Providers>{children}</Providers>
            <TailwindIndicator />
          </AppLayout>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
