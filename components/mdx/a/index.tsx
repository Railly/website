import Link from "next/link";

export function A(props: React.ComponentPropsWithoutRef<"a">) {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link
        className="font-medium hover:underline transition text-orange-600 hover:underline-offset-4 hover:text-orange-500"
        href={href}
        {...props}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <a
      className="font-medium [text-decoration:none] hover:underline transition text-orange-600 hover:underline-offset-4 hover:text-orange-500"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {props.children}
    </a>
  );
}
