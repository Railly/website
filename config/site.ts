import { SiteConfig } from "@/types/types";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://raillyhugo.com"
    : "http://localhost:3011";

export const siteConfig: SiteConfig = {
  name: "Railly Hugo",
  description:
    "Hi, welcome to my digital space. Here I share my side projects, tutorials & what I learn over time. I am looking to grow my career in tech 🚀",
  url: BASE_URL,
  ogImage: `${BASE_URL}/images/og.png`,
  links: {
    twitter: "https://twitter.com/raillyhugo",
    github: "https://github.com/Railly/website",
  },
};
