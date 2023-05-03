import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full lg:w-[60rem] min-h-screen">
      <Header />
      <main className="container w-full px-4 mx-auto mb-10 md:px-6">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
