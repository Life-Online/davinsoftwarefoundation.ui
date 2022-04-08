import React from "react";
import styles from "./emphasizedTitle.module.scss";
import { EmpahasizedTitleProps } from "../../models/shared.model";

const EmphasizedTitle = ({ title, emphasizedTitle }: EmpahasizedTitleProps) => {
  const emphasizedTextPosition = title
    .toLowerCase()
    .indexOf(emphasizedTitle.toLowerCase());
  if (emphasizedTextPosition >= 0) {
    const pretext = title.slice(0, emphasizedTextPosition);
    const postText = title.slice(
      emphasizedTitle.length + emphasizedTextPosition
    );
    return (
      <div className={styles.title}>
        {pretext.trim()}
        <span className={styles.emphasizedTitle}>{` ${emphasizedTitle} `}</span>
        {postText.trim()}
      </div>
    );
  }
  return <div className={styles.title}>{title}</div>;
};

export default EmphasizedTitle;
