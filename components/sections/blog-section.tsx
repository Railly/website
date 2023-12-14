import { IBlog } from "@/types/interfaces";
import BlogCard from "../cards/blog-card";
import LinkWithArrow from "../links/link-with-arrow";

interface IBlogSectionProps {
  blogPosts: Partial<IBlog>[];
  isPage?: boolean;
}

const BlogSection = ({
  blogPosts,
  isPage = false,
}: React.PropsWithChildren<IBlogSectionProps>) => {
  return (
    <section className="w-full mt-4 md:mt-6 not-prose">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold sm:text-2xl">Blog</h2>
        {!isPage && <LinkWithArrow href="/blog">See all posts</LinkWithArrow>}
      </div>
      <div className="flex flex-col gap-4 mb-4">
        {blogPosts.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
