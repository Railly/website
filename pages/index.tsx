import Image from "next/image";
import Link from "next/link";
import { allProjects } from "@/contentlayer/generated";
import { allBlogs } from "@/contentlayer/generated";
import type { Project, Blog } from "@/contentlayer/generated";
import { pick } from "@contentlayer/client";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { Icon } from "icons";
import RHProfile from "components/RHProfile";
import Head from "next/head";

export default function Home({
  blogPosts,
  projects,
}: {
  blogPosts: Blog[];
  projects: Project[];
}) {
  const router = useRouter();
  const date = format(new Date(), "MMMM dd, y");
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`https://raillyhugo.com/api/og?title=Railly Hugo - Home&date=${date}`}
        />
      </Head>
      <section className="flex flex-col-reverse items-center sm:flex-row">
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
          <p className="mt-3 text-base">
            Hi, welcome to my digital space. Here I share my side projects,
            tutorials & what I learn over time. I am looking to grow my career
            in tech 🚀
          </p>
        </div>
        <RHProfile />
      </section>
      <section className="mt-6">
        <h2 className="mb-4 text-xl font-medium sm:text-2xl">Featured</h2>
        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 place-items-center">
          <div className="flex flex-col gap-2 p-4 border rounded-lg">
            <div className="flex items-center gap-2">
              <Image
                className="border-2 rounded-full border-white/50"
                src="/images/one-hunter-logo.png"
                alt="One Hunter Theme Logo"
                width={45}
                height={45}
              />
              <h3 className="mb-2 text-lg font-medium sm:text-xl ">
                One Hunter Theme
              </h3>
            </div>
            <p className="mb-2 text-base text-white">
              A VSCode theme inspired by Vercel Theme ▲ and One Dark Pro 🎨.
            </p>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=RaillyHugo.one-hunter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors text-white/80 hover:text-hunter-blue-500"
            >
              <Icon.VSCode width={20} height={20} />
              <span>Visual Studio Code</span>
            </a>
          </div>
          <a
            href="https://www.producthunt.com/posts/one-hunter-theme?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-one&#0045;hunter&#0045;theme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=372679&theme=light"
              alt="One&#0032;Hunter&#0032;Theme - VSCode&#0032;theme&#0032;inspired&#0032;by&#0032;Vercel&#0032;Theme&#0032;▲&#0032;and&#0032;One&#0032;Dark&#0032;Pro&#0032;🎨 | Product Hunt"
              width={250}
              height={54}
            />
          </a>
        </div>
      </section>
      <section className="mt-6 md:mt-8">
        <h2 className="mb-6 text-xl font-medium sm:text-2xl">Latest posts</h2>
        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
          {blogPosts.map((blog) => (
            <div
              key={blog.slug}
              onClick={() => router.push(`/blog/${blog.slug}`)}
              className="flex flex-col p-1 transition cursor-pointer hover:scale-[1.02] duration-300 bg-gradient-to-tl from-hunter-rose-500 to-hunter-blue-500 rounded-xl"
            >
              <div className="h-full p-4 rounded-lg bg-hunter-black-800/95">
                <h3 className="mb-2 font-medium text-md sm:text-lg ">
                  {blog.title}
                </h3>
                <p className="mb-2 text-base text-white">
                  {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
                </p>
              </div>
            </div>
          ))}
          <Link
            href="/blog"
            className="flex items-center pl-2 text-base font-medium transition w-fit hover:text-hunter-rose-500 group"
          >
            <span>See all posts</span>
            <Icon.Arrow className="ml-2 transition duration-300 fill-hunter-rose-500 group-hover:translate-x-2" />
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
              className="flex cursor-pointer flex-col p-1 bg-gradient-to-tl hover:scale-[1.02] duration-300 from-hunter-green-500 to-hunter-yellow-300 rounded-xl"
            >
              <div className="h-full p-4 rounded-lg bg-hunter-black-800/95">
                <h3 className="mb-2 font-medium text-md sm:text-lg ">
                  {project.title}
                </h3>
                <p className="mb-2 text-base text-white">
                  {format(new Date(project.publishedAt), "MMMM dd, yyyy")}
                </p>
              </div>
            </div>
          ))}
          <Link
            href="/portfolio"
            className="flex items-center pl-2 text-base font-medium transition w-fit hover:text-hunter-rose-400 group"
          >
            <span>See all projects</span>
            <Icon.Arrow className="ml-2 transition duration-300 fill-hunter-rose-400 group-hover:translate-x-2" />
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
