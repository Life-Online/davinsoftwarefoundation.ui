import type { NextPage } from "next";
import DonateContainer from "../components/sections/DonateContainer";
import DonationData from "../_data/DonationData";

const Donate: NextPage = () => {
  return (
    <div className="container page-container">
      <DonateContainer donationData={DonationData} />
    </div>
  );
};

export default Donate;
