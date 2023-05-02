import kv from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";
import postsData from "../../posts.json";
import { getSortByPublishAt, getViewCount } from "../../../utils/helpers";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const sort = url.searchParams.get("sort");
  const limit = url.searchParams.get("limit");

  const views = await kv.hgetall<{
    [key: string]: number;
  }>("views");

  if (!views) return NextResponse.json(postsData.posts);

  const limitedPosts = limit
    ? postsData.posts.slice(0, Number(limit))
    : postsData.posts;

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
