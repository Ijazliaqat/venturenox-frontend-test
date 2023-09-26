import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogs, fetchSingleBlog } from "./blogthunk";

const initialState = {
  blog: [],
  singleBlog: {},
  isLoading: "idle",
  error: null,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    incrementBlogView: (state, action) => {
      // const currBlog = state.blog.find((obj) => obj.id === action.payload);
      // currBlog.blogViews += 1;
      state.blog = state.blog.map((obj) => {
        if (obj.id === action.payload) {
          return { ...obj, blogViews: obj.blogViews + 1 };
        } else {
          return obj;
        }
      });
      // console.log(currBlog.blogViews);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.isLoading = "pending";
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.isLoading = "fulfilled";
      const data = action.payload.map((item) => {
        return { ...item, blogViews: 0 };
      });
      state.blog = data;
    });
    builder.addCase(fetchBlogs.rejected, (state, action) => {
      state.isLoading = "rejected";
      state.error = action.error.message;
    });

    builder.addCase(fetchSingleBlog.pending, (state) => {
      state.isLoading = "pending";
    });
    builder.addCase(fetchSingleBlog.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = "fulfilled";
      state.singleBlog = action.payload;
    });
    builder.addCase(fetchSingleBlog.rejected, (state, action) => {
      state.isLoading = "rejected";
      state.error = action.error.message;
    });
  },
});

export const { incrementBlogView } = blogSlice.actions;
export default blogSlice.reducer;
