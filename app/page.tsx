import { Metadata } from "next";
import { format } from "date-fns";
import { allProjects, allBlogs } from "contentlayer/generated";
import { pick } from "@contentlayer/client";
import RHProfile from "components/RHProfile";
import Image from "next/image";
import { Icon } from "icons";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const date = format(new Date(), "MMMM dd, y");
  return {
    title: "Railly Hugo",
    openGraph: {
      url: "https://raillyhugo.com",
      title: "Railly Hugo",
      description:
        "Hi, welcome to my digital space. Here I share my side projects, tutorials & what I learn over time. I am looking to grow my career in tech 🚀",
      siteName: "Railly Hugo",
      type: "website",
      images: [
        {
          url: `https://raillyhugo.com/api/og?title=Railly Hugo - Home&date=${date}`,
        },
      ],
    },
  };
}

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
      <section className="flex flex-col-reverse items-center p-4 mt-2 border rounded-lg sm:flex-row border-hunter-blue-700 bg-hunter-blue-100/80 dark:bg-hunter-blue-900/30">
        <RHProfile />
        <div className="grid flex-1 mt-2 sm:ml-4 grid-row-3 sm:mt-0">
          <h1 className="mb-3 text-3xl font-semibold sm:text-4xl ">
            Railly Hugo
          </h1>
          <p className="flex items-center gap-2 ml-1">
            <span className="text-lg font-bold ">UI Developer at PCI</span>
            <Image
              className="rounded-lg no-drag"
              src="/images/pci-logo.png"
              alt="PCI Energy Solutions Logo"
              width={30}
              height={30}
            />
          </p>
          <p className="mt-3 ml-1 text-base">
            Hi, welcome to my digital space. Here I share about my professional
            life, side projects, tutorials & what I learn over time. Hope you
            enjoy your stay 🚀.
          </p>
        </div>
      </section>
      <section className="mt-6">
        <h2 className="mb-4 text-xl font-medium sm:text-2xl">Featured</h2>
        <div className="grid w-full grid-cols-1 gap-6 mb-4 md:grid-cols-2 place-items-center">
          <div className="flex flex-col h-full gap-2 p-4 border rounded-lg border-rose-900 bg-rose-100/80 dark:bg-rose-900/30">
            <div className="flex items-center gap-2">
              <Image
                className="border-2 rounded-full border-white/50"
                src="/images/one-hunter-logo.png"
                alt="One Hunter Theme Logo"
                width={45}
                height={45}
              />
              <h3 className="text-lg font-medium sm:text-xl ">
                One Hunter Theme
              </h3>
            </div>
            <p className="mb-2 text-base">
              A VSCode theme inspired by Vercel Theme ▲ and One Dark Pro 🎨.
            </p>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=RaillyHugo.one-hunter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-hunter-blue-500"
            >
              <Icon.VSCode width={20} height={20} />
              <span>Visual Studio Code</span>
            </a>
            <p className="flex items-center justify-center h-full gap-4">
              <a href="https://github.com/Railly/one-hunter-vscode/stargazers">
                <img src="https://img.shields.io/github/stars/Railly/one-hunter-vscode?colorA=363a4f&colorB=f9c35a&style=for-the-badge" />
              </a>
              <a href="https://marketplace.visualstudio.com/items?itemName=RaillyHugo.one-hunter">
                <img src="https://img.shields.io/visual-studio-marketplace/azure-devops/installs/total/RaillyHugo.one-hunter?colorA=363a4f&colorB=5BDfff&style=for-the-badge" />
              </a>
            </p>
          </div>
          <div>
            <Image
              className="border rounded-lg borde-white"
              src="/svg/one-hunter-theme.svg"
              alt="One Hunter Theme"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
      <section className="mt-6 md:mt-8">
        <h2 className="mb-4 text-xl font-medium sm:text-2xl">Latest posts</h2>
        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
          {blogPosts.map((blog) => (
            <div
              key={blog.slug}
              className="flex flex-col p-1 transition cursor-pointer hover:scale-[1.02] duration-300 bg-hunter-green-100/80 dark:bg-hunter-green-900/30 border rounded-lg border-hunter-green-700"
            >
              <div className="h-full p-4 rounded-lg">
                <h3 className="mb-2 font-medium text-md sm:text-lg ">
                  {blog.title}
                </h3>
                <p className="mb-2 text-base dark:text-white">
                  {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
                </p>
              </div>
            </div>
          ))}
          <Link
            href="/blog"
            className="flex items-center pl-2 text-base font-medium transition w-fit hover:text-indigo-500 dark:hover:text-hunter-blue-500 group"
          >
            <span>See all posts</span>
            <Icon.Arrow className="ml-2 transition duration-300 fill-indigo-500 dark:fill-hunter-blue-500 group-hover:translate-x-2" />
          </Link>
        </div>
      </section>
      <section className="mt-6 md:mt-8">
        <h2 className="mb-4 text-xl font-medium sm:text-2xl">
          Latest projects
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="flex cursor-pointer flex-col p-1 hover:scale-[1.02] duration-300 bg-hunter-yellow-100/80 dark:bg-hunter-yellow-900/30 border rounded-lg border-hunter-yellow-700"
            >
              <div className="h-full p-4 rounded-lg">
                <h3 className="mb-2 font-medium text-md sm:text-lg ">
                  {project.title}
                </h3>
                <p className="mb-2 text-base dark:text-white">
                  {format(new Date(project.publishedAt), "MMMM dd, yyyy")}
                </p>
              </div>
            </div>
          ))}
          <Link
            href="/portfolio"
            className="flex items-center pl-2 text-base font-medium transition w-fit hover:text-amber-500 dark:hover:text-rose-400 group"
          >
            <span>See all projects</span>
            <Icon.Arrow className="ml-2 transition duration-300 fill-amber-500 dark:fill-rose-400 group-hover:translate-x-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
