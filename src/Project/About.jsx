import React from "react";
import Aboutcontent from "./Aboutcontent";
import NavBar from "./NavBar";
import Footer from "./Footer";
const About = () => {
  return (
    <div style={{ zIndex: 1 }}>
      <NavBar />
      <Aboutcontent />
      <Footer />
    </div>
  );
};

export default About;
