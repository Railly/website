import ProjectSection from "@/components/sections/project-section";

async function getProjects() {
  const blogPosts = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/projects?sort=desc`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
  return blogPosts;
}

export default async function Portfolio() {
  const projects = await getProjects();
  console.log(projects);

  return <ProjectSection projects={projects} isPage />;
}
