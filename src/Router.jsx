import React from "react";
import { createBrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Project/LoginPage";
import Signup from "./Project/Signup";
import leaves from "./leaves.mp4";
import LayoutComponents from "./LayoutComponent";
import Vove from "./Project/Vove";
import Voh from "./Project/Voh";
import Vap from "./Project/Vap";
import About from "./Project/About";
import SwissDes from "./Project/SwissDes";
import AnthuriumDes from "./Project/AnthuriumDes";
import StringOfPearlsCare from "./Project/StringDes";
import Tillandsia from "./Project/TillandsialDes";
import Prayer from "./Project/PrayerDes";
import PeaceLilyCare from "./Project/PeaceLilyDes";
import BoragePlantCare from "./Project/BorageDes";
import DillPlantCare from "./Project/DillDes";
import PeppermintPlantCare from "./Project/PeppermintDes";
import RosemaryPlantCare from "./Project/RosemaryDes";
import HolyBasilPlantCare from "./Project/Tulsi";
import LavenderPlantCare from "./Project/Lavender";
import TomatoPlantCare from "./Project/TomatoDes";
import RedOnionPlantCare from "./Project/Onion";
import BeetPlantCare from "./Project/BeetrootDes";
import OrnamentalPepperCare from "./Project/ChilliDes";
import CarrotCare from "./Project/CarrotDes";
import CucuzzaSquashCare from "./Project/BottleDes";
const Layout = ({ children }) => (
  <div
    style={{
      position: "relative",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
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
    {children}
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Routes>
          <Route index element={<LoginPage />} />
        </Routes>
      </Layout>
    ),
    children: [],
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <Routes>
          <Route index element={<Signup />} />
        </Routes>
      </Layout>
    ),
    children: [],
  },
  {
    path: "/pathap",
    element: (
      <Layout>
        <Routes>
          <Route index element={<Vap />} />
        </Routes>
      </Layout>
    ),
    children: [],
  },
  {
    path: "/pathv",
    element: (
      <Layout>
        <Routes>
          <Route index element={<Vove />} />
        </Routes>
      </Layout>
    ),
    children: [],
  },
  {
    path: "/pathh",
    element: (
      <Layout>
        <Routes>
          <Route index element={<Voh />} />
        </Routes>
      </Layout>
    ),
    children: [],
  },
  {
    path: "/home",
    element: (
      <Layout>
        <Routes>
          {/* <Route index element={<NavBar />} /> */}
          <Route index element={<LayoutComponents />} />
        </Routes>
      </Layout>
    ),
    children: [],
  },
  {
    path: "/about",
    element: (
      <Routes>
        {/* <Route index element={<NavBar />} /> */}
        <Route index element={<About />} />
      </Routes>
    ),
    children: [],
  },
  {
    path: "/swiss",
    element: (
      <Routes>
        {/* <Route index element={<NavBar />} /> */}
        <Route index element={<SwissDes />} />
      </Routes>
    ),
    children: [],
  },
  {
    path: "/anthurium",
    element: (
      <Routes>
        {/* <Route index element={<NavBar />} /> */}
        <Route index element={<AnthuriumDes />} />
      </Routes>
    ),
    children: [],
  },
  {
    path: "/string",
    element: (
      <Routes>
        {/* <Route index element={<NavBar />} /> */}
        <Route index element={<StringOfPearlsCare />} />
      </Routes>
    ),
    children: [],
  },
  {
    path: "/tillandsia",
    element: (
      <Routes>
        {/* <Route index element={<NavBar />} /> */}
        <Route index element={<Tillandsia />} />
      </Routes>
    ),
    children: [],
  },
  {
    path: "/prayer",
    element: (
      <Routes>
        {/* <Route index element={<NavBar />} /> */}
        <Route index element={<Prayer />} />
      </Routes>
    ),
    children: [],
  },
  {
    path: "/peace",
    element: (
      <Routes>
        {/* <Route index element={<NavBar />} /> */}
        <Route index element={<PeaceLilyCare />} />
      </Routes>
    ),
    children: [],
  },
  {
    path: "/borage",
    element: (
      <Routes>
        {/* <Route index element={<NavBar />} /> */}
        <Route index element={<BoragePlantCare />} />
      </Routes>
    ),
    children: [],
  },
  {
    path: "/dill",
    element: (
      <Routes>
        {/* <Route index element={<NavBar />} /> */}
        <Route index element={<DillPlantCare />} />
      </Routes>
    ),
    children: [],
  },
  {
    path: "/pepper",
    element: (
      <Routes>
        {/* <Route index element={<NavBar />} /> */}
        <Route index element={<PeppermintPlantCare />} />
      </Routes>
    ),
    children: [],
  },
  {
    path: "/rosemary",
    element: (
      <Routes>
        {/* <Route index element={<NavBar />} /> */}
        <Route index element={<RosemaryPlantCare />} />
      </Routes>
    ),
    children: [],
  },
  {
    path: "/tulsi",
    element: (
      <Routes>
        {/* <Route index element={<NavBar />} /> */}
        <Route index element={<HolyBasilPlantCare />} />
      </Routes>
    ),
    children: [],
  },
  {
    path: "/lavender",
    element: (
      <Routes>
        {/* <Route index element={<NavBar />} /> */}
        <Route index element={<LavenderPlantCare />} />
      </Routes>
    ),
    children: [],
  },
  {
    path: "/bottle",
    element: (
      <Routes>
        {/* <Route index element={<NavBar />} /> */}
        <Route index element={<CucuzzaSquashCare />} />
      </Routes>
    ),
    children: [],
  },
  {
    path: "/carrot",
    element: (
      <Routes>
        {/* <Route index element={<NavBar />} /> */}
        <Route index element={<CarrotCare />} />
      </Routes>
    ),
    children: [],
  },
  {
    path: "/chilli",
    element: (
      <Routes>
        {/* <Route index element={<NavBar />} /> */}
        <Route index element={<OrnamentalPepperCare />} />
      </Routes>
    ),
    children: [],
  },
  {
    path: "/beetroot",
    element: (
      <Routes>
        {/* <Route index element={<NavBar />} /> */}
        <Route index element={<BeetPlantCare />} />
      </Routes>
    ),
    children: [],
  },
  {
    path: "/onion",
    element: (
      <Routes>
        {/* <Route index element={<NavBar />} /> */}
        <Route index element={<RedOnionPlantCare />} />
      </Routes>
    ),
    children: [],
  },
  {
    path: "/tomato",
    element: (
      <Routes>
        {/* <Route index element={<NavBar />} /> */}
        <Route index element={<TomatoPlantCare />} />
      </Routes>
    ),
    children: [],
  },
]);

export default router;
