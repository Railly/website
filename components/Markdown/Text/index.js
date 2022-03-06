export default function Text(props) {
  return (
    <p className="mb-5 leading-7 dark:text-gray-200" {...props}>
      {props.children}
    </p>
  );
}
