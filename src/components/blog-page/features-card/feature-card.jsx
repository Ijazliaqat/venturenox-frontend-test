import React from "react";
import EyeIcon from "../../../assets/Eye.png";
import ArrowIcon from "../../../assets/Arrow.png";
import Car from "../../../assets/car.png";

import "./feature-card.css";
import { Link } from "react-router-dom";

const FeatureCard = () => {
  return (
    <div className="tertiary-bg card-style">
      <div className="container">
        <div className="row bg-white p-5">
          <div className=" col-12 col-lg-4">
            <img className="img-md-fluid h-100 w-100" src={Car} alt="" />
          </div>

          <div className=" col-12 col-lg-8 position-relative">
            <div className="d-flex flex-wrap">
              <div className="flex-grow-1 d-flex flex-wrap align-items-center ">
                <span className="fs-16 fst-normal">
                  Posted on October 6th 2021
                </span>
                <span className="mx-5 d-flex align-items-center fs-16 ">
                  <img src={EyeIcon} alt="eye" /> 563 Views
                </span>
              </div>
              <span className="fw-16 fw-semibold text-orange letter-spacing">
                FEATURED
              </span>
            </div>
            <div className=" d-flex flex-column justify-content-between mb-5">
              <div>
                <h1 className="fs-40 fw-bolder fst-normal py-3">
                  Should I Buy a New Car or Lease a New Car in 2021?
                </h1>
                <p className="fs-16 fst-normal">
                  We provide a full range of front end mechanical repairs for
                  all makes and models of cars, no matter the cause. This
                  includes, We provide a full range of front end mechanical.
                </p>
              </div>
            </div>
            <div className="mx-2 position-absolute fixed-bottom">
              <Link className="nav-link" to="blog-details/1">
                <span>
                  Read more
                  <img width={30} className="mx-2" src={ArrowIcon} alt="eye" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
