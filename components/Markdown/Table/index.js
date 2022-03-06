export default function Table(props) {
  return (
    <div className="border-dashed border-2 p-6 border-indigo-500 flex flex-col gap-3 w-full text-gray-700 dark:text-gray-200">
      {props.children}
    </div>
  );
}
