import React from "react";
import Image from "next/image";
import styles from "./hero.module.scss";
import LinkCard from "../shared/LinkCard";
import ImpactMetrics from "../shared/ImpactMetrics";
import { HeroSectionProps } from "../../models/home.model";

const Hero = ({ heroSectionData }: { heroSectionData: HeroSectionProps }) => {
  const cardOneData = heroSectionData?.heroLinkCards?.cardOne;
  const cardTwoData = heroSectionData?.heroLinkCards?.cardTwo;
  const impactMetricsData = heroSectionData?.impactMetrics;

  return (
    <section className="row overflow-hidden mt-5">
      <div className="position-relative w-100">
        <div className="col-11">
          <div className={styles.heroSpotLightContainer}>
            <Image
              className={styles.heroImage}
              src={heroSectionData.heroImage}
              alt=""
              width={1080}
              height={520}
              objectFit="contain"
              layout="responsive"
            />
          </div>
        </div>
        <div className={styles.cardOne}>
          {cardOneData ? <LinkCard linkCardData={cardOneData} /> : ""}
        </div>
      </div>
      <div className="col-4 position-relative">
        <div className={styles.dotGridContainer}>
          <Image src="/img/dot-grid.svg" width={150} height={150} />
        </div>
        <div className={styles.cardTwo}>
          {cardTwoData ? <LinkCard linkCardData={cardTwoData} /> : ""}
        </div>
      </div>
      <div className="col-7">
        <ImpactMetrics impactMetricsData={impactMetricsData} />
      </div>
    </section>
  );
};

export default Hero;
