export function P(props: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p className="!leading-7" {...props}>
      {props.children}
    </p>
  );
}
