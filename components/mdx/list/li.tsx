export function Li(props: React.ComponentPropsWithoutRef<"li">) {
  return (
    <div className="ml-4">
      <li className="my-3 dark:text-gray-200">{props.children}</li>
      {/* <style jsx>{`
        li::marker {
          color: #999;
        }
      `}</style> */}
    </div>
  );
}
