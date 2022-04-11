import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "react-bootstrap";
import { StoryModel } from "../../models/shared.model";
import styles from "./storyCard.module.scss";

function StoryCard({ story }: { story: StoryModel }) {
  return (
    <Link href={`stories/${story.id}`}>
      <a>
        <Card className={`p-2 ${styles.storyCardContainer}`}>
          <div className={styles.storyCardImage}>
            <Image src={story.coverImageURL} alt={story.title} layout="fill" />
          </div>
          <Card.Body>
            <div className={`pb-2 ${styles.storyCardCategory} `}>
              {story.category}
            </div>
            <div className={`pt-2 pb-3 ${styles.storyCardTitle} `}>
              {story.title}
            </div>
            <div className={` ${styles.storyCardSnippet} `}>
              {story.snippet}
            </div>
          </Card.Body>

          <div className={styles.storyCardAuthorContainer}>
            <div className={styles.storyCardAuthorAvatar}>
            <Image
              src={story.author.avatarURL}
              layout="fill"
            />
            </div>
            <div>
              <div className={styles.storyCardAuthorName}>
                {story.author.firstName} {story.author.lastName}
              </div>
              <p>{story.author.occupation}</p>
            </div>
          </div>
        </Card>
      </a>
    </Link>
  );
}

export default StoryCard;
