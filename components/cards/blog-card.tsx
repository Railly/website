import Link from "next/link";
import { format } from "date-fns";
import { IBlog } from "@/types/interfaces";
import { EyeIcon } from "lucide-react";
import NoisyCard from "./noisy-card";

interface IBlogCardProps {
  blog: Partial<IBlog>;
}

const BlogCard = ({ blog }: React.PropsWithChildren<IBlogCardProps>) => {
  return (
    <NoisyCard className="group hover:shadow-md border border-border hover:border-foreground/50 dark:hover:shadow-foreground/5 dark:hover:border-foreground/30 transition-all">
      <Link href={`/blog/${blog.slug}`} key={blog.slug} className="flex flex-col justify-between w-full h-full p-2 transition-all transform">
        <span className="font-mono text-sm font-semibold text-foreground transition-colors group-hover:text-secondary-foreground md:text-base">
          {blog.title}
        </span>
        <div className="flex items-center justify-between mt-4">
          <span className="font-mono text-sm text-muted-foreground transition-colors group-hover:text-foreground">
            {blog.publishedAt && format(new Date(blog.publishedAt), "MMM, yyyy")}
          </span>
          <span className="flex items-center gap-2 font-mono text-muted-foreground transition-colors group-hover:text-foreground">
            <EyeIcon className="w-4 h-4 transition-colors group-hover:text-secondary-foreground" />
            {blog.views}
          </span>
        </div>
      </Link>
    </NoisyCard>
  );
};

export default BlogCard;
