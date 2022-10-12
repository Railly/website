import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="container max-w-3xl px-4 mx-auto mb-10 md:px-6">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
