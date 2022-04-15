import React from "react";
import styles from "./impactMetrics.module.scss";
import { ImpactMetricsModel } from "../../models/shared.model";

const ImpactMetrics = ({
  impactMetricsData,
}: {
  impactMetricsData: ImpactMetricsModel;
}) => {
  return (
    <div className={`container mt-3 p-3  ${styles.impactMetricContainer} `}>
      <div className="row">
        <div
          className={`col-12 text-md-start text-center ${styles.impactMetricTitle}`}
        >
          {impactMetricsData.title}
        </div>
      </div>
      <div className="row">
        {impactMetricsData.metrics.map((metric) => (
          <div className="col-md col-12 pb-3 pb-md-0 mb-3 mb-md-0 text-md-start text-center">
            <div className={styles.impact}>{metric.impact}</div>
            <div className={styles.description}>{metric.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactMetrics;
