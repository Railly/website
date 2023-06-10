import kv from "@vercel/kv";
import projectsData from "../projects.json";
import { getSortByPublishAt, getViewCount } from "../../utils/helpers";

interface IGetProjects {
  sort?: "asc" | "desc" | null;
  limit?: number | false | null;
}

export const getProjects = async ({
  sort = "desc",
  limit = 3,
}: IGetProjects = {}) => {
  try {
    const views = await kv.hgetall<{
      [key: string]: number;
    }>("views");

    if (!views) return projectsData.projects;

    const sorter = getSortByPublishAt(sort);
    const sortedProjects = projectsData.projects.sort(sorter);

    const limitedProjects = limit
      ? sortedProjects.slice(0, limit)
      : sortedProjects;

    const projects = await Promise.all(
      limitedProjects.map(async (post) => {
        const viewsCount = await getViewCount(views, post.slug);
        return {
          ...post,
          views: viewsCount,
        };
      })
    );
    return projects;
  } catch (err) {
    console.error(err);
    return projectsData.projects;
  }
};
