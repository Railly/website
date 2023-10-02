import kv from "@vercel/kv";
import { NextResponse, NextRequest } from "next/server";
import blogPostsData from "../../../lib/posts.json";
import projectsData from "../../../lib/projects.json";
import { IBlog, IProject } from "../../../types/interfaces";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (id === null) {
    return NextResponse.json(
      {
        error: {
          message: 'Missing "id" query',
          code: "MISSING_ID",
        },
      },
      { status: 400 }
    );
  }
  const type = searchParams.get("type");
  const incr = searchParams.get("incr");

  let views;
  if (incr) {
    views = await kv.hincrby("views", id, Number(incr));
  } else {
    views = await kv.hget("views", id);
  }

  const allData: any[] =
    type === "blog" ? blogPostsData.posts : projectsData.projects;

  const data = allData.find((item:any) => item.slug === id);

  if (data) {
    data.views = views ? Number(views) : 0;
  } else {
    return NextResponse.json(
      {
        error: {
          message: "Item not found",
          code: "ITEM_NOT_FOUND",
        },
      },
      { status: 404 }
    );
  }
  return NextResponse.json(data);
}
