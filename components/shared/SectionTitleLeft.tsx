import React from "react";
import EmphasizedTitle from "./EmphasizedTitle";
import styles from "./sectionTitleLeft.module.scss";
import { SectionTitleProps } from "../../models/shared.model";

const SectionTitleLeft = ({
  sectionTitlelData,
}: {
  sectionTitlelData: SectionTitleProps;
}) => {
  return (
    <React.Fragment>
      <section className="row justify-content-between items-center py-3 mb-3">
        <div className="col-12 col-md-7">
          <EmphasizedTitle
            title={sectionTitlelData.title}
            emphasizedTitle={sectionTitlelData.emphasizedTitle}
            titleSize={sectionTitlelData.titleSize}
          />
        </div>
        <div className={`col-12 col-md-5 pt-3 ${styles.content}`}>
          {sectionTitlelData.text}
        </div>
      </section>
    </React.Fragment>
  );
};

export default SectionTitleLeft;
