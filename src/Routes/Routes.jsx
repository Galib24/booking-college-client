import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import ViewDetails from "../Pages/View Details/ViewDetails";
import AllColleges from "../Pages/Home/AllColleges/AllColleges";


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
          path: 'viewDetails/:detailsId',
          element: <ViewDetails></ViewDetails>,
          loader: ({params}) => fetch(`/collegeData.json`)
        },
        {
          path: 'allcolleges',
          element: <AllColleges></AllColleges>
        }
      ]
    },
  ]);