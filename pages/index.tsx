import type { NextPage } from "next";
import Body from "../components/body/index";
import Hero from "../components/sections/Hero";
import SectionTitleLeft from "../components/shared/SectionTitleLeft";
import AboutPreview from "../components/sections/AboutPreview";
import CampaignPreview from "../components/sections/CampaignPreview";
import StoriesPreview from "../components/sections/StoriesPreview";

// import data
import HomeTitleSectionData from "../_data/TitleSection";
import HeroSectionData from "../_data/HeroSection";
import AboutPreviewData from "../_data/AboutPreviewSection";
import CampaignPreviewData from "../_data/CampaignPreviewSection";
import StoriesPreviewData from "../_data/StoriesPreviewSection";

const Home: NextPage = () => {
  return (
    <div className="container page-container">
      <SectionTitleLeft sectionTitlelData={HomeTitleSectionData} />
      <Hero heroSectionData={HeroSectionData} />
      <AboutPreview aboutPreviewData={AboutPreviewData} />
      <CampaignPreview campaignPreviewData={CampaignPreviewData} />
      <StoriesPreview storiesPreview={StoriesPreviewData} />
      <Body />
    </div>
  );
};

export default Home;
