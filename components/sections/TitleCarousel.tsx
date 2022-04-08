import React from "react";
import EmphasizedTitle from "../shared/EmphasizedTitle";
import styles from "./titleCarousel.module.scss";
import { TitleCarouselProps } from "../../models/home.model";

const TitleCarousel = ({ titleCarouselData }: TitleCarouselProps) => {
  return (
    <React.Fragment>
      {titleCarouselData.map((item, id) => {
        return (
          <section
            className="row justify-content-between items-center py-3 mb-3"
            key={id}
          >
            <div className="col-7">
              <EmphasizedTitle
                title={item.title}
                emphasizedTitle={item.emphasizedTitle}
              />
            </div>
            <div className={`col-5 pt-3 ${styles.content}`}>{item.content}</div>
          </section>
        );
      })}
    </React.Fragment>
  );
};

export default TitleCarousel;
