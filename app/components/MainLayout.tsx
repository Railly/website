import Footer from "components/Footer";
import Header from "components/Header";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
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

export default MainLayout;
