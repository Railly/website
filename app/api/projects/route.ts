import kv from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";
import { getSortByPublishAt, getViewCount } from "../../../utils/helpers";
import { IProject } from "@/types/interfaces";
import axios from "axios";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const sort = url.searchParams.get("sort");
  const limit = url.searchParams.get("limit");
  const response = await axios.get<{
    projects: IProject[];
  }>(`${req.nextUrl.origin}/json/projects.json`);

  const views = await kv.hgetall<{
    [key: string]: number;
  }>("views");

  const limitedProjects = limit
    ? response.data.projects.slice(0, Number(limit))
    : response.data.projects;

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
