import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
const appRouter = createBrowserRouter([
    {
        path: '/home',
        element: <Home />
    }
])
export default appRouter