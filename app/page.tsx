import BlogSection from "@/components/sections/blog-section";
import ProjectSection from "@/components/sections/project-section";
import FeaturedSection from "@/components/sections/featured-section";
import MainSection from "@/components/sections/main-section";
import { getBlogPosts } from "@/lib/api/get-blog-posts";
import { getProjects } from "@/lib/api/get-projects";

const LIMIT = 3;

export default async function Home() {
  const blogPosts = await getBlogPosts();
  console.log({
    blogPosts
  })
  const projects = await getProjects({
    limit: LIMIT,
  });

  return (
    <>
      <MainSection />
      <FeaturedSection />
      <BlogSection blogPosts={blogPosts} />
      <ProjectSection projects={projects} limit={LIMIT} />
    </>
  );
}
