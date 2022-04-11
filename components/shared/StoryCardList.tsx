import React from "react";
import StoryCard from "./StoryCard";
import { StoryModel } from "../../models/shared.model";
import styles from "storyCardList.module.scss";

function StoryCardList({ storyCardData }: { storyCardData: StoryModel[] }) {
  return (
    <div className="container-fluid">
      <div className="row">
        {storyCardData.map((story) => (
          <div className="col-4">
            <StoryCard story={story} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoryCardList;
