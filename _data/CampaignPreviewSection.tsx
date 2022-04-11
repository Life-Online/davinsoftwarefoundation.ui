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
      title: "A visit to Ikosi Schools",
      body: "We will be teaching young boys and girls in Ikosi how to write Java",
      id: 3,
      date: "2022-01-22",
      imageURL: "/img/campaign-ikosi.png",
    },
    {
      title: "A visit to Vigilant Heart Charitable Society",
      body: "We will be teaching young boys and girls in Ikosi how to write Java",
      id: 1,
      date: "2022-04-16",
      imageURL: "/img/campaign-obalende.png",
    },
    {
      title: "A visit to Ketu Schools",
      body: "We will be teaching young boys and girls in Ikosi how to write Java",
      id: 2,
      date: "2022-06-05",
      imageURL: "/img/campaign-ketu.png",
    },
    {
      title: "A visit to Ketu Schools",
      body: "We will be teaching young boys and girls in Ikosi how to write Java",
      id: 2,
      date: "2022-06-05",
      imageURL: "/img/campaign-ketu.png",
    },
  ],
};

export default CampaignPreviewData;
