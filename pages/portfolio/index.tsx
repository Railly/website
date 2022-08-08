import { allProjects } from ".contentlayer/generated";
import type { Project } from ".contentlayer/generated";
import { format } from "date-fns";
import { useRouter } from "next/router";
import Image from "next/image";
import { tagColors } from "utils/styles";

export default function Portfolio({ projects }: { projects: Project[] }) {
  const router = useRouter();
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold sm:text-3xl">Portfolio</h1>
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <article
            key={project.slug}
            onClick={() => router.push(`/portfolio/${project.slug}`)}
            className="flex cursor-pointer flex-col  bg-gradient-to-tl hover:scale-[1.02] duration-300 shadow-md shadow-slate-600/10 rounded-2xl dark:shadow-gray-400/10"
          >
            <div className="grid grid-cols-1 p-4 rounded-2xl sm:grid-cols-2 bg-zinc-50/95 dark:bg-zinc-800/95">
              <Image
                className="object-cover"
                src={`/images/${project.image}`}
                blurDataURL={`/images/${project.image}`}
                placeholder="blur"
                alt={project.title}
                width={1764 / 5.5}
                height={1131 / 5.5}
              />
              <div className="flex flex-col justify-between mt-4 ml-4 sm:mt-0">
                <h3 className="mb-2 text-lg font-medium h-fit sm:text-xl ">
                  {project.title}
                </h3>
                <p
                  className={`mb-2 px-2 py-0.5 w-max rounded-lg font-medium text-sm ${
                    tagColors[project.tag]
                  }`}
                >
                  {project.tag}
                </p>
                <p className="mb-2 text-base dark:text-white">
                  {project.summary}
                </p>
                <span className="mb-2 text-sm place-self-end dark:text-white">
                  {format(new Date(project.publishedAt), "MMMM dd, yyyy")}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const projects = allProjects.sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt)
  );

  return {
    props: {
      projects,
    },
  };
}
