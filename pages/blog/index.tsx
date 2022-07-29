import { allBlogs } from ".contentlayer/generated";
import type { Blog } from ".contentlayer/generated";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { tagColors } from "utils/styles";

export default function Blog({ blogPosts }: { blogPosts: Blog[] }) {
  const router = useRouter();
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold sm:text-3xl">Blog</h1>
      <div className="grid grid-cols-1 gap-6">
        {blogPosts.map((blogPost) => (
          <article
            key={blogPost.slug}
            onClick={() => router.push(`/blog/${blogPost.slug}`)}
            className="flex flex-col transition cursor-pointer hover:scale-[1.02] hover:-rotate-1 duration-300 shadow-md shadow-slate-600/10 rounded-2xl dark:shadow-gray-400/10"
          >
            <div className="grid h-full grid-cols-1 p-4 bg-zinc-50/95 dark:bg-zinc-800/95 rounded-2xl">
              <div className="grid ml-4">
                <h3 className="mb-2 text-lg font-medium sm:text-xl ">
                  {blogPost.title}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {blogPost?.tags?.map((tag) => (
                    <p
                      key={tag}
                      className={`mb-2 w-max px-2 py-0.5 rounded-lg text-sm font-medium ${tagColors["Blog"]}`}
                    >
                      {tag}
                    </p>
                  ))}
                </div>
                <p className="mb-2 dark:text-white">{blogPost.summary}</p>
                <span className="mb-2 text-sm place-self-end dark:text-white">
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
