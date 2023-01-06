
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

import Tracker from "../Pages/Tracker";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/tracker",
                element:<PrivateRoute><Tracker/></PrivateRoute>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/signup",
                element:<SignUp/>
            },
        ]
    }
])
export default router;