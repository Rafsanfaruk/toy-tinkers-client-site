import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import Blogs from "../Pages/BLogs/Blogs";

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

      ]
    },
  ]);

  export default router;