import type { Blog } from "contentlayer/generated";
import { format } from "date-fns";
import Head from "next/head";
import Image from "next/image";
import { usePostViews } from "hooks/use-get-post-views";
import { useEffect } from "react";
import EyeIcon from "icons/Eye";

type BlogLayoutProps = {
  children: JSX.Element;
  blogPost: Blog;
};

export default function BlogLayout({ children, blogPost }: BlogLayoutProps) {
  const date = format(new Date(blogPost.publishedAt), "MMMM dd, y");
  const { views, increment, error, isLoading } = usePostViews(blogPost.slug);

  useEffect(() => {
    increment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>{blogPost.title}</title>
        <meta name="description" content={blogPost.summary} />
        <meta property="og:title" content={blogPost.title} />
        <meta property="og:description" content={blogPost.summary} />
        <meta
          property="og:image"
          content={`https://raillyhugo.com/api/og?title=${blogPost.title}&date=${date}`}
        />
        <meta
          property="og:url"
          content={`https://raillyhugo.com/blog/${blogPost.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Railly Hugo" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@raillyhugo" />
        <meta property="twitter:creator" content="@raillyhugo" />
        <meta property="twitter:title" content={blogPost.title} />
        <meta property="twitter:description" content={blogPost.summary} />
        <meta
          property="twitter:image"
          content={`https://raillyhugo.com/api/og?title=${blogPost.title}&date=${date}`}
        />
      </Head>
      <main className="pb-10 backdrop-blur-sm">
        <section className="pb-6 mb-2 border-b border-black/10 dark:border-white/30">
          <h1 className="text-3xl font-bold text-center md:text-4xl ">
            {blogPost.title}
          </h1>
          <p className="pb-4 mt-3 text-base text-center text-hunter-black-500 dark:text-hunter-black-300 font-dm">
            {blogPost.summary}
          </p>
          <div className="flex justify-center pb-4 text-base text-center font-dm">
            <div className="flex items-center gap-2">
              <EyeIcon />
              <span>
                {isLoading && "Loading..."}
                {!isLoading && error && "Error"}
                {!isLoading && !error && `${views} views`}
              </span>
            </div>
            <span className="mx-3">•</span>
            <span>{blogPost.readingTime.text}</span>
          </div>
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
            <div className="flex flex-col gap-1">
              <span>By Railly Hugo</span>
              <span className="text-sm font-dm">
                On {format(new Date(blogPost.publishedAt), "MMMM dd, yyyy")}
              </span>
            </div>
          </div>
        </section>
        <div className="text-base dark:text-white/80">{children}</div>
      </main>
    </>
  );
}
