export type HeroSectionProps = {
  heroSectionData: {
    heroImage: string;
    heroVideo: string;
    useHeroVideo: boolean;
    impactMetrics: {
      title: string;
      metrics: { impact: string; description: string }[];
    };
    heroLinkCards: {
      cardOne: {
        imageURL: string;
        text: string;
        emphasizedText: string;
        link: string;
      };
      cardTwo: {
        imageURL: string;
        text: string;
        emphasizedText: string;
        link: string;
      };
    };
  };
};

export type TitleCarouselProps = {
  title: string;
  emphasizedTitle?: string;
  content: string;
};

export interface ActivePageLinks {
  [key: string]: boolean;
}
