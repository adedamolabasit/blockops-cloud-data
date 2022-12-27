import React from "react";





function ListedNetwork() {
  return (
    <>
      <h1 className="font-bold text-2xl mt-8">How to use</h1>
      <div>
      <p className="text-[#5D5D5D] ">
      Issue the following command to download and unpack the archive in one step:
      </p>
      <div className="flex items-stretch  w-[1200px] bg-black h-[111px] overflow-x-scroll px-6 my-6">
        <p className="text-white self-center">
        curl -o - -L https://dot-rocksdb.blockops.network/polkadot-12917839.RocksDb.tar.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot
        </p>
      </div>
    </div>
      <div>
      <p className="text-[#5D5D5D]">
      Or simply use the permalink:
      </p>
      <div className="flex items-stretch  w-[1200px] bg-black h-[111px] overflow-x-scroll px-6 my-6">
        <p className="text-white self-center">
        curl -o - -L https://dot-rocksdb.blockops.network/snapshot | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot
        </p>
      </div>
    </div>
      <div>
      <p className="text-[#5D5D5D]">
      Note: if applicable, replace /home/polkadot with the actual storage location.<br></br>

Then run the polkadot node:
      </p>
      <div className="flex items-stretch  w-[1200px] bg-black h-[111px] overflow-x-scroll px-6 my-6">
        <p className="text-white self-center">
        polkadot --chain=polkadot --database=RocksDb --unsafe-pruning --pruning=1000
        </p>
      </div>
    </div>
    <h1 className="font-bold text-2xl mt-8">More details</h1>

    <p className="text-[#5D5D5D] mb-[200px">
      nautilus.tech
      </p>

  
    </>
  
  );
}

export default ListedNetwork;
