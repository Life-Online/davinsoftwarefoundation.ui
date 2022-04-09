import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./contentPreview.module.scss";
import { ContentPreviewProps } from "../../models/shared.model";
import { Button } from "react-bootstrap";
import SectionTag from "./SectionTag";

const ContentPreview = ({
  previewData,
  reverse,
  sectionTag,
}: ContentPreviewProps) => {
  return (
    <div className="container">
      <div className={`row d-flex ${reverse ? "flex-row-reverse" : ""}`}>
        <div className="col-6">
          <div className={styles.previewImageContainer}>
            <Image
              className={styles.previewImage}
              src={`${previewData.imageURL}`}
              alt={previewData.title}
              width={480}
              height={596}
              layout="responsive"
            />
          </div>
        </div>
        <div className="col-6">
          <div className={styles.previewContentContainer}>
            <SectionTag sectionTag={sectionTag} />
            <div className={styles.previewContentTitle}>
              {previewData.title}
            </div>
            <div className="pt-3 pb-5">{previewData.text}</div>
            {previewData.link ? (
              <Link href={previewData.link}>
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
