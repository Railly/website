/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  swcMinify: true,
});
