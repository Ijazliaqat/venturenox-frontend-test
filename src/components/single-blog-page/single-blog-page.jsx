import React, { useEffect } from "react";
import { fetchSingleBlog } from "../../store/blogSlice/blogthunk";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EyeIcon from "../../assets/Eye.png";
import Car from "../../assets/blog-car.png";
import Road from "../../assets/road.png";

import "./single-blog-page.css";

const SingleBlogPage = () => {
  const { singleBlog } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const { blogId } = useParams();

  console.log(singleBlog);
  useEffect(() => {
    dispatch(fetchSingleBlog(blogId));
  }, [dispatch]);
  return (
    <div className="container">
      <div className="container d-flex justify-content-center">
        <div className="col-8">
          <div className="d-flex flex-wrap">
            <div className=" d-flex flex-wrap align-items-center pb-3">
              <span className="fs-16 ">Posted on October 6th 2021</span>
              <span className="mx-5 d-flex align-items-center fs-16 ">
                <img src={EyeIcon} alt="eye" /> 563 Views
              </span>
            </div>
          </div>
          <div>
            <h1 className="fs-40 fw-bold py-3">{singleBlog?.Title}</h1>
            <p>{singleBlog?.Subtitle}</p>
          </div>
        </div>
      </div>

      <div>
        <img className="img-fluid" src={Car} alt="car" />
      </div>

      <div className="container d-flex justify-content-center">
        <div className="col-8">
          <div>
            <h1 className="fs-40 fw-bold fst-normal py-3">
              This is a blog post headline
            </h1>
            <p>{singleBlog?.Article}</p>
          </div>
          <img className="img-fluid" src={Road} alt="road" />

          <div>
            <h1 className="fs-40 fw-bold fst-normal py-3">
              This is a small blog post headline
            </h1>
            <p>{singleBlog?.Article}</p>
          </div>

          <div className="left-border">
            <p className="fs-16 px-3">
              Ut non urna a odio condimentum dictum. Proin egestas erat a orci
              ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
              justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
              nisi velit, ultricies eget enim vel, venenatis mollis ante.
            </p>
          </div>

          <p className="fs-16 text-dark">{singleBlog?.Article}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
