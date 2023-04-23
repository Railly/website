import { allBlogs, allProjects } from "contentlayer/generated";
import { pickLastNBlogPosts, pickLastNProjects } from "@/utils/helpers";
import BlogSection from "@/components/sections/blog-section";
import ProjectSection from "@/components/sections/project-section";
import FeaturedSection from "@/components/sections/featured-section";
import MainSection from "@/components/sections/main-section";

async function getProjects() {
  const projects = pickLastNProjects(allProjects, 3);
  return projects;
}

async function getBlogs() {
  const blogPosts = pickLastNBlogPosts(allBlogs, 3);
  return blogPosts;
}

export default async function Home() {
  const projects = await getProjects();
  const blogPosts = await getBlogs();

  return (
    <main>
      <MainSection />
      <FeaturedSection />
      <BlogSection blogPosts={blogPosts} />
      <ProjectSection projects={projects} />
    </main>
  );
}
