import React, { useState } from "react";
import styles from "./header.module.scss";
import Logo from "../../../assets/img/davin-logo.svg";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={`container ${styles.navHeader}`}>
      <nav className="flex items-center flex-wrap py-3">
        <Link href="/">
          <a className="inline-flex p-2 mr-4">
            <Image src={Logo} alt="davin-logo" height={35} width={279} />
          </a>
        </Link>

        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:flex lg:justify-between lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start mr-10  flex flex-col lg:h-auto">
            <Link href="#home">
              <a className="lg:inline-flex px-3 py-2 rounded text-black items-center justify-center ">
                Home
              </a>
            </Link>
            <Link href="#about">
              <a className="lg:inline-flex px-3 py-2 rounded text-black items-center justify-center ">
                About
              </a>
            </Link>
            <Link href="#exploring">
              <a className="lg:inline-flex px-3 py-2 rounded text-black items-center justify-center ">
                Campaign
              </a>
            </Link>
            <Link href="#stories">
              <a className="lg:inline-flex px-3 py-2 rounded text-black items-center justify-center ">
                Our Stories
              </a>
            </Link>
            <Link href="#contact">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black  items-center justify-center ">
                Contact
              </a>
            </Link>
          </div>
          <Link href="/donate">
            <a>
              <button
                type="button"
                className=" navBtn text-white bg-[#EB4C29]  focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-7 py-2.5 text-center mb-2"
              >
                Donate
              </button>
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
