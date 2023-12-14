import { withHeadingId } from "./utils";

export function H3(props: React.ComponentPropsWithoutRef<"h3">) {
  return (
    <h3>
      {withHeadingId(props.children)}
    </h3>
  );
}
