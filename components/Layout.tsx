import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="container max-w-3xl px-8 mx-auto md:px-10">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
