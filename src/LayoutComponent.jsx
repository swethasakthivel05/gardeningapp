// import React from "react";
// import NavBar from "./Project/NavBar";
// import Footer from "./Project/Footer";
// import Astheticplants from "./Project/Astheticplants";
// import Vegetables from "./Project/Vegetables";
// import Herbs from "./Project/Herbs";
// const LayoutComponents = ({ children }) => (
//   <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//     <NavBar /></div>
//     <div style={{ display: "flex", flexDirection: "row" }}>

//       <Astheticplants />
//       <Herbs/>
//       <Vegetables />
//     </div>
//     <div style={{ flex: 1 }}>
//     <Footer />
//  </div>
// );

// // export default LayoutComponents;
// import React from "react";
// import NavBar from "./Project/NavBar";
// import Footer from "./Project/Footer";
// import Astheticplants from "./Project/Astheticplants";
// import Vegetables from "./Project/Vegetables";

// const LayoutComponents = ({ children }) => (
//   <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//     {/* Move the NavBar to the top */}
//     <NavBar />

//     {/* Use a container div to wrap the aesthetic plants and vegetables */}
//     <div style={{ display: "flex", justifyContent: "space-between" }}>
//       {/* Apply space between the Astheticplants and Vegetables */}
//       <div style={{ marginRight: "20px" }}>
//         <Astheticplants />
//       </div>
//       <div style={{ marginLeft: "20px" }}>
//         <Vegetables />
//       </div>
//     </div>

//     {/* Move the Footer to the bottom */}
//     <Footer />
//   </div>
// );

// export default LayoutComponents;

// import React from "react";
// import NavBar from "./Project/NavBar";
// import Footer from "./Project/Footer";
// import Astheticplants from "./Project/Astheticplants";
// import Vegetables from "./Project/Vegetables";
// import Herbs from "./Project/Herbs";

// const LayoutComponents = ({ children }) => (
//   <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//     <NavBar />
//     <div style={{ display: "flex", justifyContent: "space-between" }}>
//       <Astheticplants />
//       <Herbs />
//       <Vegetables />
//     </div>
//     <Footer />
//   </div>
// );

// export default LayoutComponents;
import React, { Component } from "react";
import NavBar from "./Project/NavBar";
import Footer from "./Project/Footer";
import Astheticplants from "./Project/Astheticplants";
import Vegetables from "./Project/Vegetables";
import Herbs from "./Project/Herbs";
const LayoutComponents = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      //padding: " 20px" /* Add padding to create space on both sides */,
    }}
  >
    <NavBar />
    <br></br>
    <h1
      style={{
        zIndex: 1,
        color: "white",
      }}
    >
      <center>Life is better with a touch of green🌱💚</center>
    </h1>

    {/* <Popup /> */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "80px",
      }}
    >
      <Astheticplants />
      <Herbs />
      <Vegetables />
    </div>
    <Footer />
  </div>
);

export default LayoutComponents;
