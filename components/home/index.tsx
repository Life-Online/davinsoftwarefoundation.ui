import React from "react";
import Body from "../body";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import styles from "../../styles/home/home.module.scss";

function HomePage() {
  return (
    <div className={styles.homepage}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default HomePage;
