import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const colorClassNames = {
  default:
    "text-hunter-blue-700 dark:text-hunter-blue-300 hover:text-hunter-blue-500 dark:hover:text-hunter-blue-400",
  green:
    "text-hunter-green-600 dark:text-hunter-green-300 hover:text-hunter-green-500 dark:hover:text-hunter-green-400",
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
      "flex items-center pl-2 text-base font-medium transition w-fit 0 group underline underline-offset-4",
      colorClassNames[color]
    )}
  >
    {children}
    <ArrowRight className="ml-1 transition duration-100 group-hover:translate-x-2" />
  </Link>
);

export default LinkWithArrow;
