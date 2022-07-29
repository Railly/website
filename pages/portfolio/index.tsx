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
      <h1 className="mb-4 text-xl font-semibold sm:text-3xl">Portfolio</h1>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <article
            key={project.slug}
            onClick={() => router.push(`/portfolio/${project.slug}`)}
            className="flex cursor-pointer flex-col  bg-gradient-to-tl hover:scale-[1.02] duration-300 from-rose-500 to-amber-500 rounded-xl"
          >
            <div className="grid h-full grid-cols-1 p-4 rounded-lg sm:grid-cols-2 bg-zinc-50/95 dark:bg-zinc-800/95">
              <Image
                src={`/images/${project.image}`}
                blurDataURL={`/images/${project.image}`}
                placeholder="blur"
                alt={project.title}
                objectFit="cover"
                width={1764 / 5.5}
                height={1131 / 5.5}
              />
              <div className="mt-4 ml-4 sm:mt-0">
                <h3 className="mb-2 text-lg font-bold sm:text-xl ">
                  {project.title}
                </h3>
                <p className="mb-2 dark:text-white">{project.summary}</p>
                <p
                  className={`mb-2 px-3 py-1 w-max rounded-lg font-medium text-zinc-50 ${
                    tagColors[project.tag]
                  }`}
                >
                  {project.tag}
                </p>
                <span className="mb-2 dark:text-white">
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
