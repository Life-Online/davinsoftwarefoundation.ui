import React from "react";
import ContentPreview from "../shared/contentPreview";
import { ContentPreviewProps } from "../../models/shared.model";

function AboutPreview({
  aboutPreviewData,
}: {
  aboutPreviewData: ContentPreviewProps;
}) {
  return (
    <section className="row py-5">
      <ContentPreview contentPreview={aboutPreviewData} />
    </section>
  );
}

export default AboutPreview;
