import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/UI/Layout";
import { HomePage } from "@/pages/Home";

import { RouterPath } from "./path";

const router = createBrowserRouter([
  {
    path: RouterPath.home,
    element: <Layout />,
    children: [
      {
        path: RouterPath.home,
        element: <HomePage />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
