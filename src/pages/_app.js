import { useEffect, useState } from "react";
import Layout from '../component/Layout/Layout.jsx';
import Head from "../components/Head.jsx";


function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Head title={`Yakshit Poojary | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;