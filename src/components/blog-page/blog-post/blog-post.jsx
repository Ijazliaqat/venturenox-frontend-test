import React from "react";
import EyeIcon from "../../../assets/Eye.png";
import Blog from "../../../assets/blog.png";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    imgSrc: Blog,
    heading: "5 Genius Car Accessories You Should Never Drive Without",
    par: "We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models",
  },
  {
    id: 2,
    imgSrc: Blog,
    heading: "5 Genius Car Accessories You Should Never Drive Without",
    par: "We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models",
  },
];

const BlogPost = () => {
  return (
    <div className="container py-5">
      <div className="row">
        {data.map((item) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Link className="nav-link" to={`blog-details/${item.id}`}>
                <img className="w-100" src={Blog} alt="" />
                <div>
                  <div className="d-flex justify-content-between ">
                    <span>Posted on October 6th 2021</span>
                    <span className="d-flex align-items-center">
                      <img src={EyeIcon} alt="eye" /> 563 Views
                    </span>
                  </div>
                </div>
                <div>
                  <h1 className="fs-32">{item.heading}</h1>
                  <p>
                    We provide a full range of front end mechanical repairs for
                    all makes and models We provide a full range of front end
                    mechanical repairs for all makes and models
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-5">
        <button type="button" class="btn btn-dark">
          Load More
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
