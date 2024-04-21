import Footer from "@/app/footer";
import Header from "@/app/header";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full dark:bg-grid-white/[0.08] bg-grid-black/[0.08]">
      <div className="fixed top-0 min-h-screen h-full pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Header />
      <main className="relative col-[2] min-w-0 pt-[calc(var(--totalToolbarHeight)_+_var(--verticalContentPadding)_-_0.5rem)] pb-[var(--verticalContentPadding)] antialiased max-w-2xl lg:mx-auto mx-auto bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
