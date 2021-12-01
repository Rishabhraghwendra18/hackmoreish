import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>HackMoreish</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
