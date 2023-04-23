"use client";
import { MDXProvider } from "@mdx-js/react";
import { Analytics } from "@vercel/analytics/react";

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <MDXProvider components={{}}>
      {children}
      <Analytics />
    </MDXProvider>
  );
};

export default Providers;
