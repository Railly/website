import { ReactNode } from "react";
import Header from "@/app/header";
import Footer from "@/app/footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="w-full px-4 md:p-0 md:max-w-prose">
        <main className="pt-[calc(var(--totalToolbarHeight)_+_var(--verticalContentPadding)_+_0.25rem)] pb-[var(--verticalContentPadding)]">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
