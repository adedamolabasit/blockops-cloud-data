import React, { useEffect, useState } from "react";
import ListedNetwork from "./ListedNetwork";
import { NetworksList } from "../networks";
import { useNetwork } from "../context/network";
import { useTimer } from "../context/timer";
import { Spinner } from "./Spinner/Spinner";


function Network() {
  const networks = useNetwork();
  const date = useTimer();
  const [archiveSize, setArchiveSize] = useState(null);

  useEffect(() => {
    const url = 'https://s3.eu-west-1.amazonaws.com/data.blockops.network/composable/composable-12-11-2022.zip';

    fetch(url, {method: 'HEAD'})
    .then(response => response.headers.get('Content-Length'))
    .then(size => {
      console.log("cj",size)
      // Convert the size from bytes to megabytes
      const sizeInGB = size / 1000000000;
      // Display the size on the page
      setArchiveSize(sizeInGB);
    })
    .catch((err) => {
      console.log(err);
      setArchiveSize('unavailable');
    });
  }, []);

  return (
    <div className="px-28 w-screen">
      {/* header */}
      <div className="flex  justify-between item-center">
        <p className="font-bold text-3xl ">BlockOps snapshot</p>
        <div className="flex flex-col">
          <h1 className="text-xl font-Inter ">
            BROUGHT TO YOU BY{" "}
            <span className="text-[#0060FF] text-bold">Blockops </span>
            Network
          </h1>
          <p className="text-[#121212] mt-1 text-sm">
            A proof-of-stake infrastructure company - <br></br>we help you stake
            your DOT.
            <a
              href="/"
              className="text-[#0060FF] border-b-[1px] border-[#0060FF]"
            >
              Learn more.
            </a>
          </p>
        </div>
      </div>
      {/*  */}
      {/* empty box */}
      <div className="text-center mt-[100px] mb-6 text-2xl font-bold">{networks.network} Metadata</div>
      {/*  */}
      {/* table */}
      <div className="flex  justify-center">
        <table class="table-auto   w-[1200px]  ">
          {NetworksList.map(
            (network) =>
              networks.network === network.network && (
                <tbody>
                  {Object.keys(network.cloud_query).map((key) => {
                    return (
                      <tr className="h-[50px]  text-left shadow-md bg-white w-screen">
                        <td className="border border-black-900 pl-6">{key}</td>
                        <td className="border border-black-900 pl-6">
                          {
                            key === 'archive_size'
                            ?
                            archiveSize !== null ? `${archiveSize} GB` : <Spinner />
                            : 
                            network.cloud_query[key]
                          }
                        </td>
                      </tr>
                    );
                  })}
                  <tr className="h-[50px]  text-left shadow-md bg-white w-screen ">
                    <td className="border border-black-900 pl-6 text-[#0060FF]">Download Link</td>
                    <td className="border border-black-900 pl-6 text-[#0060FF]">
                      <a
                        href={`${network.link}composable-${date.getFullYear()}${
                          date.getMonth() + 1
                        }${date.getDate() - 1}.tgz`}
                      >
                        {`${network.link}composable-${date.getFullYear()}${
                          date.getMonth() + 1
                        }${date.getDate() - 1}.tgz`}
                      </a>
                    </td>
                  </tr>
                </tbody>
              )
          )}
        </table>
      </div>
      {/*  */}
      {/* listNetwork */}
      <div className="mb-[250px]">
        <ListedNetwork />
      </div>
      {/*  */}
    </div>
  );
}

export default Network;
