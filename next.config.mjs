// next.config.mjs
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import withMDX from "@next/mdx";
import { rehypePrettyCodeOptions, rehypePrettyCodeClasses } from "./lib/rehype.mjs";

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
    domains: ["api.producthunt.com", "img.shields.io"],
  },
  experimental: {
    appDir: true,
    mdxRs: false,
  },
};

export default withMDX(mdxConfig)(nextConfig);