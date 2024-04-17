import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CardEstateDetails from "../pages/Home/CardEstate/CardEstateDetails";
import Services from "../pages/Services/Services";
import AboutUs from "../pages/AboutUs/AboutUs";



const router = createBrowserRouter([
    {
        path : '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('/Hospitality.json')
            },
            {
                path:'/estate-details/:id',
                element: <PrivateRoute><CardEstateDetails></CardEstateDetails></PrivateRoute>,
                loader: () => fetch('/Hospitality.json')
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/update',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: '/services',
                element: <PrivateRoute><Services></Services></PrivateRoute>
            },
            {
                path: '/abouts',
                element: <AboutUs></AboutUs>
            }
           
        ]
    }
])

export default router