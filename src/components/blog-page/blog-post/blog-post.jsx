import React, { useEffect, useState } from "react";
import EyeIcon from "../../../assets/Eye.png";
import Blog from "../../../assets/blog.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import "./blog-post.css";
import { fetchBlogs } from "../../../store/blogSlice/blogthunk";

const BlogPost = () => {
  const { blog } = useSelector((state) => state.blog);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  return (
    <div className="container py-5">
      <div className="row">
        {blog?.map((item) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Link className="nav-link" to={`blog-details/${item.id}`}>
                <img className="w-100" src={Blog} alt="" />

                <div className="d-flex justify-content-between mt-3 ">
                  <span className="fs-16">Posted on October 6th 2021</span>
                  <span className="d-flex align-items-center fs-16">
                    <img src={EyeIcon} alt="eye" />
                    563 Views
                  </span>
                </div>

                <div>
                  <h1 id="" className="fs-32 fw-bold py-3 blog-title">
                    {item?.Title?.substring(0, 80)}..
                  </h1>
                  <p className="blog-subtitle fs-16 fw-bolder">
                    {item?.Subtitle?.substring(0, 170)}...
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-5">
        <button type="button" className="btn btn-dark" onClick={() => {}}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
