const Ol = ({ children }) => <ol className="mb-6 list-decimal">{children}</ol>;

const Ul = ({ children }) => <ul className="mb-6 list-disc">{children}</ul>;

const Li = ({ children }) => {
  return (
    <div className="ml-4">
      <li className="my-3 dark:text-gray-200">{children}</li>
      <style jsx>{`
        li::marker {
          color: #999;
        }
      `}</style>
    </div>
  );
};

const List = { Ol, Ul, Li };

export default List;
