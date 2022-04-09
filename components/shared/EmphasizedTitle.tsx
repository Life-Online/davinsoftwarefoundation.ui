import React from "react";
import styles from "./emphasizedTitle.module.scss";
import { EmpahasizedTitleProps } from "../../models/shared.model";

const EmphasizedTitle = ({
  title,
  emphasizedTitle = "",
  titleSize = "display",
}: EmpahasizedTitleProps) => {
  const emphasizedTextPosition = title
    .toLowerCase()
    .indexOf(emphasizedTitle.toLowerCase());
  if (emphasizedTextPosition >= 0) {
    const pretext = title.slice(0, emphasizedTextPosition);
    const postText = title.slice(
      emphasizedTitle.length + emphasizedTextPosition
    );

    let titleSizeStyle;

    switch (titleSize) {
      case "header1":
        titleSizeStyle = styles.header1;
        break;
      case "header2":
        titleSizeStyle = styles.header2;
        break;
      case "header3":
        titleSizeStyle = styles.header3;
        break;
      default:
        titleSizeStyle = styles.display;
        break;
    }
    return (
      <div className={`${styles.title} ${titleSizeStyle}`}>
        {pretext.trim()}
        <span className={styles.emphasizedTitle}>{` ${emphasizedTitle} `}</span>
        {postText.trim()}
      </div>
    );
  }
  return <div className={styles.title}>{title}</div>;
};

export default EmphasizedTitle;
