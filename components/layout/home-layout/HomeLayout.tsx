import { ReactNode } from "react";
import { globalStyles } from "styles/globals";
import NavBar from "components/nav-bar/Navbar";

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <main>
        {children}
        <NavBar />
      </main>
      <style jsx>{globalStyles}</style>
    </>
  );
}
