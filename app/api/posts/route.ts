import kv from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";
import { getSortByPublishAt, getViewCount } from "../../../utils/helpers";
import axios from "axios";
import { createCacheHelper } from "swr/_internal";
import { IBlog } from "@/types/interfaces";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const sort = url.searchParams.get("sort");
  const limit = url.searchParams.get("limit");
  const response = await axios.get<{
    posts: IBlog[];
  }>(`${req.nextUrl.origin}/json/posts.json`);

  const views = await kv.hgetall<{
    [key: string]: number;
  }>("views");

  if (!views) return NextResponse.json(response.data.posts);

  const limitedPosts = limit
    ? response.data.posts.slice(0, Number(limit))
    : response.data.posts;

  const sortFunction = getSortByPublishAt(sort);
  const sortedPosts = sort ? limitedPosts.sort(sortFunction) : limitedPosts;

  const posts = await Promise.all(
    sortedPosts.map(async (post) => {
      const viewsCount = await getViewCount(views, post.slug);
      return {
        ...post,
        views: viewsCount,
      };
    })
  );

  return NextResponse.json(posts);
}
