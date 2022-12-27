import React, { useEffect } from "react";
import HeroSectionB from "../components/HeroSectionB";
import Networks from "../components/Networks";
import Footer from "../components/Footer";
import HeaderB from "../components/HeaderB/HeaderB";
// import Header from "../components/Header/Header";

function Index() {
  useEffect(() => {
    document.head.innerHTML+=`
    <title>Blockops</title>
    <meta name='description' content='My description value!!!'/>
    <meta name='keywords' content='My keywords!!!'/>
    `
  }, []);
  return (
    <>
      <HeaderB />
      <HeroSectionB />
      <Networks />
      <Footer />
    </>
  );
}

export default Index;
