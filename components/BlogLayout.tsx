import type { Blog } from ".contentlayer/generated";
import { format } from "date-fns";
import Image from "next/image";

type BlogLayoutProps = {
  children: JSX.Element;
  blogPost: Blog;
};

export default function BlogLayout({ children, blogPost }: BlogLayoutProps) {
  console.log("BlogLayout", blogPost);
  return (
    <>
      <main>
        <section>
          <h1 className="text-3xl font-bold md:text-4xl ">{blogPost.title}</h1>
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
          <p className="mt-4">
            Posted on{" "}
            <span className="underline underline-offset-2 decoration-dotted">
              {format(new Date(blogPost.publishedAt), "MMMM dd, yyyy")}
            </span>
            • {blogPost.readingTime.text}
          </p>
        </section>
        <hr className="mt-6 dark:opacity-10" />
        <div className="mt-6">{children}</div>
      </main>
    </>
  );
}
