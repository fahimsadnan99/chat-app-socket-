import {createBrowserRouter} from "react-router-dom"
import App  from "./App"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import PrivateRoute from "./components/common/PrivateRoute"


const Router = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
        children : [
            {
                path : "/",
                element : <PrivateRoute><Home></Home></PrivateRoute> 
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
                element :<PrivateRoute> <Home></Home></PrivateRoute>
            }
        ]
    }
])

export default Router;