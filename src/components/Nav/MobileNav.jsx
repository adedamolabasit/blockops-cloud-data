import React, { useEffect } from "react";
import navStyle from "./mobile-nav.module.scss";
import External from "../../assets/svg/external.svg"
import headerStyle from "../../components/Header/header.module.scss";

import { gsap } from "gsap";
import Link from "next/link";
const MobileNav = ({
  navOpen,
  closeNav,
}) => {
  useEffect(() => {
    // if (this.mobileNavIsActive) this.$store.commit('nav/updateMobileNavStatus', false)
    // else this.$store.commit('nav/updateMobileNavStatus', true)

    let mobileNavMenu = document.querySelector(
      `.${navStyle["global-mobile-nav__menu"]}`
    );
    let mobileNavMenuList = document.querySelectorAll(
      `.${navStyle["global-mobile-nav__menu"]} ul > li`
    );
    /*let mobileNavMenuButtons = document.querySelectorAll(
      `.${navStyle["global-mobile-nav__menu"]} ul > li button`
    );*/

    let mobileNavMenuTimeline = gsap.timeline({});

    if (navOpen) {
      mobileNavMenuTimeline
        .to(mobileNavMenu, {
          duration: 0.8,
          height: "100.8vh",
          ease: "expo.out",
        })
        .from(
          mobileNavMenuList,
          { duration: 1, y: 30, stagger: 0.2, opacity: 0, ease: "power3.out" },
          "-=0.8"
        );
    } else {
      mobileNavMenuTimeline.to(mobileNavMenu, {
        duration: 0.8,
        height: "0",
        ease: "expo.inOut",
      });
    }
  }, [navOpen]);
  return (
    <div className={navStyle["global-mobile-nav__menu"]}>
      <ul
        className={`mt-7 ${navStyle["parent-list"]} ${
          navOpen ? navStyle["is-active"] : ""
        }`}
      >
        
       
           
     
        <li onClick={() => closeNav()}>
          <a className={headerStyle.header_content_action_link} href="https://blockops-docs.gitbook.io/blockops">
            Documentation
            <img src={External} alt='' />
          </a>
        </li>
        <li onClick={() => closeNav()}>
          <Link href="https://blockops-docs.gitbook.io/blockops">Exclusive access</Link>
        </li>
        <li onClick={() => closeNav()}>
          <Link href="https://data.blockops.network/">Products</Link>
        </li>
        <li onClick={() => closeNav()}>
          <Link href="/pricing">Pricing</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
