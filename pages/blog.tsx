import { allBlogs } from ".contentlayer/generated";
import type { Blog } from ".contentlayer/generated";
import { format } from "date-fns";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Blog({ blogPosts }: { blogPosts: Blog[] }) {
  const router = useRouter();
  return (
    <section>
      <h1 className="mb-4 text-xl font-bold sm:text-3xl font-gilmer">Blog</h1>
      <div className="grid grid-cols-1 gap-4">
        {blogPosts.map((blogPost) => (
          <article
            key={blogPost.slug}
            onClick={() => router.push(`/portfolio/${blogPost.slug}`)}
            className="flex flex-col transition cursor-pointer hover:scale-[1.02] duration-300 bg-gradient-to-tl from-cyan-500 to-indigo-500 rounded-xl"
          >
            <div className="grid h-full grid-cols-2 p-4 rounded-lg bg-zinc-50/95 dark:bg-zinc-800/95">
              <Image
                src={`/images/${blogPost.image}`}
                blurDataURL={`/images/${blogPost.image}`}
                placeholder="blur"
                alt={blogPost.title}
                width={1764 / 5.5}
                height={1131 / 5.5}
              />
              <div className="ml-4 ">
                <h3 className="mb-2 text-lg font-bold sm:text-xl font-gilmer">
                  {blogPost.title}
                </h3>
                <p className="mb-2 dark:text-white">{blogPost.summary}</p>
                <span className="mb-2 dark:text-white">
                  {format(new Date(blogPost.publishedAt), "MMMM dd, yyyy")}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
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
