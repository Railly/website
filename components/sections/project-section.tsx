import { IProject } from "@/types/interfaces";
import ProjectCard from "../cards/project-card";
import LinkWithArrow from "../links/link-with-arrow";
import CrafterCard from "../cards/crafter-card";
import { cn } from "@/lib/utils";

interface IProjectSectionProps {
  projects: Partial<IProject>[];
  isPage?: boolean;
  limit?: number;
}

const ProjectSection = ({
  projects,
  isPage = false,
  limit,
}: React.PropsWithChildren<IProjectSectionProps>) => {
  return (
    <section className="w-full mt-4 md:mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold sm:text-2xl">Projects</h2>
        {!isPage && (
          <LinkWithArrow color="green" href="/projects">
            See all projects
          </LinkWithArrow>
        )}
      </div>
      <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-y-4  sm:gap-4 mb-4"
        , {
          "grid-rows-[repeat(7,minmax(auto,170px))] sm:grid-rows-[repeat(7,minmax(auto,195px))] md:grid-rows-[repeat(4,minmax(auto,195px))]": limit === 3,
          "grid-rows-[repeat(25,minmax(auto,170px))] sm:grid-rows-[repeat(25,minmax(auto,195px))] md:grid-rows-[repeat(13,minmax(auto,210px))]": limit !== 3,
        }
      )}>
        <CrafterCard />
        {projects
          .sort((a, b) => {
            if (a.isFeatured && !b.isFeatured) return -1;
            if (!a.isFeatured && b.isFeatured) return 1;
            return 0;
          })
          .map((project, index) => {
            if (project.isFeatured) {
              return (
                <ProjectCard
                  className="row-span-2 col-span-2 sm:col-span-1"
                  key={project.title}
                  title={project.title as string}
                  description={project.description as string}
                  summary={project.summary as string}
                  logoUrl={project.logoUrl as string}
                  linkRepository={`https://github.com/Railly/${project.slug}`}
                  repoName={project.repoName as string}
                  linkDemo={project.demo}
                  stack={project.stack as string[]}
                >
                </ProjectCard>
              );
            }
            return (
              <ProjectCard
                className="row-span-2 col-span-2 sm:col-span-1"
                key={project.title}
                title={project.title as string}
                description={project.description as string}
                summary={project.summary as string}
                logoUrl={project.logoUrl as string}
                linkRepository={`https://github.com/Railly/${project.slug}`}
                repoName={project.repoName as string}
                linkDemo={project.demo}
                stack={project.stack as string[]}
              >
              </ProjectCard>
            )
          })
        }
      </div>
    </section>
  );
};

export default ProjectSection;
