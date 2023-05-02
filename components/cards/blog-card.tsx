import FramerCard from "./framer-card";
import Link from "next/link";
import { format } from "date-fns";
import { IBlog } from "@/types/interfaces";
import { EyeIcon } from "lucide-react";

interface IBlogCardProps {
  blog: Partial<IBlog>;
}

const BlogCard = ({ blog }: React.PropsWithChildren<IBlogCardProps>) => {
  return (
    <Link
      className="flex justify-between w-full h-full px-2 py-4 text-base border-t dark:border-white/20 hover:bg-[#efefef] border-black/20 dark:hover:bg-[#222222aa] transition-all"
      href={`/blog/${blog.slug}`}
      key={blog.slug}
    >
      <span className="font-mono font-medium">{blog.title}</span>
      <div className="flex gap-7">
        <span className="font-mono">
          {blog.publishedAt && format(new Date(blog.publishedAt), "MMMM, yyyy")}
        </span>
        <span className="font-mono">
          <EyeIcon className="inline-block w-4 h-4 mr-2" />
          {blog.views}
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
