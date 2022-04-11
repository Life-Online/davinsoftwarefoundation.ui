import React from "react";
import { StoriesPreviewProps } from "../../models/shared.model";
import SectionTag from "../shared/SectionTag";
import SectionTitleCenter from "../shared/SectionTitleCenter";
import StoryCardList from "../shared/StoryCardList";

function StoriesPreview({
  storiesPreview,
}: {
  storiesPreview: StoriesPreviewProps;
}) {
  return (
    <section className="row py-5">
      <div className="col-12 text-center">
        <SectionTag sectionTag={storiesPreview.sectionTitle.sectionTag} />
      </div>
      <div className="col-12 text-center">
        <SectionTitleCenter sectionTitlelData={storiesPreview.sectionTitle} />
      </div>
      <div className="col-12 py-3">
        <StoryCardList storyCardData={storiesPreview.stories} />
      </div>
    </section>
  );
}

export default StoriesPreview;
