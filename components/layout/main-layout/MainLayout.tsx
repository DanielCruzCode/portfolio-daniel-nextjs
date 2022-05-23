import { ReactNode } from "react";
import { globalStyles } from "styles/globals";
import { button } from "./MainLayoutStyles";
import NavBar from "components/nav-bar/Navbar";
import Head from "next/head";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        {children}
        <NavBar />
      </main>
      <style jsx>{globalStyles}</style>
      <style jsx>{button}</style>
    </>
  );
}
