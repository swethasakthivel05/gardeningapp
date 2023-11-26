import React from "react";
import NavBar from "./Project/NavBar";
import Footer from "./Project/Footer";
import Astheticplants from "./Project/Astheticplants";
import Vegetables from "./Project/Vegetables";
import Herbs from "./Project/Herbs";
import Popup from "./Project/Popup";
const Home = () => {
  return (
    <div>
      <NavBar />
     {/* <Popup /> */}
      <Astheticplants />
      <Vegetables />
      <Herbs />
      <Footer />
    </div>
  );
};

export default Home;
