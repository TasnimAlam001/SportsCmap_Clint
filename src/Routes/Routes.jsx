import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LogIn/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secrect from "../Pages/Secrect";
import Classes from "../Pages/Classes/Classes";
import Instructor from "../Pages/Instructor/Instructor";
import Dashboard from "../LayOut/Dashboard";
import MySelectedClasses from "../Pages/Dashboard/StudentDashboard/MySelectedClasses";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddClass from "../Pages/Dashboard/Instructor/AddClass/AddClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/secret',
        element: <PrivateRoutes><Secrect></Secrect></PrivateRoutes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path:'/classes',
        element:<Classes></Classes>
      },
      {
        path:'/instructor',
        element:<Instructor></Instructor>
      }
    ]
  },
  {
    path:'/dashboard',
    element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path:'mySelectedClasses',
        element:<MySelectedClasses></MySelectedClasses>
      },
      {
        path:'allUsers',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path:'addClass',
        element:<AddClass></AddClass>
      },
    ]
  }
]);