import { BlogHeader } from "./header";
import { getBlogPosts } from "@/lib/api/get-blog-posts";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blogPosts = await getBlogPosts({
    limit: false,
  });

  return (
    <article className="mb-10 prose prose-neutral dark:prose-invert">
      <BlogHeader blogPosts={blogPosts} />
      {children}
    </article>
  );
}
