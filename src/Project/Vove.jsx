import React from "react";
import NavBar from "./NavBar";
import Varietiesofvege from "./Varietiesofvege";
import Footer from "./Footer";
const Vap = () => {
  return (
    <div
      style={{
        zIndex: 1,
      }}
    >
      <NavBar />
      <Varietiesofvege />
      <Footer />
    </div>
  );
};

export default Vap;
