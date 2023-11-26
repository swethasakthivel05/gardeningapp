import React from "react";
import NavBar from "./NavBar";
import Varietiesofherbs from "./Varietiesofherbs";
import Footer from "./Footer";
const Vap = () => {
  return (
    <div
      style={{
        zIndex: 1,
      }}
    >
      <NavBar />
      <Varietiesofherbs />
      <Footer/>
    </div>
  );
};

export default Vap;
