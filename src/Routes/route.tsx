import Main from "@/Layout/Main/Main";
import About from "@/Layout/Pages/About/About";
import Home from "@/Layout/Pages/Home/Home";
import Mission from "@/Layout/Pages/Mission/Mission";
import Task from "@/Layout/Pages/Task/Task";
import User from "@/Layout/Pages/User/User";
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
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/mission",
        element: <Mission />,
      },
    ],
  },
]);

export default routes;
