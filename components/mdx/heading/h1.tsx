import { withHeadingId } from "./utils";

export function H1(props: React.ComponentPropsWithoutRef<"h1">) {
  return (
    <h1 className="my-7 text-2xl font-bold">
      {withHeadingId(props.children)}
    </h1>
  );
}
