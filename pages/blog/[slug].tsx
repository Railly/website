import { allBlogs } from "@/contentlayer/generated";
import type { Blog } from "@/contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "components/MDXComponents";
import BlogLayout from "components/BlogLayout";

export default function Post({ blogPost }: { blogPost: Blog }) {
  const Component = useMDXComponent(blogPost.body.code);

  return (
    <BlogLayout blogPost={blogPost}>
      <Component components={MDXComponents} />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const blogPost = allBlogs.find((blogPost) => blogPost.slug === params?.slug);

  return { props: { blogPost } };
}
