import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const colorClassNames = {
  default: "hover:text-indigo-500 dark:hover:text-hunter-blue-500",
  rose: "hover:text-hunter-rose-500 dark:hover:text-hunter-rose-400",
};

interface ILinkWithArrowProps {
  color?: keyof typeof colorClassNames;
  href: string;
}

const LinkWithArrow = ({
  color = "default",
  href,
  children,
}: React.PropsWithChildren<ILinkWithArrowProps>) => (
  <Link
    href={href}
    className={cn(
      "flex items-center pl-2 text-base font-medium transition w-fit 0 group",
      colorClassNames[color]
    )}
  >
    {children}
    <ArrowRight className="ml-1 transition duration-100 group-hover:translate-x-2" />
  </Link>
);

export default LinkWithArrow;
