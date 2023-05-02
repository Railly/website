import React from "react";
import { useRouter } from "next/router";
import { tagColors } from "utils/styles";
import { format } from "date-fns";
import { usePostViews } from "hooks/use-get-post-views";
import EyeIcon from "icons/Eye";
import { IBlog } from "@/types/interfaces";

interface IProps {
  blogPost: IBlog;
}

const ArticleCard: React.FC<IProps> = ({ blogPost }) => {
  const router = useRouter();
  const { views, error, isLoading } = usePostViews(blogPost.slug);

  return (
    <article
      key={blogPost.slug}
      onClick={() => router.push(`/blog/${blogPost.slug}`)}
      className={`flex flex-col transition cursor-pointer hover:scale-[1.02] hover:-rotate-1 duration-300 shadow-md shadow-slate-600/10 rounded-2xl dark:shadow-gray-400/10 ${
        blogPost.disabled ? "filter opacity-[0.5]  grayscale " : ""
      }`}
    >
      <div className="grid grid-cols-1 px-4 pt-4 pb-2 bg-hunter-blue-50 dark:bg-hunter-black-800 rounded-2xl">
        <div className="grid">
          <h3 className="pb-1.5 mb-2 text-base font-bold border-b border-black/20 dark:border-white/30">
            {blogPost.title}
          </h3>
          <p className="mb-2 text-base dark:text-white">{blogPost.summary}</p>
          <div className="flex flex-wrap gap-4 mt-2">
            {/* {blogPost?.tags?.map((tag, index) => (
              <p
                key={`${tag}-${index}`}
                className={`mb-2 w-max px-2 py-0.5 rounded-lg text-sm font-medium ${tagColors["Blog"]}`}
              >
                {tag}
              </p>
            ))} */}
            <span className="mb-2 text-sm place-self-end dark:text-white/70">
              {format(new Date(blogPost.publishedAt), "MMMM dd, yyyy")}
            </span>
            {error && <p className="text-sm text-red-500">Error: {error}</p>}
            {isLoading && <p className="text-sm text-gray-500">Loading...</p>}
            {!isLoading && !error && (
              <div className="flex items-center gap-1 mb-2 text-sm place-self-end dark:text-white/70">
                <EyeIcon />
                <span>{views}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
