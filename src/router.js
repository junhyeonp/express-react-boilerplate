import { Outlet, createBrowserRouter } from "react-router-dom";
import Page from "./Page";
import Splash from "./app/Splash";
import Qr from "./app/Qr";
import Tour from "./app/Tour";
import Menu from "./app/Menu";
import Fav from "./app/Fav";
import NotFound from "./app/NotFound";
import TourDetail from "./app/TourDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Outlet />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Splash />,
            },
            {
                path: "home",
                element: <Page />,
            },
            {
                path: "tour",
                element: <Tour />,
            },
            {
                path: "qr",
                element: <Qr />,
            },
            {
                path: "favorite",
                element: <Fav />,
            },
            { path: "menu", element: <Menu /> },
            // :id는 변하는 값
            { path: "tour/:id", element: <TourDetail /> },
        ],
    },
]);

export default router;
