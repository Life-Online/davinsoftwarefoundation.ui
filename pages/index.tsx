import type { NextPage } from "next";
import Body from "../components/body/index";
import Hero from "../components/sections/Hero";
import TitleCarousel from "../components/sections/TitleCarousel";

// import data
import TitleCarouselData from "../_data/titleSection";
import HeroSectionData from "../_data/heroSection";

const Home: NextPage = () => {
  return (
    <div className="container page-container">
      <TitleCarousel titleCarouselData={TitleCarouselData} />
      <Hero heroSectionData={HeroSectionData} />
      {/* <Body /> */}
    </div>
  );
};

export default Home;
