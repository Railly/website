const H1 = ({ children }) => (
  <h1 className="mt-8 mb-3 text-2xl font-bold text-white lg:text-3xl">
    {children}
  </h1>
);

const H2 = ({ children }) => (
  <h2 className="mt-8 mb-3 text-xl font-bold text-white">{children}</h2>
);

const H3 = ({ children }) => (
  <h3 className="mt-8 mb-3 text-lg font-bold text-white">{children}</h3>
);

const Heading = { H1, H2, H3 };

export default Heading;
