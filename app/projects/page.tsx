import ProjectSection from "@/components/sections/project-section";
import { getProjects } from "@/lib/api/get-projects";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Projects",
  description: "A curated list of projects I've worked on, both personal and professional.",
  openGraph: {
    siteName: "Railly Hugo | Projects",
    description: "A curated list of projects I've worked on, both personal and professional.",
    images: [
      {
        url: `https://raillyhugo.com/api/og?title=${encodeURIComponent(
          "Railly Hugo | Projects"
        )}&color=${encodeURIComponent("B8B8B8")}`,
      },
    ],
  },
}

export default async function Projects() {
  const projects = await getProjects({
    limit: false,
  });
  return <ProjectSection projects={projects} isPage />;
}
