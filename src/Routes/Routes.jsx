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
        loader: ({ params }) => fetch(`/collegeData.json`)
      },
      {
        path: 'viewDetailsmore/:moredetailsId',
        element: <ViewDetailsMore></ViewDetailsMore>,
        loader: ({ params }) => fetch(`/collegeData.json`)
      },
      {
        path: 'allcolleges',
        element: <AllColleges></AllColleges>,
      },
      {
        path: 'mycollege',
        element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>
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
      }

    ]
  },
  {
    path: "/",
    element: <Main></Main>,
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