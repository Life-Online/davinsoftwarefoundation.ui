import type { NextPage } from "next";
import Body from "../components/body/index";
import Hero from "../components/sections/Hero";
import TitleCarousel from "../components/sections/TitleCarousel";
import AboutPreview from "../components/sections/AboutPreview";
import CampaignPreview from "../components/sections/CampaignPreview";

// import data
import TitleCarouselData from "../_data/TitleSection";
import HeroSectionData from "../_data/HeroSection";
import AboutPreviewData from "../_data/AboutPreviewSection";
import CampaignPreviewData from "../_data/CampaignPreviewSection";

const Home: NextPage = () => {
  return (
    <div className="container page-container">
      <TitleCarousel
        titleCarouselData={TitleCarouselData}
        titleSize="display"
      />
      <Hero heroSectionData={HeroSectionData} />
      <AboutPreview aboutPreviewData={AboutPreviewData} />
      <CampaignPreview campaignPreviewData={CampaignPreviewData} />

      <Body />
    </div>
  );
};

export default Home;
