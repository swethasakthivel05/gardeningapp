import { createBrowserRouter } from "react-router-dom";
import NavBar from "./Project/NavBar";
import Linklogin from "./Linklogin";
import App from "./App";
import Linksignup from "./Linksignup";
//import Sample from "./Project/Sample";
const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
  },
  // { path: "./home", element: <Footer /> },
  { path: "/", element: <Linklogin /> },
  { path: "/signup", element: <Linksignup /> },
]);

export default router;
