import EyeIcon from "../../../assets/Eye.png";
import Blog from "../../../assets/blog.png";
import { Link } from "react-router-dom";
import useBlogPost from "./useBlogPost";
import "./blog-post.css";
import { incrementBlogView } from "../../../store/blogSlice/blogSlice";

const BlogPost = () => {
  const { blog, dispatch } = useBlogPost();

  console.log(blog);

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
                    {item.blogViews} Views
                  </span>
                </div>

                <div
                  onClick={() => {
                    dispatch(incrementBlogView(item.id));
                  }}
                >
                  <h1 className="fs-32 fw-bold py-3 fst-normal blog-title">
                    {item?.Title}
                  </h1>
                  <p className="blog-subtitle fs-16 fst-normal">
                    {item?.Subtitle?.substring(0, 170)}...
                  </p>
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
