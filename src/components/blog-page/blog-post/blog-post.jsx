import React, { useEffect } from "react";
import EyeIcon from "../../../assets/Eye.png";
import Blog from "../../../assets/blog.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../../store/blogSlice/blogSlice";

import "./blog-post.css"


const BlogPost = () => {
  const { blog } = useSelector((state) => state.blog);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  return (
    <div className="container py-5">
      <div className="row">
        {blog.map((item) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Link className="nav-link" to={`blog-details/${item.id}`}>
                <img className="w-100" src={Blog} alt="" />
                <div>
                  <div className="d-flex justify-content-between ">
                    <span>Posted on October 6th 2021</span>
                    <span className="d-flex align-items-center">
                      <img src={EyeIcon} alt="eye" />563 Views
                    </span>
                  </div>
                </div>
                <div>
                  <h1 id="blog-title" className="fs-32 py-3 " >{item?.Title}</h1>
                  <p className="blog-subtitle" >{item?.Subtitle}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-5">
        <button type="button" className="btn btn-dark">
          Load More
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
