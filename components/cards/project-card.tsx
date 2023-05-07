import Link from "next/link";
import { format } from "date-fns";
import { IProject } from "@/types/interfaces";
import { EyeIcon } from "lucide-react";

interface IBlogCardProps {
  project: Partial<IProject>;
}

const ProjectCard = ({ project }: React.PropsWithChildren<IBlogCardProps>) => {
  return (
    <Link
      className="flex gap-4 justify-between w-full h-full px-2 py-4 text-base border-t dark:border-white/20 hover:bg-[#efefef] border-black/20 dark:hover:bg-[#222222aa] transition-all"
      href={`/projects/${project.slug}`}
      key={project.slug}
    >
      <span className="font-mono text-sm font-medium md:text-base">
        {project.title}
      </span>
      <div className="flex gap-7">
        <span className="font-mono text-sm text-center md:text-base">
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
