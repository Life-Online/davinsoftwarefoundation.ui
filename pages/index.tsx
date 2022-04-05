import type { NextPage } from "next";
import Body from "../components/body/index";
import TitleCarousel from "../components/sections/TitleCarousel";

// import data
import TitleCarouselData from "../_data/liftingData";

const Home: NextPage = () => {
  return (
    <div>
      <TitleCarousel titleCarouselData={TitleCarouselData} />
      <Body />
    </div>
  );
};

export default Home;
