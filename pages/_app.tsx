import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "../context/userContext";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
