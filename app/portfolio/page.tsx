import ProjectSection from "@/components/sections/project-section";
import { getProjects } from "@/lib/api/get-projects";

export default async function Portfolio() {
  const projects = await getProjects({
    limit: false,
  });
  return <ProjectSection projects={projects} isPage />;
}
