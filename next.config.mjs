// next.config.mjs
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import withMDX from "@next/mdx";
import {
  rehypePrettyCodeOptions,
  rehypePrettyCodeClasses,
} from "./lib/rehype.mjs";

const mdxConfig = {
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [rehypePrettyCodeClasses],
    ],
  },
};

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.producthunt.com",
        port: "",
        pathname: "/",
      },
      {
        protocol: "https",
        hostname: "img.shields.io",
        port: "",
        pathname: "/",
      },
    ],
  },
};

export default withMDX(mdxConfig)(nextConfig);
