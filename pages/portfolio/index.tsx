import { allProjects } from "contentlayer/generated";
import type { Project } from "contentlayer/generated";
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
            <div className="grid px-4 pt-4 pb-2 rounded-2xl grid-cols1-1 bg-zinc-50/95 dark:bg-zinc-800/95 sm:grid-cols-[1fr_2fr]">
              <div>
                <Image
                  className="object-cover rounded-md"
                  src={`/images/${project.image}`}
                  blurDataURL={`/images/${project.image}`}
                  placeholder="blur"
                  alt={project.title}
                  width={1764}
                  height={1131}
                />
              </div>
              <div className="flex flex-col justify-between pb-2 mt-2 ml-4 sm:mt-0">
                <div>
                  <h3 className="mb-2 pb-1.5 text-lg font-bold border-b border-black/20 dark:border-white/30 h-fit">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-base dark:text-white">
                    {project.summary}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p
                    className={`px-2 py-0.5 w-max rounded-lg font-medium text-sm ${
                      tagColors[project.tag]
                    }`}
                  >
                    {project.tag}
                  </p>
                  <span className="text-sm place-self-end dark:text-white">
                    {format(new Date(project.publishedAt), "MMMM dd, yyyy")}
                  </span>
                </div>
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
