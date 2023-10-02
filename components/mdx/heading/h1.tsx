import { withHeadingId } from "./utils";

export function H1(props: React.ComponentPropsWithoutRef<"h1">) {
  return (
    <h1 className="mb-1 text-2xl font-medium dark:text-gray-100">
      {withHeadingId(props.children)}
    </h1>
  );
}
