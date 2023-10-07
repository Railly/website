import { withHeadingId } from "./utils";

export function H3(props: React.ComponentPropsWithoutRef<"h3">) {
  return (
    <h3 className="mt-7 mb-5 text-lg font-medium dark:text-gray-100">
      {withHeadingId(props.children)}
    </h3>
  );
}
