import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import NavBar from '../components/NavBar'
import Footer from "../sections/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>HackMoreish</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
      </Head>
      <NavBar></NavBar>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
