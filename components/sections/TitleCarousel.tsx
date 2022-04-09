import React from "react";
import EmphasizedTitle from "../shared/EmphasizedTitle";
import styles from "./titleCarousel.module.scss";
import { TitleCarouselProps } from "../../models/home.model";
import { TitleSizes } from "../../models/shared.model";

const TitleCarousel = ({
  titleCarouselData,
  titleSize,
}: {
  titleCarouselData: TitleCarouselProps;
  titleSize: TitleSizes;
}) => {
  return (
    <React.Fragment>
      <section className="row justify-content-between items-center py-3 mb-3">
        <div className="col-7">
          <EmphasizedTitle
            title={titleCarouselData.title}
            emphasizedTitle={titleCarouselData.emphasizedTitle}
            titleSize={titleSize}
          />
        </div>
        <div className={`col-5 pt-3 ${styles.content}`}>
          {titleCarouselData.content}
        </div>
      </section>
    </React.Fragment>
  );
};

export default TitleCarousel;
