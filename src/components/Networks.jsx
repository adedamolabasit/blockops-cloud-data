import React from "react";
import { networks } from "../networks";

function Networks() {
  return (
    <div>
      <div className="flex  flex-wrap justify-evenly  mt-[96px] w-screen px-[100px]">
        {networks.map((network) => {
          return (
            <button
              key={network.id}
              className="w-[358px] h-[274px] bg-[#0C0E1F] rounded-lg py-[44px] px-[30px] mr-[8px] drop-shadow-2xl shadow-xl  focus:border-[2px] focus:border-[#0060FF] ] my-[23px]"
            >
              <div className="flex flex-col">
                <h1 className="text-[#FFFFFF] text-start text-2xl">
                  {network.name}
                </h1>
                <div className=" w-[297px] h-[48px]">
                  <p className="text-[#FFFFFF90] text-start mt-[14px] text-base">
                    {network.description}
                  </p>
                </div>

                <button className="mt-[59px] w-[298px] h-[54px] bg-[#0060FF] hover:bg-[#0060FF90] rounded-lg text-[#FFFFFF]">
                  Download
                </button>
              </div>
            </button>
          );
        })}
      </div>
      <p className="px-[100px] font-semibold text-3xl pt-[103px]">
        Check out our app.blockops managed Polkadot and Kusama Validator service:
        safe, affordable and non-custodial.
      </p>
    </div>
  );
}

export default Networks;
