import { useState } from "react";
import Head from "next/head";
import { allBlogs } from "contentlayer/generated";
import type { Blog } from "contentlayer/generated";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { tagColors } from "utils/styles";

export default function Blog({ blogPosts }: { blogPosts: Blog[] }) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const date = format(new Date(), "MMMM dd, y");

  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`https://raillyhugo.com/api/og?title=Railly Hugo - Blog&date=${date}`}
        />
      </Head>
      <section>
        <h1 className="mb-4 text-2xl font-semibold sm:text-3xl">Blog</h1>
        <input
          type="text"
          className="form-control block w-full px-3 py-1.5 font-normal bg-[#141318] bg-clip-padding border border-solid border-[#27262c] rounded transition ease-in-out m-0 focus:bg-[#141318] focus:border-white focus:outline-none mb-2"
          id="exampleFormControlInput1"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="grid grid-cols-1 gap-6">
          {blogPosts
            .filter((blogPost) =>
              search.length > 0
                ? blogPost.title.toLowerCase().includes(search.toLowerCase())
                : true
            )
            .map((blogPost) => (
              <article
                key={blogPost.slug}
                onClick={() => router.push(`/blog/${blogPost.slug}`)}
                className="flex flex-col transition cursor-pointer hover:scale-[1.02] hover:-rotate-1 duration-300 shadow-md shadow-slate-600/10 rounded-2xl dark:shadow-gray-400/10"
              >
                <div className="grid grid-cols-1 px-4 pt-4 pb-2 bg-zinc-50/95 dark:bg-zinc-800/95 rounded-2xl">
                  <div className="grid">
                    <h3 className="pb-1.5 mb-2 text-base font-bold border-b border-black/20 dark:border-white/30">
                      {blogPost.title}
                    </h3>
                    <p className="mb-2 text-base dark:text-white">
                      {blogPost.summary}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-2">
                      {blogPost?.tags?.map((tag, index) => (
                        <p
                          key={`${tag}-${index}`}
                          className={`mb-2 w-max px-2 py-0.5 rounded-lg text-sm font-medium ${tagColors["Blog"]}`}
                        >
                          {tag}
                        </p>
                      ))}
                      <span className="mb-2 text-sm place-self-end dark:text-white/70">
                        {format(
                          new Date(blogPost.publishedAt),
                          "MMMM dd, yyyy"
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const blogPosts = allBlogs.sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt)
  );

  return {
    props: {
      blogPosts,
    },
  };
}
