import React from "react";
import NavBar from "./Project/NavBar";
import Footer from "./Project/Footer";
import Sample from "./Project/Sample";

const LayoutComponents = ({ children }) => (
  <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <NavBar />
    <div style={{ flex: 1 }}>{children}</div>
    <Sample />

    <div style={{ flex: 1 }}>{children}</div>
    <Footer />
  </div>
);

export default LayoutComponents;
