import React, { useState, useEffect } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import styles from "./header.module.scss";
import Logo from "../../../assets/img/davin-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ActivePageLinks } from "../../../models/home.model";

const topRoutes: { route: string; pathName: string; label: string }[] = [
  { route: "/", pathName: "home", label: "Home" },
  { route: "/about", pathName: "about", label: "About" },
  { route: "/campaigns", pathName: "campaigns", label: "Campaigns" },
  { route: "/stories", pathName: "stories", label: "Our Stories" },
  { route: "/contact", pathName: "contact", label: "Contact" },
];

const initialLinkState: ActivePageLinks = {
  home: false,
  about: false,
  campaigns: false,
  stories: false,
  contact: false,
};

function Header() {
  const [activePageLinks, setActivePageLinks] =
    useState<ActivePageLinks>(initialLinkState);

  const router = useRouter();

  useEffect((): void => {
    const updateActiveLinks = (): void => {
      const _activePageLinks: ActivePageLinks = { ...activePageLinks };
      const _activePath: string = router.pathname.substring(1);

      Object.keys(_activePageLinks).forEach(
        (key) => (_activePageLinks[key] = false)
      );

      if (router.pathname === "/") {
        _activePageLinks["home"] = true;
      } else {
        _activePageLinks[_activePath] = true;
      }

      setActivePageLinks(_activePageLinks);
    };

    updateActiveLinks();
  }, [router]);

  return (
    <Navbar expand="sm" className={styles.mainNav} as={"header"}>
      <Container>
        <nav className="d-flex align-items-center w-100 justify-content-center">
          <Link href="/">
            <a className="inline-flex p-2 mr-4">
              <Image src={Logo} alt="davin-logo" height={35} width={279} />
            </a>
          </Link>

          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar" className="justify-content-end">
            <div>
              {topRoutes.map((item) => (
                <Link href={`${item.route}`} key={item.route}>
                  <a
                    className={`${
                      activePageLinks?.[item.pathName] ? styles.active : ""
                    } px-3 py-2`}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
            <Link href="/donate">
              <a>
                <Button className={`${styles.navCta} px-4 py-2 ms-3`}>
                  Donate
                </Button>
              </a>
            </Link>
          </Navbar.Collapse>
        </nav>
      </Container>
    </Navbar>
  );
}

export default Header;
