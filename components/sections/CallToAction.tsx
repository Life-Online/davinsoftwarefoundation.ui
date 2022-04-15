import React from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { CallToActionProps } from "../../models/shared.model";
import styles from "./callToAction.module.scss";

function CallToAction({ CTAData }: { CTAData: CallToActionProps }) {
  return (
    <section className="row pb-5 d-none d-md-flex">
      <div className="col-8 pe-0">
        <div className={styles.CTAMessageContainer}>
          <div className={styles.CTAMessage}>{CTAData.message}</div>
          <div className={styles.links}>
            {CTAData.links.map((link) => (
              <Link href={link.link}>
                <a>
                  <Button
                    className={`${
                      link.style === "primary"
                        ? styles.primaryButton
                        : styles.secondaryButton
                    } px-4 py-2`}
                  >
                    {link.text}
                  </Button>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="col-4 ps-0">
        <div
          className={styles.CTAImageContianer}
          style={{ backgroundImage: `url(${CTAData.imageURL})` }}
        >
          <div className={styles.CTAImageBorder}></div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
