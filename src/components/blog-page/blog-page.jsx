import React from "react";
import "./blog-page.css";
import FeatureCard from "./features-card/feature-card";

const BlogPage = () => {
  return (
    <div className="container-fluid">
      <div className="row border border-black">
        <div className="col-sm-12 col-md-6 col-lg-6 bg-left-card d-flex justify-content-center align-items-center">
          <h1 className="fs-64 fw-800 text-white text">Our Blog</h1>
        </div>

        <div
          className="col-sm-12 col-md-6 col-lg-6 text-white secondary-bg d-flex flex-column justify-content-center just align-items-center"
          // style={{ padding: "120px" }}
        >
          <div className=" col-sm-11 col-md-10 col-lg-8 py-4">
            <h1 className="display-6 fw-bold">
              Diagnose Car Problems If You Don’t Know Much About Cars
            </h1>
            <p>
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes, We
              provide a full range of front end mechanical.
            </p>
          </div>
        </div>
      </div>

      <FeatureCard />
    </div>
  );
};

export default BlogPage;
