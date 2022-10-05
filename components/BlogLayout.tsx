import type { Blog } from ".contentlayer/generated";
import { format } from "date-fns";
import Head from "next/head";
import Image from "next/image";

type BlogLayoutProps = {
  children: JSX.Element;
  blogPost: Blog;
};

export default function BlogLayout({ children, blogPost }: BlogLayoutProps) {
  return (
    <>
      <Head>
        <title>{blogPost.title}</title>
        <meta name="description" content={blogPost.summary} />
        <meta property="og:title" content={blogPost.title} />
        <meta property="og:description" content={blogPost.summary} />
        <meta property="og:image" content={blogPost.image} />
        <meta
          property="og:url"
          content={`https://raillyhugo.com/blog/${blogPost.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Railly Hugo" />
      </Head>
      <main className="p-2 pb-10 bg-white dark:bg-black">
        <section className="pb-3 mb-3 border-b border-white/30">
          <h1 className="text-2xl font-bold md:text-3xl ">{blogPost.title}</h1>
          <div className="flex items-center mt-4">
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
            <div className="flex flex-col ml-2">
              <span className="text-base">Railly Hugo</span>
              <span className="text-sm">Frontend Developer</span>
            </div>
          </div>
          <p className="mt-4 text-sm">
            Posted on{" "}
            <span className="underline underline-offset-4 decoration-dotted">
              {format(new Date(blogPost.publishedAt), "MMMM dd, yyyy")}
            </span>
            {" • "}
            {blogPost.readingTime.text}
          </p>
        </section>
        <hr className="dark:opacity-10" />
        <div className="text-base">{children}</div>
      </main>
    </>
  );
}
