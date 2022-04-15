import React from "react";
import StoryCard from "./StoryCard";
import { StoryModel } from "../../models/shared.model";
import styles from "storyCardList.module.scss";

function StoryCardList({ storyCardData }: { storyCardData: StoryModel[] }) {
  return (
    <div className="row">
      {storyCardData.map((story) => (
        <div className="col-12 col-md-4 mt-3 mt-md-0">
          <StoryCard story={story} />
        </div>
      ))}
    </div>
  );
}

export default StoryCardList;
