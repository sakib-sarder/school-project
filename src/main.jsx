import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import HomeContent from "./Components/HomeContent";
import ErrorPage from "./Components/ErrorPage";
import About from "./Components/About";
import Courses from "./Components/Courses";

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
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
