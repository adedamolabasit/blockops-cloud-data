import React from "react";
import { NetworksList } from "../networks";
import { useNavigate } from "react-router-dom";
import { useNetwork } from "../context/network";


function Networks() {
  const navigate = useNavigate();
  const networks = useNetwork();
 

  return (
    <div>
      <div className="flex  flex-wrap justify-center  mt-[96px] w-screen gap-[40px] ">
        {NetworksList.map((network) => {
          return (
            <button
              key={network.id}
              onClick={() => {
                networks.handleClick(network.network);
                navigate("/network");
              }}
              className="w-[358px] h-[274px] bg-[#0C0E1F] rounded-lg py-[44px] px-[30px] mr-[8px] drop-shadow-2xl shadow-xl  focus:border-[2px] focus:border-[#0060FF] ] my-[23px]"
            >
              <div className="flex flex-col">
                <h1 className="text-[#FFFFFF] text-start text-2xl">
                  {network.network}
                </h1>
                <div className=" w-[297px] h-[48px]">
                  <p className="text-[#FFFFFF90] text-start mt-[14px] text-base">
                    {network.details}
                  </p>
                </div>

                <button
                  onClick={() => navigate(`/network/`)}
                  className="mt-[59px] w-[298px] h-[54px] bg-[#0060FF] hover:bg-[#0060FF90] rounded-lg text-[#FFFFFF]"
                >
                  Download
                </button>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Networks;
