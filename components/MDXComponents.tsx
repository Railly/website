import Link from "next/link";
import Image from "next/image";
import Md from "components/markdown";

const CustomLink = (props: any) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  return (
    <a
      className="font-medium underline transition text-hunter-blue-700 dark:text-hunter-blue-500 underline-offset-2 dark:hover:text-hunter-blue-400 hover:text-hunter-blue-600"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {props.children}
    </a>
  );
};

function RoundedImage(props: any) {
  return (
    <>
      <div className="my-4 rounded-lg shadow-xl">
        <Image
          className="rounded-lg shadow-xl"
          blurDataURL={props.src}
          placeholder="blur"
          alt={props.alt}
          {...props}
        />
      </div>
      {props.alt && (
        <div className="text-sm text-center text-gray-500 dark:text-gray-400">
          {props.alt}
        </div>
      )}
    </>
  );
}

const MDXComponents = {
  Anchor: Md.Anchor,
  Image: RoundedImage,
  a: CustomLink,
  hr: Md.Hr,
  blockquote: Md.Quote,
  h1: Md.Heading.H1,
  h2: Md.Heading.H2,
  h3: Md.Heading.H3,
  li: Md.List.Li,
  ol: Md.List.Ol,
  p: Md.Text,
  strong: Md.Strong,
  table: Md.Table,
  td: Md.TableCell,
  th: (props: any) => <Md.TableCell bold {...props} />,
  tr: Md.TableRow,
  ul: Md.List.Ul,
} as any;

export default MDXComponents;
