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
      </Head>
      <main className="pb-10 bg-white/10 dark:bg-[#141318] backdrop-blur-sm">
        <section className="pb-6 mb-2 border-b border-black/10 dark:border-white/30">
          <p className="mt-2 mb-2 text-sm text-center">
            <span>
              {format(new Date(blogPost.publishedAt), "MMMM dd, yyyy")}
            </span>
            {" • "}
            {blogPost.readingTime.text}
          </p>
          <h1 className="text-3xl font-bold text-center md:text-4xl ">
            {blogPost.title}
          </h1>
          <p className="pb-4 mt-3 text-base text-center text-zinc-800/60 dark:text-white/60 font-dm">
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
            <div className="flex items-center gap-4">
              <div className="flex flex-col ml-2">
                <span className="text-base">Railly Hugo</span>
                <span className="text-sm">Frontend Developer</span>
              </div>
              <Dropdown options={links} />
            </div>
          </div>
        </section>
        <div className="text-base dark:text-white/80">{children}</div>
      </main>
    </>
  );
}
