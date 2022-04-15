import React from "react";
import Head from "next/head";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: "400px" }}
      />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
