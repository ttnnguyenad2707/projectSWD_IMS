import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Table from "../component/Table.component.js";
import ClassList from "../component/ClassList.component.js";
const appRouter = createBrowserRouter([
  {
    path: "/home",
    element: <Table />,
  },
  {
    path: "/class_list",
    element: <ClassList />,
  },
]);
export default appRouter;
