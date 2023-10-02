import { withHeadingId } from "./utils";

export function H2(props: React.ComponentPropsWithoutRef<"h2">) {
  return (
    <h2 className="mt-8 mb-3 text-xl font-medium dark:text-gray-100">
      {withHeadingId(props.children)}
    </h2>
  );
}
