export function P(props: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p className="mb-5 leading-7" {...props}>
      {props.children}
    </p>
  );
}
