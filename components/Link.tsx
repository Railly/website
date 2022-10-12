import { ReactNode } from "react";
import NextLink from "next/link";

type Props = {
  to: string;
  active?: boolean;
  onNavigate?: () => void;
  children: ReactNode;
  start?: boolean;
  end?: boolean;
  full?: boolean;
};

const Link = ({
  to,
  active,
  onNavigate = () => {},
  start,
  end,
  full,
  children,
}: Props) => {
  return (
    <NextLink href={to}>
      <a
        onClick={onNavigate}
        className={`h-full flex px-4 justify-center items-center text-base transition hover:bg-cyan-100 dark:hover:bg-cyan-700
        ${
          active
            ? "font-semibold underline-offset-2 text-cyan-500 dark:text-cyan-400"
            : "underline-none dark:text-zinc-200"
        }
        ${start ? "rounded-tl-lg rounded-bl-lg" : "rounded-none"}
        ${end ? "rounded-tr-lg rounded-br-lg" : "rounded-none"}
        ${full ? "w-full py-5" : "w-24"}
        `}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
