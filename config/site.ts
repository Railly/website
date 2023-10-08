import { SiteConfig } from "@/types/types";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://raillyhugo.com"
    : "http://localhost:3011";

export const siteConfig: SiteConfig = {
  name: "Railly Hugo",
  description: "Software Engineer and UI Developer from Lima. Dive into my projects, tutorials, and digital explorations. Always learning, always crafting.",
  url: BASE_URL,
  ogImage: `${BASE_URL}/images/og.png`,
  links: {
    twitter: "https://twitter.com/raillyhugo",
    github: "https://github.com/Railly/website",
    linkedin: "https://linkedin.com/in/railly-hugo",
  },
};
