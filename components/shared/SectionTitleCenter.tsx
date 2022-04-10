import React from "react";
import EmphasizedTitle from "./EmphasizedTitle";
import styles from "./sectionTitleCenter.module.scss";
import { SectionTitleProps } from "../../models/shared.model";

const SectionTitleCenter = ({
  sectionTitlelData,
}: {
  sectionTitlelData: SectionTitleProps;
}) => {
  return (
    <React.Fragment>
      <section className="row d-flex flex-column align-items-center py-3 mb-3 text-center">
        <div className="col-6">
          <EmphasizedTitle
            title={sectionTitlelData.title}
            emphasizedTitle={sectionTitlelData.emphasizedTitle}
            titleSize={sectionTitlelData.titleSize}
          />
        </div>
        <div className={`col-7 pt-3 ${styles.content}`}>
          {sectionTitlelData.text}
        </div>
      </section>
    </React.Fragment>
  );
};

export default SectionTitleCenter;
