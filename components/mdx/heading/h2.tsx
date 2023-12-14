import { withHeadingId } from "./utils";

export function H2(props: React.ComponentPropsWithoutRef<"h2">) {
  return (
    <h2>
      {withHeadingId(props.children)}
    </h2>
  );
}
