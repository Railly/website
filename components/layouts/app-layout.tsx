import Footer from "@/app/footer";
import Header from "@/app/header";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="relative col-[2] min-w-0 pt-[calc(var(--totalToolbarHeight)_+_var(--verticalContentPadding)_-_0.5rem)] pb-[var(--verticalContentPadding)] md:max-w-prose mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
