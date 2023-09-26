import { useEffect } from "react";
import { fetchBlogs } from "../../../store/blogSlice/blogthunk";
import { useDispatch, useSelector } from "react-redux";

const useBlogPost = () => {
  const { blog } = useSelector((state) => state.blog);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return {blog,dispatch};
};

export default useBlogPost;
