import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LogIn/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secrect from "../Pages/Secrect";
import Classes from "../Pages/Classes/Classes";
import Instructor from "../Pages/Instructor/Instructor";

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
  }
]);