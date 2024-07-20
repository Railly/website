"use client";
import { Provider as BalancerProvider } from "react-wrap-balancer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getAsciiArt } from "@/utils/helpers";
import { useEffect } from "react";

const Providers = ({ children }: React.PropsWithChildren) => {
  useEffect(() => {
    console.log(...getAsciiArt());
  }, []);
  return (
    <BalancerProvider>
      {children}
      <Analytics />
      <SpeedInsights />
    </BalancerProvider>
  );
};

export default Providers;
