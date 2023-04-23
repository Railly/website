export default function Text(props) {
  return (
    <p className="mb-5 leading-7" {...props}>
      {props.children}
    </p>
  );
}
