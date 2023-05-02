import BlogSection from "@/components/sections/blog-section";
import ProjectSection from "@/components/sections/project-section";
import FeaturedSection from "@/components/sections/featured-section";
import MainSection from "@/components/sections/main-section";

async function getBlogPosts() {
  const blogPosts = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/posts?limit=3&sort=desc`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
  return blogPosts;
}

async function getProjects() {
  const projects = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/projects?limit=3&sort=desc`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
  return projects;
}

export default async function Home() {
  const blogPosts = await getBlogPosts();
  const projects = await getProjects();

  return (
    <>
      <MainSection />
      <FeaturedSection />
      <BlogSection blogPosts={blogPosts} />
      <ProjectSection projects={projects} />
    </>
  );
}
