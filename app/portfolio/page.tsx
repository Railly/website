import axios from "@/lib/axios";
import ProjectSection from "@/components/sections/project-section";

async function getProjects() {
  const projects = await axios
    .get("/api/projects?sort=desc")
    .then((res) => res.data)
    .catch((err: any) => console.log(err));
  return projects;
}

export default async function Portfolio() {
  const projects = await getProjects();

  return <ProjectSection projects={projects} isPage />;
}
