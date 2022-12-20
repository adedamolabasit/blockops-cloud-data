import { useState, useContext, createContext } from "react";
//import { useNavigate } from "react-router-dom";

const NetworkContext = createContext();

const NetworkProvider = ({ children }) => {
 

  const [network, setNetwork] = useState("");

  const handleClick = (network) => {
    setNetwork(network);

  };

  return (
    <NetworkContext.Provider
      value={{ network, handleClick }}

    >
      {children}
    </NetworkContext.Provider>
  );
};

export default NetworkProvider;
export const useNetwork = () => useContext(NetworkContext);
