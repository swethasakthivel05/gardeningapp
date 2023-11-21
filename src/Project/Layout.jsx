import React from "react";
import leaves from "./leaves.mp4";

const Layout = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={leaves} type="video/mp4" />
      </video>
    </div>
  );
};

export default Layout;
