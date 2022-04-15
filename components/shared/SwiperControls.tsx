import React from "react";
import { useSwiper } from "swiper/react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/outline";
import styles from "./swiperControls.module.scss";

function SwiperControls({ link = "/campaigns" }: { link?: string }) {
  const swiper = useSwiper();
  return (
    <div className={styles.swiperControlContainer}>
      <div className="d-flex">
        <div
          onClick={() => swiper.slidePrev()}
          className={styles.swiperControl}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          onClick={() => swiper.slideNext()}
          className={styles.swiperControl}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {/* {link ? (
        <Link href={link}>
          <a>
            <div className={styles.viewMoreButton}>
              View More <ArrowRightIcon className={`${styles.linkArrow}`} />
            </div>
          </a>
        </Link>
      ) : (
        ""
      )} */}
    </div>
  );
}

export default SwiperControls;
