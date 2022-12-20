import React from "react";

function HeroSectionB() {
  return (
    <div className=" w-screen">
      <div className="flex md:mx-auto justify-center align-center ">
        <h1 className="font-bold text-2xl md:text-3xl  ">BlockOps Cloud Data</h1>
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
    </div>
  );
}

export default HeroSectionB;
