import { CampaignPreviewProps } from "../models/shared.model";

const CampaignPreviewData: CampaignPreviewProps = {
  sectionTitle: {
    sectionTag: "Campaigns",
    title: "Explore campaigns and events",
    text: "Explore our campaings and events. Donate to the campaings you’re intrested in or volounteer to help out.",
    titleSize: "header1",
  },
  campaigns: [
    {
      title: "Vigilant Heart Charitable Society",
      body: "The ultimate goal of this initiative is to make sure we inculcate in as many persons as possible these skills needed to build moder web applications",
      id: 1,
      date: "2022-04-16",
      imageURL: "/img/campaign-ketu.png",
    },
  ],
};

export default CampaignPreviewData;
