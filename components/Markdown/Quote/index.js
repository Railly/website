export default function Quote({ children }) {
  return (
    <blockquote className="flex italic border-l-8 px-10 pt-5 pb-1 m-5 border-indigo-600 bg-indigo-50 dark:bg-gray-700">
      <span>"</span>
      {children}
      <span>"</span>
    </blockquote>
  );
}
