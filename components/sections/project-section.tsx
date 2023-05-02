import { IProject } from "@/types/interfaces";
import ProjectCard from "../cards/project-card";
import LinkWithArrow from "../links/link-with-arrow";

interface IProjectSectionProps {
  projects: Partial<IProject>[];
  isPage?: boolean;
}

const ProjectSection = ({
  projects,
  isPage = false,
}: React.PropsWithChildren<IProjectSectionProps>) => {
  return (
    <section className="mt-6 md:mt-8">
      <h2 className="mb-4 text-xl font-medium sm:text-2xl">Latest projects</h2>
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
        {projects &&
          projects.length > 0 &&
          typeof projects.map === "function" &&
          projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
      </div>
      {!isPage && (
        <LinkWithArrow color="green" href="/portfolio">
          See all projects
        </LinkWithArrow>
      )}
    </section>
  );
};

export default ProjectSection;
