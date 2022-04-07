import React from "react";
import styles from "./emphasizedText.module.scss";

type EmpahasizedTextProps = {
  text: string;
  emphasizedText: string;
};

const EmphasizedText = ({ text, emphasizedText }: EmpahasizedTextProps) => {
  const emphasizedTextPosition = text
    .toLowerCase()
    .indexOf(emphasizedText.toLowerCase());
  if (emphasizedTextPosition >= 0) {
    const pretext = text.slice(0, emphasizedTextPosition);
    const postText = text.slice(emphasizedText.length + emphasizedTextPosition);
    return (
      <div className={styles.text}>
        {pretext.trim()}
        <span className={styles.emphasizedText}>{` ${emphasizedText} `}</span>
        {postText.trim()}
      </div>
    );
  }
  return <div className={styles.title}>{text}</div>;
};

export default EmphasizedText;
