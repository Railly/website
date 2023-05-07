import { withHeadingId } from "./utils";

export function H3(props: React.ComponentPropsWithoutRef<"h3">) {
  return (
    <h3 className="mt-8 mb-3 text-lg font-bold dark:text-white">
      {withHeadingId(props.children)}
    </h3>
  );
}
