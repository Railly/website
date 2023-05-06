"use client";
import Image from "next/image";
import { format, formatDistance, parseISO } from "date-fns";
import { useSelectedLayoutSegments } from "next/navigation";
import { useEffect, useRef } from "react";
import useSWR from "swr";
import { IBlog } from "@/types/interfaces";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function BlogHeader({ blogPosts }: { blogPosts: IBlog[] }) {
  const segments = useSelectedLayoutSegments();
  const initialPost = blogPosts.find(
    (blogPost) => blogPost.slug === segments[segments.length - 1]
  );
  const { data: blogPost, mutate } = useSWR(
    `/api/view?id=${initialPost?.slug ?? ""}`,
    fetcher,
    {
      fallbackData: initialPost,
      refreshInterval: 5000,
    }
  );

  if (initialPost == null) return <></>;

  return (
    <section className="mb-6 border-b border-black/10 dark:border-white/10">
      <h1 className="text-3xl font-bold text-center md:text-4xl ">
        {blogPost.title}
      </h1>
      <p className="pb-4 mt-3 text-base text-center text-hunter-black-500 dark:text-hunter-black-300 font-dm">
        {blogPost.summary}
      </p>
      <div className="flex items-center gap-3 text-base">
        <Image
          className="rounded-full"
          src="/images/profile.png"
          alt="A profile photo of Railly Hugo"
          blurDataURL="/images/profile.png"
          placeholder="blur"
          width={55}
          height={55}
        />
        <div className="flex flex-col gap-1 font-mono">
          <span className="text-left">
            <a
              href="https://twitter.com/raillyhugo"
              className="text-[13px] hover:text-gray-800 dark:hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              @raillyhugo
            </a>
          </span>
          <span className="text-[13px]">
            {format(parseISO(blogPost.publishedAt), "MMMM dd, yyyy")} (
            {formatDistance(parseISO(blogPost.publishedAt), new Date())} ago)
          </span>
        </div>
      </div>
      <span className="pr-1.5">
        <Views
          id={blogPost.id}
          mutate={mutate}
          defaultValue={blogPost.viewsFormatted}
        />
      </span>
    </section>
  );
}

function Views({
  id,
  mutate,
  defaultValue,
}: {
  id: string;
  mutate: any;
  defaultValue: string;
}) {
  const views = defaultValue;
  const didLogViewRef = useRef(false);

  useEffect(() => {
    if ("development" === process.env.NODE_ENV) return;
    if (!didLogViewRef.current) {
      const url = "/api/view?incr=1&id=" + encodeURIComponent(id);
      fetch(url)
        .then((res) => res.json())
        .then((obj) => {
          mutate(obj);
        })
        .catch(console.error);
      didLogViewRef.current = true;
    }
  });

  return <>{views != null ? <span>{views} views</span> : null}</>;
}
