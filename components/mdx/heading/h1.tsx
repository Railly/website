import { withHeadingId } from "./utils";

export function H1(props: React.ComponentPropsWithoutRef<"h1">) {
  return (
    <h1 className="mt-8 mb-5 text-2xl font-bold !text-foreground-contrast">
      {withHeadingId(props.children)}
    </h1>
  );
}
