import type { Project } from "@/contentlayer/generated";
import Image from "next/image";
import { format } from "date-fns";
import { tagColors } from "utils/styles";
import Head from "next/head";

type ProjectLayoutProps = {
  children: JSX.Element;
  project: Project;
};

export default function ProjectLayout({
  children,
  project,
}: ProjectLayoutProps) {
  return (
    <>
      <Head>
        <title>{project.title}</title>
        <meta name="description" content={project.summary} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.summary} />
        <meta property="og:image" content={project.image} />
        <meta
          property="og:url"
          content={`https://raillyhugo.com/portfolio/${project.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Railly Hugo" />
      </Head>
      <main>
        <section>
          <p
            className={`mb-4 px-3 py-1 w-max rounded-lg font-medium text-zinc-50 ${
              tagColors[project.tag]
            }`}
          >
            {project.tag}
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl">
            {project.title}
          </h1>
          <div className="flex items-center mt-4">
            <div className="flex">
              <Image
                className="rounded-full"
                src="/images/profile.png"
                alt="A profile photo of Railly Hugo"
                blurDataURL="/images/profile.png"
                placeholder="blur"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col ml-2">
              <span className="text-base">Railly Hugo</span>
              <span className="text-sm">Frontend Developer</span>
            </div>
          </div>
          <p className="mt-4 text-sm">
            Posted on{" "}
            <span className="underline underline-offset-4 decoration-dotted">
              {format(new Date(project.publishedAt), "MMMM dd, yyyy")}
            </span>
            {" • "}
            {project.readingTime.text}
          </p>
        </section>
        <hr className="mt-6 opacity-10" />
        <div className="mt-6">{children}</div>
      </main>
    </>
  );
}
