import React from "react";
import ContentPreview from "../shared/contentPreview";
import { PreviewData } from "../../models/shared.model";

function AboutPreview({ aboutPreviewData }: { aboutPreviewData: PreviewData }) {
  return (
    <section className="row">
      <ContentPreview
        previewData={aboutPreviewData}
        reverse={false}
        sectionTag={"About Us"}
      />
    </section>
  );
}

export default AboutPreview;
