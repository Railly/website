import useSWR from "swr";
import { SWRConfiguration } from "swr/_internal";

async function getPostViews(slug: string): Promise<number> {
  const res = await fetch("/api/views" + `/${slug}`);
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res.json();
}
async function updatePostViews(slug: string): Promise<number> {
  const res = await fetch("/api/views" + `/${slug}`, { method: "POST" });
  if (!res.ok) {
    throw new Error("An error occurred while posting the data.");
  }
  return res.json();
}

export const usePostViews = (slug: string, config?: SWRConfiguration) => {
  const {
    data: views,
    error,
    isLoading,
    mutate,
  } = useSWR<number>(["/api/views", slug], () => getPostViews(slug), {
    dedupingInterval: 60000,
    ...config,
  });

  const increment = () => {
    mutate(
      updatePostViews(slug).catch((e) => {
        console.error(e);
        return 0;
      })
    );
  };

  return {
    views,
    error,
    isLoading,
    increment,
  };
};
