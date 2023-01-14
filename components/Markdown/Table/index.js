export default function Table(props) {
  return (
    <div className="flex flex-col w-full gap-3 p-6 text-gray-700 border-2 border-indigo-500 border-dashed dark:text-gray-200">
      {props.children}
    </div>
  );
}
