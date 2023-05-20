import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import Blogs from "../Pages/BLogs/Blogs";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AllToys from "../Pages/AllToys/AllToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<NotFoundPage></NotFoundPage>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path:'/blogs',
            element:<Blogs />,
        },
        {
          path:'/alltoys',
          element: <AllToys></AllToys>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/singup',
          element:<Registration></Registration>
        },

      ]
    },
  ]);

  export default router;