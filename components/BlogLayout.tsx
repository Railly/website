import type { Blog } from "contentlayer/generated";
import { format } from "date-fns";
import Head from "next/head";
import Image from "next/image";
import { links } from "pages/about";
import Dropdown from "./Dropdown";

type BlogLayoutProps = {
  children: JSX.Element;
  blogPost: Blog;
};

export default function BlogLayout({ children, blogPost }: BlogLayoutProps) {
  const date = format(new Date(blogPost.publishedAt), "MMMM dd, y");
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
          <div className="flex items-center">
            <div className="flex">
              <Image
                className="rounded-full"
                src="/images/profile.png"
                alt="A profile photo of Railly Hugo"
                blurDataURL="/images/profile.png"
                placeholder="blur"
                width={40}
                height={40}
              />
            </div>
            <div className="flex items-center gap-3 ml-3 text-base">
              <span>Railly Hugo</span>
              <span className="text-lg opacity-50">/</span>
              <span>
                {format(new Date(blogPost.publishedAt), "MMMM dd, yyyy")}
              </span>
              <span className="text-lg opacity-50">/</span>
              <span>{blogPost.readingTime.text}</span>
            </div>
          </div>
        </section>
        <div className="text-base dark:text-white/80">{children}</div>
      </main>
    </>
  );
}
