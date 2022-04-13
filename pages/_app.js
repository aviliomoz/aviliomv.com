import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../redux/store";

import Layout from "../containers/Layout";

import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Avilio Muñoz Vilchez | Blog</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
