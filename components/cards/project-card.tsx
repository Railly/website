import { Project } from "@/.contentlayer/generated";
import FramerCard from "./framer-card";
import Link from "next/link";
import { format } from "date-fns";

interface IBlogCardProps {
  project: Partial<Project>;
}

const ProjectCard = ({ project }: React.PropsWithChildren<IBlogCardProps>) => {
  return (
    <FramerCard color="yellow" key={project.slug}>
      <Link className="w-full h-full" href={`/portfolio/${project.slug}`}>
        <div className="h-full p-4 rounded-lg">
          <h3 className="mb-2 font-medium text-md sm:text-lg ">
            {project.title}
          </h3>
          <p className="mb-2 text-base dark:text-white">
            {project.publishedAt &&
              format(new Date(project.publishedAt), "MMMM dd, yyyy")}
          </p>
        </div>
      </Link>
    </FramerCard>
  );
};

export default ProjectCard;
