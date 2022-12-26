export default function Quote({ children }) {
  return (
    <blockquote className="flex px-4 pt-5 pb-1 my-10 text-sm border-l-4 rounded-sm border-l-hunter-yellow-300 bg-hunter-black-800">
      {children}
    </blockquote>
  );
}
