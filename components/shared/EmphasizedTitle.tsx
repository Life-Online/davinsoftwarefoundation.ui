import React from "react";
import styles from "./emphasizedTitle.module.scss";

type EmpahasizedTitleProps = {
  title: string;
  emphasizedText: string;
};

const EmphasizedTitle = ({ title, emphasizedText }: EmpahasizedTitleProps) => {
  const emphasizedTextPosition = title
    .toLowerCase()
    .indexOf(emphasizedText.toLowerCase());
  if (emphasizedTextPosition >= 0) {
    const pretext = title.slice(0, emphasizedTextPosition);
    const postText = title.slice(
      emphasizedText.length + emphasizedTextPosition
    );
    return (
      <div className={styles.title}>
        {pretext.trim()}
        <span className={styles.emphasizedTitle}>{` ${emphasizedText} `}</span>
        {postText.trim()}
      </div>
    );
  }
  return <div className={styles.title}>{title}</div>;
};

export default EmphasizedTitle;
