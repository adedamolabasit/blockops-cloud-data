import React from "react";

function HeroSectionB() {
  return (
    <div className=" w-screen">
      <div className="flex mx-auto justify-center align-center ">
        <h1 className="font-bold text-3xl  ">BlockOps Cloud Data</h1>
      </div>
      <div className="flex justify-center align-center ">
        <p className="font-normal text-sm text-[#5D5D5D] text-center w-[70%]   mt-5">
          A repository of polkadot node database snapshots - regularly updated
          <br></br>
          and fast to download from anywhere in the world
        </p>
      </div>
      <div className="flex justify-center align-center ">
        <button className="mt-[17px] bg-[#0060FF] w-[168px] h-[54px] hover:bg-[#0060FF90] rounded-lg text-[#FFFFFF]">
          Learn More
        </button>
      </div>
      <div className="flex flex mt-[55px] w-[1230px] h-[134px] mx-[100px] bg-[#FFFFFF] justify-center align-center shadow-xl px-[200px] py-[30px]">
      <h1 className="text-2xl ">
          BROUGHT TO YOU BY <span className="text-[#0060FF] text-bold">Nautilus</span>Technologies
        </h1>
      <div className="w-[2px] h-[45px] mr-[25px] bg-[#0C0E1F] font-bold drop-shadow-lg"></div>

        <p className="text-[#121212]  text-sm">
          A proof-of-stake infrastructure company - we help you stake your DOT.
         <a href="/" className="text-[#0060FF] border-b-[1px] border-[#0060FF]">Learn more.</a> 
        </p>
</div>
    </div>
  );
}

export default HeroSectionB;
