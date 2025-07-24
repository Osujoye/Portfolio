import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../layout/Homelayout";
import About from "../Page/About";
import Home from "../Page/Home";
import Project from "../Page/Project";
import Skill from "../Page/Skill";
import Contact from "../Page/Contact";

export const mainRoute = createBrowserRouter([
  {
    element: <Homelayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skill",
        element: <Skill />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
