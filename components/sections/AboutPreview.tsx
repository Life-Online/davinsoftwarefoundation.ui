import React from "react";
import ContentPreview from "../shared/ContentPreview";
import { ContentPreviewProps } from "../../models/shared.model";

function AboutPreview({
  aboutPreviewData,
}: {
  aboutPreviewData: ContentPreviewProps;
}) {
  return (
    <section className="py-md-5 py-3">
      <ContentPreview contentPreview={aboutPreviewData} />
    </section>
  );
}

export default AboutPreview;
