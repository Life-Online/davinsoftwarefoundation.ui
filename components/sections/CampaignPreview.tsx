import React from "react";
import {
  CampaignPreviewProps,
  SectionTitleProps,
} from "../../models/shared.model";
import SectionTag from "../shared/SectionTag";
import SectionTitleLeft from "../shared/SectionTitleLeft";
import CampaignCard from "../shared/CampaignCard";
import SwiperSlider from "../shared/SwiperSlider";

function CampaignPreview({
  campaignPreviewData,
}: {
  campaignPreviewData: CampaignPreviewProps;
}) {
  const CampaignCardArray: JSX.Element[] = [];
  campaignPreviewData.campaigns.map((cardData) => {
    CampaignCardArray.push(<CampaignCard campaignPreviewData={cardData} />);
  });

  return (
    <section className="row py-5">
      <div className="col-12">
        <SectionTag sectionTag={campaignPreviewData.sectionTitle.sectionTag} />
      </div>
      <SectionTitleLeft sectionTitlelData={campaignPreviewData.sectionTitle} />
      <div className="col-12 py-3 position-relative">
        <SwiperSlider carouselList={CampaignCardArray} link={"/campaigns"} />
      </div>
    </section>
  );
}

export default CampaignPreview;
