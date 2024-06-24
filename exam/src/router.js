import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PizzaListPage from "./pages/PizzasListPage";
import AboutUsPage from "./pages/AboutUsPage";


export default createBrowserRouter([
    {
        element: <App/>,
        path: "/",
        errorElement:" <>404</>",
        children: [
            {
                element: <PizzaListPage />,
                path: "/",
                
            },
            {
                element: <AboutUsPage />,
                path: "/about"
            }
        ]
    }
])