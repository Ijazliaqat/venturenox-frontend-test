import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/root-layout/root-layout";
import BlogPage from "../components/blog-page/blog-page";
import SingleBlogPage from "../components/single-blog-page/single-blog-page";
import PageNotFound from "../components/page-not-found/page-not-found";
import PropertySearchTool from "../components/property-search-tool/property-search-tool";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "",
        element: <BlogPage />,
      },
      {
        path: "blog-details/:blogId",
        element: <SingleBlogPage />,
      },
      {
        path: "/property-search-tool",
        element: <PropertySearchTool />,
      },
    ],
  },
]);
