import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogSlice/blogSlice";
import propertySlice from "./blogSlice/propertySlice";
export const store = configureStore({
  reducer: {
    blog: blogSlice,
    property: propertySlice,
  },
});
