import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Signup } from "../pages/Signup/Signup";

const Private = ({ Item }) => {
    const signup = false;

    return signup ? <Item /> : <Login />;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/home",
                element: <Private Item={Home} />,
            },
            {
                path: "/",
                element: <Login />,
            },
            {
                path: "/Signup",
                element: <Signup />,
            },
            {
                path: "*",
                element: <Login />,
            },
        ],
    },
]);

export default router;
