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

const HeaderLink = ({
  to,
  active,
  onNavigate = () => {},
  start,
  end,
  full,
  children,
}: Props) => {
  return (
    <NextLink
      href={to}
      onClick={onNavigate}
      className={`h-full flex px-4 py-1.5 justify-center items-center text-base transition hover:bg-hunter-blue-700/20
        ${
          active
            ? "font-semibold underline-offset-2 text-hunter-blue-500"
            : "underline-none text-hunter-black-900 dark:text-hunter-black-200"
        }
        ${start ? "rounded-tl-lg rounded-bl-lg" : "rounded-none"}
        ${end ? "rounded-tr-lg rounded-br-lg" : "rounded-none"}
        ${full ? "w-full py-3" : "w-24"}
        `}
    >
      {children}
    </NextLink>
  );
};

export default HeaderLink;
