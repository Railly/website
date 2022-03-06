export default function TableCell({ bold, children }) {
  return bold ? (
    <div className="w-32 font-bold sm:w-28">{children}</div>
  ) : (
    <div className="w-32 sm:w-28">{children}</div>
  );
}
