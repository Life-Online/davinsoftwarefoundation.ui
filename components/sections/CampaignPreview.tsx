import React from "react";
import { CampaignPreviewProps } from "../../models/shared.model";
import SectionTag from "../shared/SectionTag";
import TitleCarousel from "./TitleCarousel";
import CampaignCard from "../shared/CampaignCard";
import SwiperSlider from "../shared/SwiperSlider";

function CampaignPreview({
  campaignPreviewData,
}: {
  campaignPreviewData: CampaignPreviewProps;
}) {
  const titleCarouselData = {
    title: campaignPreviewData.previewData.title,
    content: campaignPreviewData.previewData.text,
  };

  const CampaignCardArray: JSX.Element[] = [];
  campaignPreviewData.campaignCardData.map((cardData) => {
    CampaignCardArray.push(<CampaignCard campaignPreviewData={cardData} />);
  });

  console.log(CampaignCardArray);

  return (
    <section className="row">
      <div className="col-12">
        <SectionTag sectionTag={campaignPreviewData.sectionTag} />
      </div>
      <TitleCarousel
        titleCarouselData={titleCarouselData}
        titleSize="header1"
      />
      <div className="col-12 py-5 position-relative">
        <SwiperSlider carouselList={CampaignCardArray} />
      </div>
    </section>
  );
}

export default CampaignPreview;
