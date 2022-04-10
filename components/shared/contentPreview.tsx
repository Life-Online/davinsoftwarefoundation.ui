import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./contentPreview.module.scss";
import { ContentPreviewProps } from "../../models/shared.model";
import { Button } from "react-bootstrap";
import SectionTag from "./SectionTag";

const ContentPreview = ({
  contentPreview,
}: {
  contentPreview: ContentPreviewProps;
}) => {
  return (
    <div className="container">
      <div
        className={`row d-flex ${
          contentPreview.reverse ? "flex-row-reverse" : ""
        }`}
      >
        <div className="col-6">
          <div className={styles.previewImageContainer}>
            <Image
              className={styles.previewImage}
              src={`${contentPreview.sectionTitle.imageURL}`}
              alt={contentPreview.sectionTitle.title}
              width={480}
              height={596}
              layout="responsive"
            />
          </div>
        </div>
        <div className="col-6">
          <div className={styles.previewContentContainer}>
            <SectionTag sectionTag={contentPreview.sectionTitle.sectionTag} />
            <div className={styles.previewContentTitle}>
              {contentPreview.sectionTitle.title}
            </div>
            <div className="pt-3 pb-5">{contentPreview.sectionTitle.text}</div>
            {contentPreview.sectionTitle.link ? (
              <Link href={contentPreview.sectionTitle.link}>
                <a>
                  <Button className={`px-4 py-2 ${styles.actionButton}`}>
                    Learn More
                  </Button>
                </a>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPreview;
