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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.isLoading = "pending";
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = "fulfilled";
      state.blog = action.payload;
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

export default blogSlice.reducer;
