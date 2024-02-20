import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Routers from "../routers/Routers";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
