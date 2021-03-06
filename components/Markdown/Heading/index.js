const H1 = ({ children }) => (
  <h1 className="text-gray-700 text-3xl font-bold lg:text-5xl mb-3 mt-8 dark:text-gray-200">
    {children}
  </h1>
);

const H2 = ({ children }) => (
  <h2 className="text-gray-700 text-3xl font-bold lg:text-2xl mb-3 mt-8 dark:text-gray-300">
    {children}
  </h2>
);

const H3 = ({ children }) => (
  <h3 className="text-gray-700 text-xl font-bold mb-3 mt-8 dark:text-gray-200">
    {children}
  </h3>
);

const Heading = { H1, H2, H3 };

export default Heading;
