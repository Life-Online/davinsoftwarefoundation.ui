import React from "react";
import styles from "./impactMetrics.module.scss";

type ImpactMetricsProps = {
  impactMetricsData: {
    title: string;
    metrics: { impact: string; description: string }[];
  };
};

const ImpactMetrics = ({ impactMetricsData }: ImpactMetricsProps) => {
  return (
    <div className={`container mt-3 p-3  ${styles.impactMetricContainer} `}>
      <div className="row">
        <div className={`col-12 ${styles.impactMetricTitle}`}>
          {impactMetricsData.title}
        </div>
      </div>
      <div className="row">
        {impactMetricsData.metrics.map((metric) => (
          <div className="col">
            <div className={styles.impact}>{metric.impact}</div>
            <div className={styles.description}>{metric.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactMetrics;
