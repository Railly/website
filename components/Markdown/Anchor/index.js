export default function Anchor({ href, children, ...props }) {
  return (
    <a
      className="font-bold text-indigo-500 border-b-2 border-indigo-500 border-dotted hover:text-indigo-400 hover:border-indigo-400"
      href={href}
      target="_blank"
      rel="noreferrer noopenner"
      {...props}
    >
      {children}
    </a>
  );
}
