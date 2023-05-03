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
      className="flex justify-between w-full h-full px-2 py-4 text-base border-t dark:border-white/20 hover:bg-[#efefef] border-black/20 dark:hover:bg-[#222222aa] transition-all"
      href={`/project/${project.slug}`}
      key={project.slug}
    >
      <span className="font-mono font-medium">{project.title}</span>
      <div className="flex gap-7">
        <span className="font-mono">
          {project.publishedAt &&
            format(new Date(project.publishedAt), "MMM, yyyy")}
        </span>
        <span className="font-mono">
          <EyeIcon className="inline-block w-4 h-4 mr-2" />
          {project.views}
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
