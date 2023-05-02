import kv from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";
import projectsData from "../../projects.json";
import { getSortByPublishAt, getViewCount } from "../../../utils/helpers";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const sort = url.searchParams.get("sort");
  const limit = url.searchParams.get("limit");

  const views = await kv.hgetall<{
    [key: string]: number;
  }>("views");

  const limitedProjects = limit
    ? projectsData.projects.slice(0, Number(limit))
    : projectsData.projects;

  const sortFunction = getSortByPublishAt(sort);
  const sortedProjects = sort
    ? limitedProjects.sort(sortFunction)
    : limitedProjects;

  const projects = await Promise.all(
    sortedProjects.map(async (project) => {
      const viewsCount = await getViewCount(views, project.slug);
      return {
        ...project,
        views: viewsCount,
      };
    })
  );

  return NextResponse.json(projects);
}
