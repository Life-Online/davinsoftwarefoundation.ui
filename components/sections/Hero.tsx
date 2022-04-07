import React from "react";
import Image from "next/image";
import styles from "./hero.module.scss";

type HeroSectionProps = {
  heroSectionData: {
    heroImage: string;
    heroVideo: string;
    useHeroVideo: boolean;
    impactMetrics: {
      title: string;
      metrics: { impact: string; description: string }[];
    };
    heroLinkCards: {
      cardOne: { image: string; text: string; link: string };
      cardTwo: { image: string; text: string; link: string };
    };
  };
};

type HeroLinkCardProps = {
  image: string;
  text: string;
  link: string;
};

const HeroLinkCard = ({ image, text, link }: HeroLinkCardProps) => {
  return (
    <div className={`card p-2    ${styles.campVoluCard}`}>
      <Image
        src={data.campImg}
        className={`card-img-top p-1 ${styles.campImg} `}
        alt=""
      />
      <div className={`p-2 mx-2   ${styles.campCardBody}`}>
        <p className={`card-text  ${styles.campVoluText} `}>{data.campText}</p>
        <ArrowRightIcon className="h-4 w-4 mb-3  text-[#EB4C29]" />
      </div>
    </div>
  );
};

const Hero = ({ heroSectionData }: HeroSectionProps) => {
  return (
    <section className="row">
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
    </section>
  );
};

export default Hero;
