import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlogs = createAsyncThunk("blogs", async () => {
  const res = await axios(
    "https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/"
  );
  const data = await res.data;
  return data;
});

export const fetchSingleBlog = createAsyncThunk("singleblog", async (id) => {
  const res = await axios(
    `https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`
  );
  
  const data = await res.data;
  return data;
});
