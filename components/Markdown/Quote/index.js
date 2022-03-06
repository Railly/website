export default function Quote({ children }) {
  return (
    <blockquote className="flex px-10 pt-5 pb-1 m-5 italic border-l-8 border-indigo-600 bg-indigo-50 dark:bg-gray-700">
      <span>&ldquo;</span>
      {children}
      <span>&ldquo;</span>
    </blockquote>
  );
}
