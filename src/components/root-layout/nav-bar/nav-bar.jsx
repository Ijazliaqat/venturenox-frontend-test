import React from "react";
import Logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";
import { NavbarData } from "./nav-data";

const NavBar = () => {
  return (
    <div className="position-sticky top-0 bg-white"  style={{ zIndex:2 }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container">
          <img src={Logo} alt="" />
          <button
           
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              {NavbarData.map((nav) => {
                return (
                  <li key={nav.id} className="nav-item active">
                    <Link
                      to={nav.path}
                      className="nav-link text-black fs-6 fw-semibold font-manrope"
                    >
                      {nav.navName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
