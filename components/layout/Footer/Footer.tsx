import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import AltLogo from "../../../assets/img/davin-logo-alt.svg";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <section className={`container-fluid py-5 ${styles.footerContainer}`}>
      <div className="row py-3">
        <div className="col-12">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-12 py-3 py-md-5 pe-md-5">
                <Link href="/home">
                  <a>
                    <Image
                      src={AltLogo}
                      alt="davin-logo"
                      height={35}
                      width={279}
                    />
                  </a>
                </Link>
                <p className="mt-2 py-3 text-white">
                  We’re bridging the technological gap that exists in African
                  communities.
                </p>
                <div className="d-flex align-items-center">
                  <Link href="/home">
                    <a>
                      <FaFacebookF className={styles.socialLinks} />
                    </a>
                  </Link>
                  <Link href="/home">
                    <a>
                      <FaInstagram className={styles.socialLinks} />
                    </a>
                  </Link>
                  <Link href="/home">
                    <a>
                      <FaTwitter className={styles.socialLinks} />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-7 col-12">
                <div className="row">
                  <div className={`col`}>
                    <h6 className={styles.footerHeader}>Foundation</h6>
                    <ul
                      className={`flex flex-column  justify-center items-center  ${styles.footerFoundationUl} `}
                    >
                      <li>
                        <Link href="/home">
                          <a>Home</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about">
                          <a>About</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/campaigns">
                          <a>Campaigns</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            Careers{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ width: "1rem" }}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={`col`}>
                    <h6 className={styles.footerHeader}>Get Involved</h6>
                    <ul className="flex flex-column   justify-center items-center ">
                      <li>
                        <Link href="/donate">
                          <a>Donate</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/volunteer">
                          <a>Volunteer</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={`col`}>
                    <h6 className={styles.footerHeader}>Help</h6>
                    <ul className="flex flex-column justify-center items-center ">
                      <li>
                        <Link href="/contact">
                          <a>Contact</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className={`container pt-3 d-flex justify-content-between ${styles.copyright}`}
              >
                <p>
                  Copyright &amp; 2022 Davin Software Foundation. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
