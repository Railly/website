import kv from "@vercel/kv";
import postsData from "../posts.json";
import { getSortByPublishAt, getViewCount } from "../../utils/helpers";

interface IGetBlogPosts {
  sort?: "asc" | "desc" | null;
  limit?: number | false | null;
}

export const getBlogPosts = async ({
  sort = "desc",
  limit = 3,
}: IGetBlogPosts = {}) => {
  try {
    const views = await kv.hgetall<{
      [key: string]: number;
    }>("views");

    if (!views) return postsData.posts;

    const sorter = getSortByPublishAt(sort);

    const sortedPosts = postsData.posts.sort(sorter);

    const limitedPosts = limit
      ? sortedPosts.slice(0, limit)
      : sortedPosts;


    const posts = await Promise.all(
      limitedPosts.map(async (post) => {
        const viewsCount = await getViewCount(views, post.slug);
        return {
          ...post,
          views: viewsCount,
        };
      })
    );
    return posts;
  } catch (err) {
    console.error(err);
    return postsData.posts;
  }
};
