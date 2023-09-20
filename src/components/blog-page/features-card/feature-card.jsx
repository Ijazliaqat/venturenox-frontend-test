import React from "react";
import EyeIcon from "../../../assets/Eye.png";
import ArrowIcon from "../../../assets/Arrow.png";
import Car from "../../../assets/car.png";

import "./feature-card.css";

const FeatureCard = () => {
  return (
    <div className="tertiary-bg card-style">
      <div className="container">
        <div className="row bg-white p-5">
          <div className=" col-12 col-lg-4">
            <img className="img-md-fluid h-100 w-100"   src={Car} alt="" />
          </div>

          <div className=" col-12 col-lg-8 position-relative">
            <div className="d-flex flex-wrap">
              <div className="flex-grow-1 d-flex flex-wrap align-items-center ">
                <span>Posted on October 6th 2021</span>
                <span className="mx-5 d-flex align-items-center">
                  <img src={EyeIcon} alt="eye" /> 563 Views
                </span>
              </div>
              <span>FEATURED</span>
            </div>
            <div className=" d-flex flex-column justify-content-between mb-5">
            <div>
              <h1>Should I Buy a New Car or Lease a New Car in 2021?</h1>
              <p >
                We provide a full range of front end mechanical repairs for all
                makes and models of cars, no matter the cause. This includes, We
                provide a full range of front end mechanical.
              </p>
            </div>

            </div>
            <div className="mx-2 position-absolute fixed-bottom">
              <span>
                Read more
                <img height={13} className="mx-2" src={ArrowIcon} alt="eye" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
