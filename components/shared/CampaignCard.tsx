import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DateTime } from "luxon";
import { Button } from "react-bootstrap";
import styles from "./campaignCard.module.scss";
import { CampaignModel } from "../../models/shared.model";

function CampaignCard({
  campaignPreviewData,
}: {
  campaignPreviewData: CampaignModel;
}) {
  const _date = DateTime.fromISO(campaignPreviewData.date);
  const campaignDate = _date.toLocaleString(DateTime.DATE_FULL);

  return (
    <div className={`container p-2 ${styles.exploreCardContainer} `}>
      <div className="row h-100">
        <div className="col-5">
          <div className="position-relative w-100 h-100">
            <Image
              src={campaignPreviewData.imageURL}
              alt={campaignPreviewData.title}
              className={styles.campaignImage}
              layout="fill"
            />
          </div>
        </div>
        <div className="col-7">
          <div className="h-100 d-flex flex-column justify-content-between py-3 pe-3">
            <div className="">
              <div className={styles.campaingTitle}>
                {campaignPreviewData.title}
              </div>
              <div className={styles.campaingBody}>
                {campaignPreviewData.body}
              </div>
              <div className={styles.campaingDate}>
                {" "}
                <span className={styles.bolder}>Date:</span> {campaignDate}
              </div>
            </div>
            <div className="">
              <Link href={"/"}>
                <a>
                  <Button className={`px-4 py-2 ${styles.actionButton}`}>
                    Details
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignCard;
