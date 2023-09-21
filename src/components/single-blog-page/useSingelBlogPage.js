import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleBlog } from "../../store/blogSlice/blogthunk";

const useSingelBlogPage = () => {
  const { singleBlog } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const { blogId } = useParams();

  console.log(singleBlog);
  useEffect(() => {
    dispatch(fetchSingleBlog(blogId));
  }, [dispatch]);

  return { singleBlog };
};

export default useSingelBlogPage;
