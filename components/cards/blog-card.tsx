import { Blog } from "@/.contentlayer/generated";
import FramerCard from "./framer-card";
import Link from "next/link";
import { format } from "date-fns";

interface IBlogCardProps {
  blog: Partial<Blog>;
}

const BlogCard = ({ blog }: React.PropsWithChildren<IBlogCardProps>) => {
  return (
    <FramerCard color="blue" key={blog.slug}>
      <Link href={`/blog/${blog.slug}`} key={blog.slug}>
        <div className="h-full p-4 rounded-lg">
          <h3 className="mb-2 font-medium text-md sm:text-lg ">{blog.title}</h3>
          <p className="mb-2 text-base dark:text-white">
            {blog.publishedAt &&
              format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
          </p>
        </div>
      </Link>
    </FramerCard>
  );
};

export default BlogCard;
