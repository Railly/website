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
        className="px-3 py-2 transition rounded-lg text-black/60 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-600"
      >
        {children}
      </a>
    );
  } else {
    return (
      <NextLink href={to}>
        <a className="px-3 py-2 transition rounded-lg text-black/60 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-600">
          {children}
        </a>
      </NextLink>
    );
  }
};

export default FooterLink;
