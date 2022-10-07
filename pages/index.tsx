import Image from "next/image";
import Link from "next/link";
import { allProjects } from "contentlayer/generated";
import { allBlogs } from "contentlayer/generated";
import type { Project, Blog } from "contentlayer/generated";
import { pick } from "@contentlayer/client";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { Icon } from "icons";
import RHProfile from "components/RHProfile";

export default function Home({
  blogPosts,
  projects,
}: {
  blogPosts: Blog[];
  projects: Project[];
}) {
  const router = useRouter();
  return (
    <>
      <section className="flex flex-col-reverse items-center p-2 sm:flex-row">
        <div className="grid flex-1 mt-4 sm:mr-4 grid-row-3 sm:mt-0">
          <h1 className="mb-3 text-3xl font-semibold sm:text-4xl ">
            Railly Hugo
          </h1>
          <p className="flex items-center">
            <span className="mr-2 text-lg font-bold">
              Frontend Developer at ID BI
            </span>
            <Image
              className="rounded-md"
              src="/images/id-logo.jpg"
              alt="ID BI Logo"
              width={20}
              height={20}
            />
          </p>
          <p className="mt-3 text-base bg-white dark:bg-[#121116] ">
            Hi, welcome to my digital space. Here I share my side projects,
            tutorials & what I learn over time. I am looking to grow my career
            in tech 🚀
          </p>
        </div>
        <RHProfile />
      </section>
      <section className="mt-6 md:mt-8">
        <h2 className="mb-6 text-xl font-medium sm:text-2xl">Latest posts</h2>
        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
          {blogPosts.map((blog) => (
            <div
              key={blog.slug}
              onClick={() => router.push(`/blog/${blog.slug}`)}
              className="flex flex-col p-1 transition cursor-pointer hover:scale-[1.02] duration-300 bg-gradient-to-tl from-cyan-500 to-indigo-500 rounded-xl"
            >
              <div className="h-full p-4 rounded-lg bg-zinc-50/95 dark:bg-zinc-800/95">
                <h3 className="mb-2 font-medium text-md sm:text-lg ">
                  {blog.title}
                </h3>
                <p className="mb-2 text-base dark:text-white">
                  {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
                </p>
              </div>
            </div>
          ))}
          <Link href="/blog">
            <a className="flex items-center pl-2 text-base font-medium transition w-fit hover:text-indigo-500 dark:hover:text-cyan-500 group">
              <span>See all posts</span>
              <Icon.Arrow className="ml-2 transition duration-300 fill-indigo-500 dark:fill-cyan-500 group-hover:translate-x-2" />
            </a>
          </Link>
        </div>
      </section>
      <section className="mt-6 md:mt-8">
        <h2 className="mb-6 text-xl font-medium sm:text-2xl">
          Latest projects
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.slug}
              onClick={() => router.push(`/portfolio/${project.slug}`)}
              className="flex cursor-pointer flex-col p-1 bg-gradient-to-tl hover:scale-[1.02] duration-300 from-rose-500 to-amber-500 rounded-xl"
            >
              <div className="h-full p-4 rounded-lg bg-zinc-50/95 dark:bg-zinc-800/95">
                <h3 className="mb-2 font-medium text-md sm:text-lg ">
                  {project.title}
                </h3>
                <p className="mb-2 text-base dark:text-white">
                  {format(new Date(project.publishedAt), "MMMM dd, yyyy")}
                </p>
              </div>
            </div>
          ))}
          <Link href="/portfolio">
            <a className="flex items-center pl-2 text-base font-medium transition w-fit hover:text-amber-500 dark:hover:text-rose-400 group">
              <span>See all projects</span>
              <Icon.Arrow className="ml-2 transition duration-300 fill-amber-500 dark:fill-rose-400 group-hover:translate-x-2" />
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const projects = allProjects
    .map((post) =>
      pick(post, [
        "title",
        "slug",
        "summary",
        "publishedAt",
        "readingTime",
        "tag",
      ])
    )
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, 3);

  const blogPosts = allBlogs
    .map((post) =>
      pick(post, ["title", "slug", "summary", "publishedAt", "readingTime"])
    )
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, 3);

  return {
    props: {
      projects,
      blogPosts,
    },
  };
}
