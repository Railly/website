import { ReactNode } from "react";
import NextLink from "next/link";

type Props = {
  to: string;
  onNavigate?: () => void;
  children: ReactNode;
};

const Link = ({ to, onNavigate = () => {}, children }: Props) => {
  return (
    <NextLink href={to}>
      <a
        onClick={onNavigate}
        className="px-3 py-2 font-medium transition rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-600"
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
