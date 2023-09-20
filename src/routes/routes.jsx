import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/root-layout/root-layout";
import BlogPage from "../components/blog-page/blog-page";
import SingleBlogPage from "../components/single-blog-page/single-blog-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h1>Page not found</h1>,
    children: [
      {
        path: "",
        element: <BlogPage />,
      },
      {
        path: "blog-details/:blogId",
        element: <SingleBlogPage />,
      },
    ],
  },
]);
