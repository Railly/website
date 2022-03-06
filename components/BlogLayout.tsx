import type { Blog } from ".contentlayer/generated";

type BlogLayoutProps = {
  children: JSX.Element;
  blogPost: Blog;
};

export default function BlogLayout({ children, blogPost }: BlogLayoutProps) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
