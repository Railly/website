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
    <section className="w-full mt-6 md:mt-8">
      <h2 className="mb-4 text-xl font-medium sm:text-2xl">Latest posts</h2>
      {isPage && (
        <div className="flex justify-between w-full px-2 text-sm dark:text-white/50 text-black-50">
          <span className="font-mono font-medium">title</span>
          <div className="flex gap-7">
            <span className="font-mono">date</span>
            <span className="font-mono">views</span>
          </div>
        </div>
      )}
      <div className="flex flex-col mb-4">
        {blogPosts &&
          blogPosts.length > 0 &&
          // ensure that blogPosts.map is a function
          typeof blogPosts.map === "function" &&
          blogPosts.map((blog) => <BlogCard key={blog.slug} blog={blog} />)}
      </div>
      {!isPage && <LinkWithArrow href="/blog">See all posts</LinkWithArrow>}
    </section>
  );
};

export default BlogSection;
