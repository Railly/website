import axios from "@/lib/axios";
import BlogSection from "@/components/sections/blog-section";

async function getBlogPosts() {
  const blogPosts = await axios
    .get("/api/posts?sort=desc")
    .then((res) => res.data)
    .catch((err: any) => console.log(err));
  return blogPosts;
}

export default async function Blog() {
  const blogPosts = await getBlogPosts();

  return <BlogSection blogPosts={blogPosts} isPage />;
}
