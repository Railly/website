import "../styles/globals.css";
import { Outfit, Lexend } from "next/font/google";
import { Providers } from "./providers";
import MainLayout from "./components/MainLayout";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${lexend.variable}`}>
        <MainLayout>
          <Providers>{children}</Providers>
        </MainLayout>
      </body>
    </html>
  );
}
