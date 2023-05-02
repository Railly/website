import BlogSection from "@/components/sections/blog-section";

async function getBlogPosts() {
  const blogPosts = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/posts?sort=desc`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
  return blogPosts;
}

export default async function Blog() {
  const blogPosts = await getBlogPosts();

  return <BlogSection blogPosts={blogPosts} isPage />;
}
