import Link from "next/link";

export function A(props: React.ComponentPropsWithoutRef<"a">) {
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
}
