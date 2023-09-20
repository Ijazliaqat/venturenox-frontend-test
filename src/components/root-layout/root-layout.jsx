import React from "react";
import NavBar from "./nav-bar/nav-bar";
import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
