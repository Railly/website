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

    const limitedPosts = limit
      ? postsData.posts.slice(0, limit)
      : postsData.posts;

    const sorter = getSortByPublishAt(sort);
    const sortedPosts = limitedPosts.sort(sorter);

    const posts = await Promise.all(
      sortedPosts.map(async (post) => {
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
