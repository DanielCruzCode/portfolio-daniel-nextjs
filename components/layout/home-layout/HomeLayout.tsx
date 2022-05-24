import { ReactNode } from "react";
import { globalStyles } from "styles/globals";

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <main>{children}</main>
      <style jsx>{globalStyles}</style>
    </>
  );
}
