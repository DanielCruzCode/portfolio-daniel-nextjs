// import '../styles/globals.css' // this project don't uses a CSS modules
import { LangProvider } from "context/LangContextProvider";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LangProvider>
      <Component {...pageProps} />
    </LangProvider>
  );
}
export default MyApp;
