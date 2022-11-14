import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Blog/Blog";
import CourseDetails from "../Component/CourseDetails/CourseDetails";
import Courses from "../Component/Courses/Courses";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import FAQ from "../Component/FAQ/FAQ";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import PremiumCourse from "../Component/PremiumCourse/PremiumCourse";
import SignUP from "../Component/SignUp/SignUp";
import Main from "../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
export const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        loader: () => fetch("https://moulvibazar-it-server.vercel.app/courses/"),
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:id",
        loader: async ({ params }) => {
          //   console.log(params.id)
          return fetch(`https://moulvibazar-it-server.vercel.app/courses/${params.id}`);
        },
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/:id/premium-access",
        loader: async ({ params }) => {
          return fetch(`https://moulvibazar-it-server.vercel.app/courses/${params.id}`);
        },
        element: (
          <PrivateRoute>
            <PremiumCourse></PremiumCourse>
          </PrivateRoute>
        ),
      },
      {
        path: "/FAQ",
        element: <FAQ> </FAQ>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUP></SignUP>,
      },
    ],
  },
]);
