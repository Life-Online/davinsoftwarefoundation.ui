import type { NextPage } from "next";
import Body from "../components/body/index";
import Hero from "../components/sections/Hero";
import TitleCarousel from "../components/sections/TitleCarousel";
import AboutPreview from "../components/sections/AboutPreview";

// import data
import TitleCarouselData from "../_data/TitleSection";
import HeroSectionData from "../_data/HeroSection";
import AboutPreviewData from "../_data/AboutPreviewSection";

const Home: NextPage = () => {
  return (
    <div className="container page-container">
      <TitleCarousel titleCarouselData={TitleCarouselData} />
      <Hero heroSectionData={HeroSectionData} />
      <AboutPreview aboutPreviewData={AboutPreviewData} />
      <Body />
    </div>
  );
};

export default Home;
