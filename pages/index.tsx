import type { NextPage } from "next";
import Hero from "../components/sections/Hero";
import SectionTitleLeft from "../components/shared/SectionTitleLeft";
import AboutPreview from "../components/sections/AboutPreview";
import CampaignPreview from "../components/sections/CampaignPreview";
import StoriesPreview from "../components/sections/StoriesPreview";
import CallToAction from "../components/sections/CallToAction";

// import data
import HomeTitleSectionData from "../_data/TitleSection";
import HeroSectionData from "../_data/HeroSection";
import AboutPreviewData from "../_data/AboutPreviewSection";
import CampaignPreviewData from "../_data/CampaignPreviewSection";
import StoriesPreviewData from "../_data/StoriesPreviewSection";
import CallToActionData from "../_data/CallToActionData";

const Home: NextPage = () => {
  return (
    <div className="container page-container">
      <SectionTitleLeft sectionTitlelData={HomeTitleSectionData} />
      <Hero heroSectionData={HeroSectionData} />
      <AboutPreview aboutPreviewData={AboutPreviewData} />
      <CampaignPreview campaignPreviewData={CampaignPreviewData} />
      {/* <StoriesPreview storiesPreview={StoriesPreviewData} /> */}
      <CallToAction CTAData={CallToActionData} />
    </div>
  );
};

export default Home;
