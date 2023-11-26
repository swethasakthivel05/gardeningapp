import React from "react";
import NavBar from "./NavBar";
import Varietiesofap from "./Varitiesofap";
import Footer from "./Footer";
const Vap = () => {
  return (
    <div
      style={{
        zIndex: 1,
      }}
    >
      <NavBar />
      <Varietiesofap />
      <Footer/>
    </div>
  );
};

export default Vap;
