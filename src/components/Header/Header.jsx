import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/img/logo.png";
import headerStyle from "./header.module.scss";
import AppBtn from "../Btn/AppBtn";
import MobileNav from "../Nav/MobileNav";
import ProductNav from "../Nav/ProductNav";
import NetworkNav from "../Nav/NetworkNav";
import External from "../../assets/svg/external.svg";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className={headerStyle.header}>
      <div className="flex justify-between items-center">
        <MobileNav closeNav={() => setNavOpen(false)} navOpen={navOpen} />
        <Link passHref href="/">
          <div>
            <Image
              src={Logo}
              width="166"
              height="40"
              alt="Blockops logo"
              className="cursor-pointer"
            />
          </div>
        </Link>
        <div className={`${headerStyle.header_content_action} `}>
          {/* Product Navigation */}
          <ProductNav />
          <NetworkNav />
          {/*  */}
          <Link
            passHref
            href="/pricing"
            // href="https://blockops-docs.gitbook.io/blockops"
          >
            <div
              className={`${headerStyle.header_content_action_link} cursor-pointer`}
            >
              Pricing
            </div>
          </Link>
          
          <a
            className={headerStyle.header_content_action_link}
            href="https://blockops-docs.gitbook.io/blockops"
          >
            <div className="flex mt-4">
            Documentation
         
         <img src={External} alt="icon" width="10px" />
            </div>
           


          </a>

          
         

          <AppBtn link href="https://app.blockops.sh">
            Exclusive access
          </AppBtn>
          {/*<AppButton link href="https://app.blockops.sh">
              Exclusive access
            </AppButton>*/}
        </div>
      </div>
      <div className={headerStyle["global-mobile-nav"]}>
        <div
          onClick={() => setNavOpen(!navOpen)}
          className={`${headerStyle["global-mobile-nav__trigger"]} ${
            headerStyle.light
          } ${navOpen ? headerStyle["is-active"] : ""}`}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
