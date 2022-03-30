import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import image from "../../../assets/img/Group 2.png";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <section id="contact" className={`  py-3 ${styles.footerContainer} `}>
      <div className={`container pt-4 `}>
        <div className="row ">
          <div className={`col-5   py-5 ${styles.footerColOne} `}>
            <Link href="#home">
              <a>
                <Image src={image} alt="" />
              </a>
            </Link>
            <p className={` text-[#fff] ${styles.footerColOneText} `}>
              We’re bridging the technological gap that exists in African
              communities.
            </p>
            <div className="w-[104px] h-[24px] flex justify-around items-center ">
              <FaFacebookF className="text-[#807c7c] text-[20px]" />
              <FaInstagram className="text-[#807c7c] text-[20px]" />
              <FaTwitter className="text-[#807c7c] text-[20px]" />
            </div>
          </div>
          <div className={`col-7 ${styles.footerColTwo} `}>
            <div className="row">
              <div className={`col ${styles.footerFoundation} `}>
                <h6 className={`${styles.footerHeader} text-center`}>
                  Foundation
                </h6>
                <ul
                  className={`flex flex-column  justify-center items-center  ${styles.footerFoundationUl} `}
                >
                  <li>
                    <Link href="#home">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#home">
                      <a>Campaign</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#home">
                      <a>Careers</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#home">
                      <a>About</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={`col ${styles.footerInvolved} `}>
                <h6 className={`${styles.footerHeader} text-center`}>
                  Get Involved
                </h6>
                <ul className="flex flex-column   justify-center items-center ">
                  <li>
                    <Link href="#home">
                      <a>Donate</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#home">
                      <a>Volunteer</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={`col ${styles.footerHelp} `}>
                <h6 className={`${styles.footerHeader} text-center`}>Help</h6>
                <ul className="flex flex-column   justify-center items-center ">
                  <li>
                    <Link href="#home">
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#home">
                      <a>FAQs</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container w-[80%] mx-auto h-[38px] flex flex-row justify-between border-t-[1px] border-[#807c7c] pt-3  ">
        <div>
          <p className="font-normal text-[16px] text-[#807c7c]">
            Copyright &amp; 2022 Davin Software Foundation.All right reserved{" "}
          </p>
        </div>
        <div>
          <p className="font-normal text-[16px] text-[#807c7c]">
            Terms and Conditions . Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
