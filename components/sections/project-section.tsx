import { Project } from "@/.contentlayer/generated";
import ProjectCard from "../cards/project-card";
import LinkWithArrow from "../links/link-with-arrow";

interface IProjectSectionProps {
  projects: Partial<Project>[];
}

const ProjectSection = ({
  projects,
}: React.PropsWithChildren<IProjectSectionProps>) => {
  return (
    <section className="mt-6 md:mt-8">
      <h2 className="mb-4 text-xl font-medium sm:text-2xl">Latest projects</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
        <LinkWithArrow color="rose" href="/portfolio">
          See all projects
        </LinkWithArrow>
      </div>
    </section>
  );
};

export default ProjectSection;
