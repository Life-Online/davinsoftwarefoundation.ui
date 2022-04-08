export type PreviewData = {
  imageURL: string;
  title: string;
  text: string;
  link?: string;
};

export type ContentPreviewProps = {
  reverse: boolean;
  sectionTag: string;
  previewData: PreviewData;
};

export type EmpahasizedTitleProps = {
  title: string;
  emphasizedTitle: string;
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