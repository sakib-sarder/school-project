import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import HomeContent from "./Components/HomeContent";
import ErrorPage from "./Components/ErrorPage";
import About from "./Components/About";
import Courses from "./Components/Courses";
import Instructors from "./Components/Instructors";
import Blog from "./Components/Blog";
import Contacts from "./Components/Contacts";
import Cart from "./Components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeContent />,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "courses",
        element: <Courses />
      },
      {
        path: "instructors",
        element: <Instructors />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "contacts",
        element: <Contacts />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
