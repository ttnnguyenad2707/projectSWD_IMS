import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Table from "../component/Table.component.js";

const appRouter = createBrowserRouter([
    {
        path: '/home',
        element: <Table/>
    }
])
export default appRouter