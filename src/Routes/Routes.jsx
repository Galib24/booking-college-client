import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import ViewDetails from "../Pages/View Details/ViewDetails";
import AllColleges from "../Pages/Home/AllColleges/AllColleges";
import ViewDetailsMore from "../Pages/View Details/ViewDetailsMore";
import Admission from "../Pages/Admission Page/Admission";
import SubmitForm from "../Pages/Submit Form/SubmitForm";
import MyCollege from "../Pages/Home/My College/MyCollege";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Sign Up/SignUp";
import PrivateRoute from "./PrivateRoute";
import Review from "../Pages/review section/Review";
import UserReviews from "../Pages/Home/User Reviews/UserReviews";
import AllDetails from "../Pages/All Details/AllDetails";
import ErrorPage from "../Pages/Error/ErrorPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'viewDetails/:detailsId',
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/collegeData`)
      },
      {
        path: 'viewDetailsmore/:moredetailsId',
        element: <ViewDetailsMore></ViewDetailsMore>,
        loader: ({ params }) => fetch(`http://localhost:5000/collegeData`)
      },
      {
        path: 'allcolleges',
        element: <AllColleges></AllColleges>,
      },
      {
        path: 'mycollege',
        element: <MyCollege></MyCollege>
      },
      {
        path: 'allDetails/:collegeID',
        element: <AllDetails></AllDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/collegeData`)
      },
      {
        path: 'morereviews/:reviewsId',
        element: <UserReviews></UserReviews>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
    ]
  },
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'admission',
        element: <PrivateRoute><Admission></Admission></PrivateRoute>
      },
      {
        path: 'sumbitform/:submitId',
        element: <SubmitForm></SubmitForm>
      }
    ]

  }
]);