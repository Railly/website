import { BlogHeader } from "./header";
import { getBlogPosts } from "@/lib/api/get-blog-posts";

export const revalidate = 60;

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blogPosts = await getBlogPosts();

  return (
    <article className="mb-10 text-gray-800 dark:text-gray-300">
      <BlogHeader blogPosts={blogPosts} />
      {children}
    </article>
  );
}
