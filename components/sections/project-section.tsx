import { IProject } from "@/types/interfaces";
import ProjectCard from "../cards/project-card";
import LinkWithArrow from "../links/link-with-arrow";
import FeaturedProjectCard from "../cards/featured-project-card";
import OneHunterCard from "../cards/one-hunter-card";

interface IProjectSectionProps {
  projects: Partial<IProject>[];
  isPage?: boolean;
}

const ProjectSection = ({
  projects,
  isPage = false,
}: React.PropsWithChildren<IProjectSectionProps>) => {
  return (
    <section className="w-full mt-4 md:mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium sm:text-2xl">Projects</h2>
        {!isPage && (
          <LinkWithArrow color="green" href="/projects">
            See all projects
          </LinkWithArrow>
        )}
      </div>
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
        {projects.map((project) => {
          if (project.isFeatured) {
            return <FeaturedProjectCard key={project.slug} project={project} />;
          }
          return <ProjectCard key={project.slug} project={project} />;
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
