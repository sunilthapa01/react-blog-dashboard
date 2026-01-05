import React from "react";
import Navbar from "./Components/Navbar";
import Tabs from "./Components/Tabs";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex w-full">
      <div className="w-20%">
        <Tabs />
      </div>
      <div className="w-[90%]">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
