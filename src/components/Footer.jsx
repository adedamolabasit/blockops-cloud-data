import React from "react";
import facebook from "../assets/001-facebook.png";
import twitter from "../assets/003-twitter.png";
import instagram from "../assets/004-instagram.png";
import linkedin from "../assets/linkedin 1.png";

function Footer() {
  return (
    <div className="bg-[#0C0E1F] h-[399px] w-screen  p-[119px] mt-4 mb-6 mt-[140px] ">
      <div className="flex justify-between">
        <div className="flex flex-col ">
          <h1 className="font-bold text-3xl  text-white">BlockOps</h1>
          <div className="w-[128px] h-[2px] bg-[#FFFFFF]  mt-4 mb-6 font-bold"></div>
          <div className="text-[#FFFFFF80]">
            <p>
              Copyright 2022{" "}
              <a href="nautilus.tech" className="text-[#0060FF]">
                nautilus.tech
              </a>
            </p>
            <p>All rights reserved</p>
          </div>
        </div>
        <div className="flex gap-10 text-white">
          <img src={facebook} alt="facebook" className="w-[15px] h-[15px]" />
          <img src={twitter} alt="twitter" className="w-[15px] h-[15px]" />
          <img src={instagram} alt="instagram" className="w-[15px] h-[15px]" />
          <img src={linkedin} alt="linkedin" className="w-[15px] h-[15px]" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
