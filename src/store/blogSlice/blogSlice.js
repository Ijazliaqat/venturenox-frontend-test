import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  blog: [],
  isLoading: false,
  error: null,
};

export const fetchBlogs = createAsyncThunk("blogs", async () => {
  const res = await axios(
    "https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/"
  );

  const data = await res.data;
  return data;
});

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.blog = action.payload;
    });
    builder.addCase(fetchBlogs.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default blogSlice.reducer;
