import { format } from "date-fns";
import { allProjects, allBlogs } from "contentlayer/generated";
import { pick } from "@contentlayer/client";
import IconLogo from "icons";
import Link from "next/link";
import ProfileCard from "@/components/cards/ProfileCard";
import OneHunterCard from "@/components/cards/OneHunterCard";
import { Other } from "@/types/enums";
import DisclaimerCard from "@/components/cards/DisclaimerCard";
import FramerCard from "@/components/FramerCard";

async function getAllProjects() {
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

  return projects;
}

async function getAllBlogs() {
  const blogPosts = allBlogs
    .map((post) =>
      pick(post, ["title", "slug", "summary", "publishedAt", "readingTime"])
    )
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, 3);

  return blogPosts;
}

export default async function Home() {
  const projects = await getAllProjects();
  const blogPosts = await getAllBlogs();

  return (
    <>
      <div className="flex flex-col w-full gap-4 md:flex-row">
        <div className="w-full md:w-2/3">
          <ProfileCard />
        </div>
        <div className="w-full md:w-1/3">
          <DisclaimerCard />
        </div>
      </div>
      <section className="mt-6">
        <h2 className="mb-4 text-xl font-medium sm:text-2xl">Featured</h2>
        <OneHunterCard />
      </section>
      <section className="mt-6 md:mt-8">
        <h2 className="mb-4 text-xl font-medium sm:text-2xl">Latest posts</h2>
        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
          {blogPosts.map((blog) => (
            <FramerCard color="blue" key={blog.slug}>
              <Link href={`/blog/${blog.slug}`} key={blog.slug}>
                <div className="h-full p-4 rounded-lg">
                  <h3 className="mb-2 font-medium text-md sm:text-lg ">
                    {blog.title}
                  </h3>
                  <p className="mb-2 text-base dark:text-white">
                    {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
                  </p>
                </div>
              </Link>
            </FramerCard>
          ))}
          <Link
            href="/blog"
            className="flex items-center pl-2 text-base font-medium transition w-fit hover:text-indigo-500 dark:hover:text-hunter-blue-500 group"
          >
            <span>See all posts</span>
            <IconLogo
              name={Other.Arrow}
              className="ml-2 transition duration-300 fill-indigo-500 dark:fill-hunter-blue-500 group-hover:translate-x-2"
            />
          </Link>
        </div>
      </section>
      <section className="mt-6 md:mt-8">
        <h2 className="mb-4 text-xl font-medium sm:text-2xl">
          Latest projects
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <FramerCard color="teal" key={project.slug}>
              <Link
                className="w-full h-full"
                href={`/portfolio/${project.slug}`}
              >
                <div className="h-full p-4 rounded-lg">
                  <h3 className="mb-2 font-medium text-md sm:text-lg ">
                    {project.title}
                  </h3>
                  <p className="mb-2 text-base dark:text-white">
                    {format(new Date(project.publishedAt), "MMMM dd, yyyy")}
                  </p>
                </div>
              </Link>
            </FramerCard>
          ))}
          <Link
            href="/portfolio"
            className="flex items-center pl-2 text-base font-medium transition w-fit hover:text-amber-500 dark:hover:text-rose-400 group"
          >
            <span>See all projects</span>
            <IconLogo
              name={Other.Arrow}
              className="ml-2 transition duration-300 fill-amber-500 dark:fill-rose-400 group-hover:translate-x-2"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
