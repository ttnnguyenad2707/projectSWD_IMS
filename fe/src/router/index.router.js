import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Table from "../component/Table.component.js";
import Register from "../component/LoginSignUp/Register.js";
import Login from "../component/LoginSignUp/Login.js";
import Header from "../component/Header.js";
import Home from "../pages/Home.js";
import SystemSettingList from "../component/SystemSetting/SystemSettingList.js";
import ClassList from "../component/ClassList.component.js";
import ProjectList from "../component/Project.js/ProjectList.js";
import ProjectAddNew from "../component/Project.js/ProjectAddNew.js";
import ProjectDetailAndUpdate from "../component/Project.js/ProjectDetailAndUpdate.js";
import ListIssue from "../component/Issue/ListIssue.js";
import CreateIssue from "../component/Issue/CreateIssue.js";
import IssueDetail from "../component/Issue/IssueDetail.js";
import UpdateIssue from "../component/Issue/UpdateIssue.js";

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
      {
        path: "/projectList",
        element: <ProjectList />,
      },
      {
        path: "/addNewProject",
        element: <ProjectAddNew />,
      }
      ,
      {
        path: "/detailProject/:id",
        element:<ProjectDetailAndUpdate/>
      },
      {
        path: "/issues",
        element: <ListIssue />,
      },
      {
        path: "/issues/create",
        element: <CreateIssue />,
      },
      {
        path: "/issues/:id",
        element: <IssueDetail />,
      },
      {
        path: "/issues/update/:id",
        element: <UpdateIssue />,
      },
    ],
  },
  {
    path: "/home",
    element: <Table />,
  },
  // {
  //   path: "/class_list",
  //   element: <ClassList />,
  // },
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
