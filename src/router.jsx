import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import Home from "./pages/Home/Home";
import React from "react";
import Search from "./pages/Search";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/", // HomeLayout sẽ hiển thị cho đường dẫn '/'
      element: <HomeLayout />,
      children: [
        {
          index: true, // Trang Home sẽ hiển thị mặc định
          element: <Home />,
        },
      ],
    },
    {
      path: "/search", // HomeLayout sẽ hiển thị cho đường dẫn '/'
      element: <HomeLayout />,
      children: [
        {
          index: true, // Trang Home sẽ hiển thị mặc định
          element: <Search />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default Router;
