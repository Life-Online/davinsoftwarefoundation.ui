import React from "react";
import Head from "next/head";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

type AppProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>Davin Software Foundation</title>
        <meta
          name="description"
          content="Lifting others with the gift of technology"
        />
        <link rel="icon" type="image/png" href="/davin.png" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
