import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import HomeLayout from "../components/layout/home-layout/HomeLayout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>👨🏽‍💻Daniel Cruz - Porfolio</title>
      </Head>
      <HomeLayout>
        <h1>
          Hola este es mi portfolio, espero que puedas darle un vistazo y puedas
          darme feedback al respecto
        </h1>
        <Link href="/profile">
          <a>Ir al perfil</a>
        </Link>
        {/* TODO: Style this page to generate a CTA for the users */}
      </HomeLayout>
      <footer></footer>
    </div>
  );
};

export default Home;
