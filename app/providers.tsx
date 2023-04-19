"use client";

import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={{}}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </MDXProvider>
  );
}
