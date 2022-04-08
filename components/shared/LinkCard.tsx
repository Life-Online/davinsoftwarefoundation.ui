import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./linkCard.module.scss";
import { ArrowRightIcon } from "@heroicons/react/outline";
import EmphasizedText from "../shared/EmphasizedText";
import { LinkCardProps } from "../../models/shared.model";

const LinkCard = ({ linkCardData }: LinkCardProps) => {
  return (
    <div className={`card ${styles.linkCard}`}>
      <Link href={`/${linkCardData.link}`}>
        <a>
          <Image
            src={linkCardData.imageURL}
            className={`card-img-top p-1 ${styles.linkCardImage}`}
            alt={linkCardData.text}
            width={224}
            height={137}
            layout="responsive"
          />
          <div className={`p-2 mx-2 ${styles.linkCardBody}`}>
            <EmphasizedText
              text={linkCardData.text}
              emphasizedText={linkCardData.emphasizedText}
            />
            <ArrowRightIcon className={`${styles.linkCardArrow}`} />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default LinkCard;
