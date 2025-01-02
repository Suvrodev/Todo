import Main from "@/Layout/Main/Main";
import About from "@/Layout/Pages/About/About";
import Home from "@/Layout/Pages/Home/Home";
import Task from "@/Layout/Pages/Task/Task";
import { createBrowserRouter, Navigate } from "react-router";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/home"} />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/task",
        element: <Task />,
      },
    ],
  },
]);

export default routes;
