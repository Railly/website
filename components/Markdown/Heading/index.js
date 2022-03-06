const H1 = ({ children }) => (
  <h1 className="mt-8 mb-3 text-3xl font-bold text-gray-700 font-gilmer lg:text-5xl dark:text-gray-200">
    {children}
  </h1>
);

const H2 = ({ children }) => (
  <h2 className="mt-8 mb-3 text-3xl font-bold text-gray-700 font-gilmer lg:text-2xl dark:text-gray-300">
    {children}
  </h2>
);

const H3 = ({ children }) => (
  <h3 className="mt-8 mb-3 text-xl font-bold text-gray-700 font-gilmer dark:text-gray-200">
    {children}
  </h3>
);

const Heading = { H1, H2, H3 };

export default Heading;
