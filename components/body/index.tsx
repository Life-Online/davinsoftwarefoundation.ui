import React from "react";
import Experience from "./experience";

import Together from "./together";
import styles from "../../styles/body/body.module.scss";

{
  `container ${styles.liftingContainer}`;
}
function Body() {
  return (
    <div className={`my-5 ${styles.bodyContainer}`}>
      <section>
        <Experience />
      </section>
      <section>
        <Together />
      </section>
    </div>
  );
}

export default Body;
