import kv from "@vercel/kv";

type TWithPublishedAt = {
  publishedAt: string;
};

export async function getViewCount(
  views: { [key: string]: number } | null,
  slug: string
) {
  if (!views) return new Error("No views found");
  if (views.hasOwnProperty(slug)) {
    return views[slug];
  }

  views[slug] = 0;
  await kv.hset("views", views);

  return 0;
}

export const getSortByPublishAt = (sort: "asc" | "desc" | null | undefined) => {
  if (sort === "asc") {
    return (a: TWithPublishedAt, b: TWithPublishedAt) =>
      new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
  }
  return (a: TWithPublishedAt, b: TWithPublishedAt) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
};
