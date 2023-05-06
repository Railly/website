"use client";
import { Provider as BalancerProvider } from "react-wrap-balancer";
import { Analytics } from "@vercel/analytics/react";

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <BalancerProvider>
      {children}
      <Analytics />
    </BalancerProvider>
  );
};

export default Providers;
