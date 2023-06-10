"use client";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { IProject } from "@/types/interfaces";
import { EyeIcon, StarIcon } from "lucide-react";
import { useImmutableRequest } from "@/hooks/use-request";
import { cn } from "@/lib/utils";

interface IBlogCardProps {
  project: Partial<IProject>;
}

const FeaturedProjectCard = ({
  project,
}: React.PropsWithChildren<IBlogCardProps>) => {
  const { data: repo } = useImmutableRequest<{
    success?: boolean;
    stars?: string;
  }>(`/api/stars/${project?.repoName}`);
  return (
    <Link
      className={cn(
        "flex gap-4 justify-between w-full h-full p-4 text-base border-t dark:border-white/20 hover:bg-hunter-yellow-300/30 border-black/20 group dark:hover:bg-hunter-yellow-300/20 transition-all",
        project?.isFeatured && "border-b dark:border-white/20",
        project?.isFeatured &&
          "bg-hunter-yellow-300/10 dark:bg-hunter-yellow-200/10"
      )}
      href={`https://github.com/Railly/${project?.repoName}`}
      key={project?.slug}
    >
      <div className="flex gap-4">
        <figure className="flex items-center">
          <Image
            src={project.logoUrl || "/images/unknown-logo.png"}
            alt={project.title || "Unknown Logo"}
            width={40}
            height={40}
            className="transition-transform rounded-lg ring-hunter-yellow-400 dark:ring-hunter-yellow-500 group-hover:ring-2 group-hover:scale-110"
          />
        </figure>
        <div className="flex flex-col justify-start gap-2 text-left">
          <div className="flex justify-start gap-2 font-mono">
            <span className="font-mono text-sm font-bold md:text-base">
              {project.title}
            </span>
            <span className="flex items-center gap-1 px-2 transition-colors border border-transparent bg-zinc-300 dark:bg-hunter-black-700 rounded-3xl group-hover:border-black/70 dark:group-hover:border-white/70">
              <StarIcon className="inline-block w-4 h-4 transition-colors group-hover:fill-hunter-yellow-400 dark:group-hover:fill-hunter-yellow-500 dark:group-hover:stroke-hunter-yellow-500" />
              <span>{repo?.stars || 0}</span>
            </span>
          </div>
          <span className="max-w-[40ch]">{project.summary}</span>
        </div>
      </div>
      <div className="flex gap-7">
        <span className="flex items-center font-mono text-sm text-center md:text-base">
          {project.publishedAt &&
            format(new Date(project.publishedAt), "MMM, yyyy")}
        </span>
        <span className="inline-flex flex-col justify-center gap-2 font-mono text-center sm:flex-row sm:items-center">
          <EyeIcon className="inline-block w-4 h-4" />
          {/* {project.views} */}
          {"-"}
        </span>
      </div>
    </Link>
  );
};

export default FeaturedProjectCard;
