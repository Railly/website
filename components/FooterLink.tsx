import { ReactNode } from "react";
import NextLink from "next/link";

type Props = {
  to: string;
  external?: boolean;
  children: ReactNode;
};

const FooterLink = ({ to, external = false, children }: Props) => {
  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-2 transition rounded-lg dark:text-zinc-400 hover:text-indigo-700 dark:hover:text-zinc-600"
      >
        {children}
      </a>
    );
  } else {
    return (
      <NextLink href={to}>
        <a className="px-3 py-2 transition rounded-lg dark:text-zinc-400 hover:text-indigo-700 dark:hover:text-zinc-600">
          {children}
        </a>
      </NextLink>
    );
  }
};

export default FooterLink;
