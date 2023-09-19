import React from "react";
import Logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navbarData = [
    {
      id: 1,
      path: "",
      navName: "Home",
    },
    {
      id: 2,
      path: "",
      navName: "About us",
    },
    {
      id: 3,
      path: "",
      navName: "Services",
    },
    {
      id: 4,
      path: "",
      navName: "Blog",
    },
    {
      id: 5,
      path: "",
      navName: "Contact",
    },
  ];
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
          <img src={Logo} alt="" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              {navbarData.map((nav) => {
                return (
                  <li key={nav.id} class="nav-item active">
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
    </>
  );
};

export default NavBar;
