import React from "react";
import styles from "./sectionTag.module.scss";

function SectionTag({ sectionTag }: { sectionTag: string }) {
  return <div className={styles.sectionTag}>{sectionTag}</div>;
}

export default SectionTag;
