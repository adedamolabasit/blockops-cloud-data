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
      <div className="flex flex-col mx-auto w-[95vw] sm:flex-row mt-[55px] h-[auto] bg-[#FFFFFF] justify-center align-center shadow-xl md:px-[50px] py-[30px]">
        <h1 className="text-3xl mb-[20px] px-10 text-center font-bold px-2 sm:text-lg ">
          BROUGHT TO YOU BY <span className="text-[#0060FF] text-bold">Blockops</span> Network
        </h1>
        <div className="hidden sm:block w-[2px] h-auto mr-[25px] bg-[#0C0E1F] font-bold drop-shadow-lg"></div>

        <p className="px-6 text-center text-lg sm:text-left text-[#121212] text-xs md:text-lg">
          We help you build, architect, and maintain scalable blockchain nodes for your organization. 
          Our team has expertise in the design and maintenance of blockchain node infrastructure, 
          ensuring that your nodes are reliable and perform at their best.
         <a href="/" className="text-[#0060FF] border-b-[1px] border-[#0060FF]">Learn more.</a> 
        </p>
      </div>
    </div>
  );
}

export default Networks;
