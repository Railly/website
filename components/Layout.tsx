import { ReactNode } from "react";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="container max-w-2xl px-10 mx-auto">{children}</main>
    </>
  );
};

export default Layout;
