import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/outline";
import styles from "./viewMoreCard.module.scss";

function ViewMoreCard({ link }: { link: string }) {
  return (
    <Link href={link}>
      <a>
        <div className="container h-100">
          <div className="row h-100">
            <div className={`col-12 ${styles.viewMoreCard}`}>
              View More <ArrowRightIcon className={`${styles.linkArrow}`} />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ViewMoreCard;
