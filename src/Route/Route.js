import AboutMe from "../Pages/AboutMe/AboutMe";
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

            }
        ]
    }
])


export default router;