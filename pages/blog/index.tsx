import { useState } from "react";
import Head from "next/head";
import { allBlogs } from "contentlayer/generated";
import type { Blog } from "contentlayer/generated";
import { format } from "date-fns";
import ArticleCard from "components/ArticleCard";

export default function Blog({ blogPosts }: { blogPosts: Blog[] }) {
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
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full mb-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white"
            placeholder="Search..."
            id="exampleFormControlInput1"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 gap-6">
          {blogPosts
            .filter((blogPost) =>
              blogPost.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((blogPost) => (
              <ArticleCard key={blogPost.slug} blogPost={blogPost} />
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
