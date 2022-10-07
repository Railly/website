export default function Quote({ children }) {
  return (
    <blockquote className="flex px-4 pt-5 pb-1 m-5 border-l-4 rounded-sm border-l-cyan-500 bg-zinc-100 dark:bg-zinc-800">
      {children}
    </blockquote>
  );
}
