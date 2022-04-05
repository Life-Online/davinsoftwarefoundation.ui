import React from "react";
import EmphasizedTitle from "../shared/EmphasizedTitle";
import styles from "./titleCarousel.module.scss";

type TitleCarouselProps = {
  titleCarouselData: {
    title: string;
    emphasizedTitle: string;
    content: string;
  }[];
};

const TitleCarousel = ({ titleCarouselData }: TitleCarouselProps) => {
  return (
    <section className="py-3">
      {titleCarouselData.map((item, id) => {
        return (
          <div className="container py-3 mb-3" key={id}>
            <div className="row justify-content-between items-center">
              <div className="col-7">
                <EmphasizedTitle
                  title={item.title}
                  emphasizedText={item.emphasizedTitle}
                />
              </div>
              <div className={`col-5 pt-3 ${styles.content}`}>
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TitleCarousel;
