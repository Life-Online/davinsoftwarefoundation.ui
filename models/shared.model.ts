export type PreviewData = {
  imageURL?: string;
  title: string;
  text: string;
  link?: string;
};

export type SectionTitleModel = PreviewData & {
  sectionTag: string;
  titleSize?: TitleSizes;
};

export type ContentPreviewProps = {
  reverse?: boolean;
  sectionTitle: SectionTitleModel;
};

export type CampaignModel = {
  title: string;
  body: string;
  id: number;
  date: string;
  imageURL: string;
};

export type CampaignPreviewProps = {
  sectionTitle: SectionTitleModel;
  campaigns: CampaignModel[];
};

export type EmploymentTypes =
  | "Full-time"
  | "Part-Time"
  | "Contract"
  | "Self-employed"
  | "Freelance"
  | "Internship";

export type UserModel = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  occupation: string;
  employmentType: EmploymentTypes;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  avatarURL: string;
  hours: 1 | 3 | 6 | 9;
};

export type StoryModel = {
  id: number;
  title: string;
  snippet: string;
  category: string;
  coverImageURL: string;
  story: string;
  tags: string[];
  author: UserModel;
};

export type StoriesPreviewProps = {
  sectionTitle: SectionTitleModel;
  stories: StoryModel[];
};

export type TitleSizes = "display" | "header1" | "header2" | "header3";

export type EmpahasizedTitleProps = {
  title: string;
  emphasizedTitle?: string;
  titleSize?: TitleSizes;
};

export type EmpahasizedTextProps = {
  text: string;
  emphasizedText: string;
};

export type SectionTitleProps = EmpahasizedTitleProps & {
  text: string;
};

export type ImpactMetricsModel = {
  title: string;
  metrics: { impact: string; description: string }[];
};

export type LinkCardModel = {
  imageURL: string;
  text: string;
  link: string;
  emphasizedText: string;
};
