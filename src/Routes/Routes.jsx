import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import Blogs from "../Pages/BLogs/Blogs";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AllToys from "../Pages/AllToys/AllToys";
import AddToys from "../Pages/AddToys/AddToys";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoutes from "./PrivateRoutes";
import UpdatedToys from "../Pages/UpdatedToys/UpdatedToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singup",
        element: <Registration></Registration>,
      },

      {
        path: "/add-toy/:id",
        element: <AddToys></AddToys>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allToys/${params.id}`),
      },
      {
        path: "//my-toys",
        element: (
          <PrivateRoutes>
            <MyToys />
          </PrivateRoutes>
        ),
      },
      {
        path:'/updatedtoys/:id',
        element:<UpdatedToys />,
        loader :({params})=> fetch(`http://localhost:5000/addToys/${params.id}`)

      }
    ],
  },
]);

export default router;
