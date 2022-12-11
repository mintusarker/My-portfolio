import AboutMe from "../Pages/AboutMe/AboutMe";
import Blogs from "../Pages/Blogs/Blogs";
// import ContactMe from "../Pages/ContactMe/ContactMe";
import LearningDetail from "../Pages/DetailProjects/LearningDetail";
import ResellDetail from "../Pages/DetailProjects/ResellDetail";
import TouristDetail from "../Pages/DetailProjects/TouristDetail";
import Home from "../Pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            // {
            //     path: '/contactMe',
            //     element: <ContactMe></ContactMe>
            // },
            {
                path: '/aboutMe',
                element: <AboutMe></AboutMe>

            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/resell',
                element: <ResellDetail></ResellDetail>
            },
            {
                path: '/learning',
                element: <LearningDetail></LearningDetail>
            },
            {
                path: '/tourist',
                element: <TouristDetail></TouristDetail>
            }
        ]
    }
])


export default router;