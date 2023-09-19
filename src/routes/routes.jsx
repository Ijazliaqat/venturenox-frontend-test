import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/root-layout/root-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
]);
