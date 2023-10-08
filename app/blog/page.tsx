import BlogSection from "@/components/sections/blog-section";
import { getBlogPosts } from "@/lib/api/get-blog-posts";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog",
  description: "A canvas for expressing my thoughts and teaching what I've learned.",
  openGraph: {
    siteName: "Railly Hugo | Blog",
    description: "A canvas for expressing my thoughts and teaching what I've learned.",
    images: [
      {
        url: `https://raillyhugo.com/api/og?title=${encodeURIComponent(
          "Railly Hugo | Blog"
        )}&color=${encodeURIComponent("B8B8B8")}`,
      },
    ],
  },
}

export default async function Blog() {
  const blogPosts = await getBlogPosts({
    limit: false,
  });

  return <BlogSection blogPosts={blogPosts} isPage />;
}
