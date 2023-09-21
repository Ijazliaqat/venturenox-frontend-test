import React from "react";
import Facebook from "../../../assets/facebook.png";
import Twitter from "../../../assets/twitter.png";
import Instagram from "../../../assets/instagram.png";
import LinkedIn from "../../../assets/linkedin.png";
import Logo from "../../../assets/white-logo.png";

import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="secondary-bg text-white">
        <div className="container footer-style">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="fs-48 fw-bold font-manrope">
                Get in touch with us for your service
              </h1>
              <div className="d-flex mt-5">
                <img src={Facebook} alt="facebook" />
                <img className="mx-4" src={Twitter} alt="Twitter" />
                <img src={Instagram} alt="Instagram" />
                <img className="mx-4" src={LinkedIn} alt="LinkedIn" />
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <span className="fs-18 text-color-light fst-normal">
                  Help line Number
                </span>
                <h1 className="fs-24 fst-normal fw-bolder">1800 265 2452</h1>
              </div>
              <div className="my-4">
                <span className="fs-18 text-color-light fst-normal">
                  Address
                </span>
                <h1 className="fs-24 fw-bolder fst-normal">
                  NH 234 Public Square San Francisco 65368
                </h1>
              </div>
              <div>
                <span className="fs-18 text-color-light fst-normal">
                  We are open
                </span>
                <h1 className="fs-24 fw-bolder fst-normal">
                  Monday to Friday 9:00 AM to 10:00 AM
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" foot-bg text-white py-3">
        <div className=" container d-flex flex-wrap align-items-center justify-content-lg-between justify-content-center ">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link text-white">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white">Contact us</Link>
              </li>
            </ul>
          </div>

          <div>
            <span>@ Copyright Finsweet 2021</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
