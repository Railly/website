import { withHeadingId } from "./utils";

export function H2(props: React.ComponentPropsWithoutRef<"h2">) {
  return (
    <h2 className="mt-7 mb-5 text-xl font-bold">
      {withHeadingId(props.children)}
    </h2>
  );
}
