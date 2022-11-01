import React from "react";

function HeroSection() {
  return (
    <div className="flex px-[100px]">
      <div className="flex flex-col ">
        <h1 className="font-bold text-3xl ">BlockOps</h1>
        <p className="font-normal text-sm text-[#5D5D5D] w-[70%]  mt-5">
          A repository of polkadot node database snapshots - regularly updated
          and fast to download from anywhere in the world
        </p>
        <button className="mt-[43px] bg-[#0060FF] w-[168px] h-[54px] hover:bg-[#0060FF90] rounded-lg text-[#FFFFFF]">
            Learn More
        </button>
      </div>
      <div className="w-[2px] h-[150px] bg-[#0C0E1F] font-bold"></div>
      <div className="flex flex-col ml-[74px]">
        <h1 className="text-3xl font-Inter ">
          BROUGHT TO YOU BY <span className="text-[#0060FF] text-bold">Nautilus</span>Technologies
        </h1>
        <p className="text-[#121212] mt-10 text-sm">
          A proof-of-stake infrastructure company - we help you stake your DOT.
         <a href="/" className="text-[#0060FF] border-b-[1px] border-[#0060FF]">Learn more.</a> 
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
