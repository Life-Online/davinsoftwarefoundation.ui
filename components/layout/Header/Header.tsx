import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import styles from "./header.module.scss";
import Logo from "../../../assets/img/davin-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ActivePageLinks } from "../../../models/home.model";

const topRoutes: { route: string; pathName: string; label: string }[] = [
  { route: "/", pathName: "home", label: "Home" },
  // { route: "/about", pathName: "about", label: "About" },
  // { route: "/campaigns", pathName: "campaigns", label: "Campaigns" },
  // { route: "/stories", pathName: "stories", label: "Our Stories" },
  // { route: "/contact", pathName: "contact", label: "Contact" },
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
  const [expanded, setExpanded] = useState<boolean>(false);

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
    <header
      className="position-fixed w-100 top-0"
      style={{
        zIndex: 1000,
        background: "white",
        height: expanded ? "100vh" : "initial",
      }}
    >
      <Container>
        <Navbar
          expand="md"
          className={`${styles.mainNav} d-flex align-items-center w-100 flex-md-row flex-column`}
          as={"header"}
          collapseOnSelect
          expanded={expanded}
        >
          <div className="d-flex align-items-center w-100 justify-content-between">
            <Navbar.Brand
              href="/"
              className={`inline-flex py-2 px-md-2 mr-4 ${styles.logoContainer}`}
            >
              <Image
                src={Logo}
                alt="davin-logo"
                height={35}
                width={279}
                layout={"responsive"}
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="main-navbar"
              onClick={() => setExpanded(expanded ? false : true)}
            />
          </div>
          <Navbar.Collapse
            id="main-navbar"
            className={`${styles.navCollapse} justify-content-md-end`}
          >
            <Nav>
              <div className="d-flex flex-column flex-md-row mt-3 mt-md-0">
                {topRoutes.map((item) => (
                  <Nav.Item
                    key={item.route}
                    className={`${
                      activePageLinks?.[item.pathName] ? styles.active : ""
                    } px-3 py-2 text-center`}
                    onClick={() => setExpanded(false)}
                  >
                    <Nav.Link
                      eventKey={item.route}
                      as={Link}
                      href={`${item.route}`}
                    >
                      {item.label}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </div>
              <Link href="/donate">
                <a>
                  <Button
                    className={`${styles.navCta} px-4 py-2 ms-md-3 ms-0 mt-3 mt-md-0`}
                    onClick={() => setExpanded(false)}
                  >
                    Donate
                  </Button>
                </a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
