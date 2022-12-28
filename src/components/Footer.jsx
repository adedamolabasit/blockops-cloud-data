import React from "react";
import facebook from "../assets/001-facebook.svg";
import twitter from "../assets/003-twitter.svg";
import instagram from "../assets/004-instagram.svg";
import linkedin from "../assets/linkedin 1.svg";

function Footer() {
  return (
    <div className="bg-[#0C0E1F] h-auto w-screen mt-4 mb-6 mt-[140px] px-[50px] pt-[80px] pb-[50px]">

      <div className="">
        <div className="hidden sm:block w-[2px] h-auto mr-[25px] bg-[#0C0E1F] font-bold drop-shadow-lg"></div>

        {/*<p className="px-6 text-center text-lg sm:text-left text-[#121212] text-xs md:text-lg">
          We help you build, architect, and maintain scalable blockchain nodes for your organization. 
          Our team has expertise in the design and maintenance of blockchain node infrastructure, 
          ensuring that your nodes are reliable and perform at their best.
         <a href="/" className="text-[#0060FF] border-b-[1px] border-[#0060FF]">Learn more.</a> 
        </p>*/}
      </div>

      <div className="flex flex-col gap-[30px] lg:flex-row lg:justify-between lg:pr-[50px] items-center">
        <div className="flex flex-col items-center md:items-start md:w-[600px]">
          <h1 className="text-lg md:text-3xl lg:text-justify mb-[5px] text-white text-center font-bold sm:text-lg md:w-[600px] ">
            Brought to you by <span className="text-[#0060FF] text-bold">Blockops Network</span>
          </h1>
          {/*<h1 className="font-bold text-3xl  text-white">BlockOps</h1>*/}
          <div className="w-[350px] md:w-[600px] h-[2px] bg-[#FFFFFF]  mt-4 mb-6 font-bold"></div>
          <div className="text-[#FFFFFF80]">
            <p className="text-md text-left md:text-lg mb-[10px]">
              We help you build, architect, and maintain scalable blockchain nodes for your organization. 
              Our team has expertise in building and maintaining blockchain node infrastructure, 
              ensuring that your nodes are reliable and perform at their best.
              <a href="/" className="text-[#0060FF] border-b-[1px] border-[#0060FF]"> Learn more.</a>
            </p>
          </div>
        </div>
        <div className="flex gap-[60px] text-white">
          <img src={facebook} alt="facebook" className="w-[20px] h-[20px]" />
          <img src={twitter} alt="twitter" className="w-[20px] h-[20px]" />
          <img src={instagram} alt="instagram" className="w-[20px] h-[20px]" />
          <img src={linkedin} alt="linkedin" className="w-[20px] h-[20px]" />
        </div>
      </div>
      <div className="w-full mt-[30px] text-[#FFFFFF80]">
        <p>
          Copyright 2022 {""}
          <a href="http://www.blockops.network/" className="text-[#0060FF]">
            Blockops Network Inc
          </a>
        </p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
