import React from "react";
import facebook from "../assets/001-facebook.svg";
import twitter from "../assets/003-twitter.svg";
import instagram from "../assets/004-instagram.svg";
import linkedin from "../assets/linkedin 1.svg";

function Footer() {
  return (
    <div className="bg-[#0C0E1F] h-[399px] w-screen mt-4 mb-6 mt-[140px] pt-[100px]">
      <div className="flex flex-col gap-[60px] md:flex-row md:px-[200px] items-center justify-between">
        <div className="flex flex-col ">
          <h1 className="font-bold text-3xl  text-white">BlockOps</h1>
          <div className="w-[128px] h-[2px] bg-[#FFFFFF]  mt-4 mb-6 font-bold"></div>
          <div className="text-[#FFFFFF80]">
            <p>
              Copyright 2022{" "}
              <a href="http://www.blockops.network/" className="text-[#0060FF]">
                blockops.network
              </a>
            </p>
            <p>All rights reserved</p>
          </div>
        </div>
        <div className="flex gap-[60px] text-white">
          <img src={facebook} alt="facebook" className="w-[20px] h-[20px]" />
          <img src={twitter} alt="twitter" className="w-[20px] h-[20px]" />
          <img src={instagram} alt="instagram" className="w-[20px] h-[20px]" />
          <img src={linkedin} alt="linkedin" className="w-[20px] h-[20px]" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
