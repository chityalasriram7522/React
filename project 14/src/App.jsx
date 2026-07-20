import React from "react";
import Home from "./assets/component/Home";
import About from "./assets/component/About";
import Login from "./assets/component/Login";
import Navbar from "./assets/component/Navbar";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home /></>
    },
    {
      path: "/about",
      element: <><Navbar/><About /></>
    },
    {
      path: "/login",
      element: <><Navbar/><Login /></>
    }
  ]);

  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;