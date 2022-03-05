import { ReactNode } from "react";
import NextLink from "next/link";

type Props = {
  to: string;
  active?: boolean;
  onNavigate?: () => void;
  children: ReactNode;
};

const Link = ({ to, active, onNavigate = () => {}, children }: Props) => {
  return (
    <NextLink href={to}>
      <a
        onClick={onNavigate}
        className={`px-3 py-2 transition rounded-lg dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600
        ${
          active
            ? "underline font-bold underline-offset-2 dark:text-zinc-50"
            : "underline-none"
        }
        `}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
