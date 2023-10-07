import { ProjectHeader } from "./header";
import { getProjects } from "@/lib/api/get-projects";

export const revalidate = 60;

export default async function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projects = await getProjects({
    limit: false,
  });

  return (
    <article className="mb-10 text-gray-800 dark:text-gray-300">
      <ProjectHeader projects={projects as any} />
      {children}
    </article>
  );
}
