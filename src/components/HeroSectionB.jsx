import React from "react";

function HeroSectionB() {
  return (
    <div className="w-screen">

      <div className="flex md:mx-auto justify-center align-center ">
        <h1 className="font-bold text-2xl md:text-3xl  ">BlockOps Cloud Data</h1>
      </div>
      <div className="flex justify-center align-center w-full ">
        <p className="font-normal text-lg text-[black] text-center px-5 md:px-[50px] md:max-w-[60%] font-bold mt-10">
          A well-maintained repository of archived blockchain data for our supported networks, 
          updated daily to enable fast syncing of your blockchain data from anywhere in the world.
        </p>
      </div>
      <div className="flex justify-center align-center ">
        <a href="https://blockops-docs.gitbook.io/blockops">
          <button className="mt-[17px] bg-[#0060FF] w-[168px] h-[54px] hover:bg-[#0060FF90] rounded-lg text-[#FFFFFF]">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
}

export default HeroSectionB;
