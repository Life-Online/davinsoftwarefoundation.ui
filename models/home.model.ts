import { ImpactMetricsModel, LinkCardModel } from "./shared.model";

export type HeroSectionProps = {
  heroImage: string;
  heroVideo: string;
  useHeroVideo: boolean;
  impactMetrics: ImpactMetricsModel;
  heroLinkCards: {
    cardOne: LinkCardModel;
    cardTwo: LinkCardModel;
  };
};

export interface ActivePageLinks {
  [key: string]: boolean;
}
