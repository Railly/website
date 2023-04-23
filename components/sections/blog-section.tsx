import { Blog } from "@/.contentlayer/generated";
import BlogCard from "../cards/blog-card";
import LinkWithArrow from "../links/link-with-arrow";

interface IBlogSectionProps {
  blogPosts: Partial<Blog>[];
}

const BlogSection = ({
  blogPosts,
}: React.PropsWithChildren<IBlogSectionProps>) => {
  return (
    <section className="mt-6 md:mt-8">
      <h2 className="mb-4 text-xl font-medium sm:text-2xl">Latest posts</h2>
      <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
        {blogPosts.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
        <LinkWithArrow href="/blog">See all posts</LinkWithArrow>
      </div>
    </section>
  );
};

export default BlogSection;
