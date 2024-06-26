"use client";
import Image from "next/image";
import { format, formatDistance, parseISO } from "date-fns";
import { useSelectedLayoutSegments } from "next/navigation";
import { useEffect, useRef } from "react";
import useSWR from "swr";
import { IBlog } from "@/types/interfaces";
import NoisyCard from "@/components/cards/noisy-card";
import { useTheme } from "@wits/next-themes";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function BlogHeader({ blogPosts }: { blogPosts: IBlog[] }) {
  const segments = useSelectedLayoutSegments();
  const { theme } = useTheme();
  const initialPost = blogPosts.find(
    (blogPost) => blogPost.slug === segments[segments.length - 1]
  );
  const { data: blogPost, mutate } = useSWR(
    `/api/views?type=blog&id=${initialPost?.slug ?? ""}`,
    fetcher,
    {
      fallbackData: initialPost,
      refreshInterval: 5000,
    }
  );

  const borderColor =
    theme === "dark" ? blogPost?.color + "cc" : blogPost?.color + "55";

  if (initialPost == null) return <></>;

  return (
    <NoisyCard
      style={{
        borderColor,
      }}
      className="mb-6 gap-3 flex flex-col"
    >
      <h1 className="text-3xl !mb-2 font-bold text-center md:text-4xl tracking-[-1.2px] !leading-10 !text-foreground-contrast">
        {blogPost.title}
      </h1>
      <p className="m-0 text-base text-center text-foreground/80">
        {blogPost.summary}
      </p>
      <div className="flex items-center gap-3 text-base h-20">
        <Image
          className="rounded-full"
          src="/images/profile-2023.png"
          alt="A profile photo of Railly Hugo"
          blurDataURL="/images/profile-2023.png"
          placeholder="blur"
          quality={100}
          width={55}
          height={55}
        />
        <div className="flex justify-between w-full">
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
        <span className="pr-1.5 flex justify-end items-center">
          <Views
            id={blogPost.slug}
            mutate={mutate}
            defaultValue={blogPost.views}
          />
        </span>
      </div>
    </NoisyCard>
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
      const url = "/api/views?type=blog&incr=1&id=" + encodeURIComponent(id);
      fetch(url)
        .then((res) => res.json())
        .then((obj) => {
          mutate(obj);
        })
        .catch(console.error);
      didLogViewRef.current = true;
    }
  });

  return (
    <>{views != null ? <span className="w-[7ch]">{views} views</span> : null}</>
  );
}
