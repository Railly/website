import BlogSection from "@/components/sections/blog-section";
import ProjectSection from "@/components/sections/project-section";
import FeaturedSection from "@/components/sections/featured-section";
import MainSection from "@/components/sections/main-section";
import axios from "@/lib/axios";

async function getBlogPosts() {
  const blogPosts = await axios
    .get("/api/posts?limit=3&sort=desc")
    .then((res) => res.data)
    .catch((err: any) => console.log(err));
  return blogPosts;
}

async function getProjects() {
  const projects = await axios
    .get("/api/projects?limit=3&sort=desc")
    .then((res) => res.data)
    .catch((err: any) => console.log(err));

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
