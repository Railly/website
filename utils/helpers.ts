import { pick } from "contentlayer/client";
import { Project, Blog } from "../.contentlayer/generated";

export const pickLastNProjects = (allProjects: Project[], n: number) => {
  return allProjects
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
    .slice(0, n);
};

export const pickLastNBlogPosts = (allBlogs: Blog[], n: number) => {
  return allBlogs
    .map((post) =>
      pick(post, ["title", "slug", "summary", "publishedAt", "readingTime"])
    )
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, n);
};
