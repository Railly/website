export default function Table(props) {
  return (
    <div className="flex flex-col w-full gap-3 p-6 text-gray-200 border-2 border-indigo-500 border-dashed">
      {props.children}
    </div>
  );
}
