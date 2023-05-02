/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")();

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  images: {
    domains: ["api.producthunt.com", "img.shields.io"],
  },
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
});
