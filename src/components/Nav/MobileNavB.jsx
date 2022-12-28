import React, { useState } from "react";
import Link from 'next/link';
import External from "../../assets/svg/external.svg"
import './mobile-nav.scss';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { productLinks } from "./ProductNav";
import { networkLinks } from "./NetworkNav";

const MobileNavB = ({
    navOpen,
    closeNav,
}) => {
  const [openProducts, setOpenProducts] = useState(false);
  const [openNetworks, setOpenNetworks] = useState(false);
  return (
    <div className={`absolute overflow-scroll w-full bg-[black] text-xl z-50 mobile-menu ${navOpen ? "h-[100vw]" : "h-0"}`
    }>
      <ul
        className={`nav-list absolute ${navOpen ? 'block' : 'hidden'}`}
      > 
        <li onClick={() => closeNav()}>
          <a className={"flex flex-row gap-[3px]"} href="https://blockops-docs.gitbook.io/blockops">
            Documentation
            <img className="external-white ml-2" src={External} width='20px' height='20px' alt='' />
          </a>
        </li>
        <li onClick={() => closeNav()}>
          <Link href="https://blockops-docs.gitbook.io/blockops">Exclusive access</Link>
        </li>
        <li>
          <div className="cursor-pointer flex flex-row items-center" onClick={() => {
            setOpenProducts(!openProducts);
            setOpenNetworks(false)
          }}>
            Products
            <ChevronDownIcon className={`ml-1 h-5 w-5 ${openProducts ? "nav-open" : ""}`} aria-hidden="true" />
          </div>
          {
            <ul className={`${openProducts ? "block" : "hidden"}`}>
              {
                productLinks.map((link) => {
                  /* Use the `active` state to conditionally style the active item. */
                  return (
                    <li onClick={() => closeNav()}>
                      <a 
                        href={link.href}
                        className='options text-[#94a3b8] flex flex-col pl-2 py-1 text-lg'
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          }
        </li>
        {<li>
          <div className="cursor-pointer flex flex-row items-center" onClick={() => {
            setOpenNetworks(!openNetworks);
            setOpenProducts(false);
          }}>
            Networks
            <ChevronDownIcon className={`ml-1 h-5 w-5 ${openNetworks ? "nav-open" : ""}`} aria-hidden="true" />
          </div>
          {
            <ul className={`${openNetworks ? "block" : "hidden"}`}>
              {
                networkLinks.map((link) => {
                  /* Use the `active` state to conditionally style the active item. */
                  return (
                    <li onClick={() => closeNav()}>
                      <a
                        href={link.href}
                        className='options text-[#6b7280] flex flex-col pl-2 py-1 text-lg'
                        >
                        {link.label}
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          }
        </li>}
        <li onClick={() => closeNav()}>
          <Link href="/pricing">Pricing</Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileNavB;
