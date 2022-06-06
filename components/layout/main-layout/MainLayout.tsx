import { ReactNode } from "react";
import { globalStyles } from "styles/globals";
import {
  blobs,
  button,
  container,
} from "styles/components/layout/main-layout/MainLayoutStyles";
import NavBar from "components/nav-bar/Navbar";
import { BlobLeft, BlobRight } from "components/icons/main-layout/blobs";
import { LanguageSwitcher } from "./LanguageSwitcher";
import Head from "next/head";
import { useRouter } from "next/router";
import { capitalizePathname } from "helpers/StringHelpers";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const router = useRouter();

  const headTitle: string = capitalizePathname(router?.asPath);
  return (
    <>
      <Head>
        <title>👨🏽‍💻Daniel Cruz - {headTitle}</title>
      </Head>
      <div className="blob-bubble-left">
        <BlobLeft className="float" />
      </div>
      <div className="blob-bubble-right">
        <BlobRight className="float" />
      </div>
      <LanguageSwitcher />
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
