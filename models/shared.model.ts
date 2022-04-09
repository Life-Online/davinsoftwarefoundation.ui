export type PreviewData = {
  imageURL?: string;
  title: string;
  text: string;
  link?: string;
};

export type ContentPreviewProps = {
  reverse?: boolean;
  sectionTag: string;
  previewData: PreviewData;
};

export type CampaignCard = {
  campaingTitle: string;
  campaignBody: string;
  campaignID: number;
  campaignDate: string;
  campaignImageURL: string;
};

export type CampaignPreviewProps = ContentPreviewProps & {
  campaignCardData: CampaignCard[];
};

export type TitleSizes = "display" | "header1" | "header2" | "header3";

export type EmpahasizedTitleProps = {
  title: string;
  emphasizedTitle?: string;
  titleSize: TitleSizes;
};

export type EmpahasizedTextProps = {
  text: string;
  emphasizedText: string;
};

export type ImpactMetricsProps = {
  impactMetricsData: {
    title: string;
    metrics: { impact: string; description: string }[];
  };
};

export type LinkCardProps = {
  linkCardData: {
    imageURL: string;
    text: string;
    link: string;
    emphasizedText: string;
  };
};
