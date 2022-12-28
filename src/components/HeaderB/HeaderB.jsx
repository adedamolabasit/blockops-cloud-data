import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from '../../assets/img/logo.png';
import AppBtn from "../Btn/AppBtn";
import MobileNavB from "../Nav/MobileNavB";
import External from "../../assets/svg/external.svg";
import ProductNav from "../Nav/ProductNav";
import NetworkNav from "../Nav/NetworkNav";
import './HeaderB.scss';

const HeaderB = () => {
  const [navOpen, setNavOpen] = useState(false);

  const mobileHeader = "w-100vw flex items-center justify-between px-5 mt-[-50px] h-[80px] border-b-[0.5px] border-black mb-10"
  const mobileNavStyle = "flex md:hidden"
  const mobileNavTrigger = "h-[24px] w-[24px] mt-[auto] cursor-pointer"
  const mobileSpan = "flex flex-col absolute mt-[5px] before:mt-[6px] after:mt-[8px]"

  return (
    <header className="w-[100vw]" >
      <MobileNavB closeNav={() => setNavOpen(false)} navOpen={navOpen} />
      <div className={`${mobileHeader}`}>
        <div className="">
          <Link passHref href="/">
            <div className="pr-[10px]">
              <Image src={Logo} width="166" height="40" alt="Blockops logo" className="cursor-pointer" />
            </div>
          </Link>
        </div>
        <div className="hidden md:flex flex-row justify-between items-center gap-[20px]">
            {/* Product Navigation */}
            <ProductNav />
            <NetworkNav />
            {/*  */}
            <Link
              className=""
              passHref
              href="/pricing"
              // href="https://blockops-docs.gitbook.io/blockops"
            >
              <div
                className={"cursor-pointer"}
              >
                Pricing
              </div>
            </Link>
            <a
              className={""}
              href="https://blockops-docs.gitbook.io/blockops"
            >
              <div className="flex gap-[2px]">
                Documentation
            
                <img src={External} alt="icon" width="20px" />
              </div>
            </a>
          <AppBtn link href='https://app.blockops.sh'>
            Exclusive acess
          </AppBtn>
        </div>
        <div className={`${mobileNavStyle}`}>
          <div
            onClick={() => setNavOpen(!navOpen)}
            className={`${mobileNavTrigger}`}
          >
            <span
              className={`${mobileSpan} ${navOpen ? "nav-active" : ""} mobile-nav-span`}
            >
              
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderB;
