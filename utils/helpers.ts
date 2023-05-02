import kv from "@vercel/kv";

type TWithPublishedAt = {
  publishedAt: string;
};

export async function getViewCount(
  views: { [key: string]: number } | null,
  slug: string
) {
  if (!views) {
    await kv.hset("views", {
      [slug]: 0,
    });
    return 0;
  }
  if (views.hasOwnProperty(slug)) {
    return views[slug];
  }
}

export const getSortByPublishAt = (sort: string | null) => {
  if (sort === "asc") {
    return (a: TWithPublishedAt, b: TWithPublishedAt) =>
      new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
  }
  return (a: TWithPublishedAt, b: TWithPublishedAt) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
};
