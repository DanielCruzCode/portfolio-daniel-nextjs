import { ReactNode } from "react";
import { globalStyles } from "styles/globals";
import {
  blobs,
  button,
  container,
} from "styles/components/layout/main-layout/MainLayoutStyles";
import NavBar from "components/nav-bar/Navbar";
import {
  BlobLeft,
  BlobRight,
} from "components/icons/nav-bar-icons/main-layout/blobs";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <div className="blob-bubble-left">
        <BlobLeft />
      </div>
      <div className="blob-bubble-right">
        <BlobRight />
      </div>
      <main>
        {children}
        <NavBar />
      </main>
      <style jsx>{globalStyles}</style>
      <style jsx>{container}</style>
      <style jsx>{button}</style>
      <style jsx>{blobs}</style>
    </>
  );
}
