import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import Home from "./pages/Home/Home";
import React from "react";
import IndexLayout from "./layouts/IndexLayout";
import HomeIndex from "./pages/HomeIndex";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexLayout />,
      children: [
        {
          index: true, 
          element: <HomeIndex />,
        },
      ],
    },
    {
      path: "/search",
      element: <HomeLayout />,
      children: [
        {
          index: true, 
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default Router;
