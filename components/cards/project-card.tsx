"use client";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { IProject } from "@/types/interfaces";
import { EyeIcon, StarIcon } from "lucide-react";
import { useImmutableRequest } from "@/hooks/use-request";

interface IBlogCardProps {
  project: Partial<IProject>;
}

const ProjectCard = ({ project }: React.PropsWithChildren<IBlogCardProps>) => {
  return (
    <Link
      className={
        "flex gap-4 justify-between w-full h-full p-4 text-base border-t dark:border-white/20 hover:bg-[#efefef] border-black/20 group dark:hover:bg-[#222222aa] transition-all"
      }
      href={`/projects/${project.slug}`}
      key={project.slug}
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
        <span className="flex items-center font-mono text-sm font-bold md:text-base group-hover:underline underline-offset-2">
          {project.title}
        </span>
      </div>
      <div className="flex gap-7">
        <span className="flex items-center font-mono text-sm text-center md:text-base">
          {project.publishedAt &&
            format(new Date(project.publishedAt), "MMM, yyyy")}
        </span>
        <span className="inline-flex flex-col justify-center gap-2 font-mono text-center sm:flex-row sm:items-center">
          <EyeIcon className="inline-block w-4 h-4" />
          {project.views}
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
