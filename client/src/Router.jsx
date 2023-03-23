import {createBrowserRouter} from "react-router-dom"
import App  from "./App"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"


const Router = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "singup",
                element : <Signup></Signup>
            },
            {
                path : "signin",
                element : <Signin></Signin>
            },
            {
                path : "*",
                element : <Home></Home>
            }
        ]
    }
])

export default Router;