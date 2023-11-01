import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Table from "../component/Table.component.js";
import Register from "../component/LoginSignUp/Register.js";
import Login from "../component/LoginSignUp/Login.js";
import Header from "../component/Header.js";
import Home from "../pages/Home.js";
import SystemSettingList from "../component/SystemSetting/SystemSettingList.js";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/systemsetting",
        element: <SystemSettingList />,
      },
    ],
  },
  {
    path: "/home",
    element: <Table />,
  },
  {
    path: "/class_list",
    element: <ClassList />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default appRouter;
