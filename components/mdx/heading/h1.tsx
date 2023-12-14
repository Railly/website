import { withHeadingId } from "./utils";

export function H1(props: React.ComponentPropsWithoutRef<"h1">) {
  return (
    <h1>
      {withHeadingId(props.children)}
    </h1>
  );
}
