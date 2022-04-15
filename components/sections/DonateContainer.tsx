import React from "react";
import { DonationProps } from "../../models/shared.model";
import ContentPreview from "../shared/ContentPreview";
import DonateCard from "../shared/DonateCard";

function DonateContainer({ donationData }: { donationData: DonationProps }) {
  return (
    <section className="row py-3 py-md-5">
      <div className="col-12 col-md-6">
        <ContentPreview contentPreview={donationData} />
      </div>
      <div className="col-12 col-md-6">
        <DonateCard donationData={donationData} />
      </div>
    </section>
  );
}

export default DonateContainer;
