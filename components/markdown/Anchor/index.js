export default function Anchor({ href, children, ...props }) {
  return (
    <a
      className="font-bold text-hunter-blue-500 border-b-2 border-hunter-blue-500 border-dotted hover:text-hunter-blue-400 hover:border-hunter-blue-400"
      href={href}
      target="_blank"
      rel="noreferrer noopenner"
      {...props}
    >
      {children}
    </a>
  );
}
