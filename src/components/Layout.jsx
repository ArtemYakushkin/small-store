import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Routers from "../routers/Routers";
import AdminNav from "../admin/AdminNav";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname.startsWith("/dashboard") ? <AdminNav /> : <Header />}

      <div>
        <Outlet />
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
