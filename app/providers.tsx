"use client";
import { Analytics } from "@vercel/analytics/react";

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
};

export default Providers;
