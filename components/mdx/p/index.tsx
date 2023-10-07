export function P(props: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p className="my-6 !leading-7 text-lg" {...props}>
      {props.children}
    </p>
  );
}
