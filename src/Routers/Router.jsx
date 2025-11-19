import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPages/ErrorPage';
import Apps from '../Pages/Apps/Apps';
import AppDetails from '../Pages/AppDetails/AppDetails';
import Installtion from '../Pages/Installtion/Installtion';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [{
            index: true,
            path: "/",
            element: <Home></Home>,
            errorElement: <ErrorPage></ErrorPage>,

        },
        {
            path: "/apps",
            element: <Apps></Apps>
        },
        {
            path: "/appDetails/:id",
            loader: () => fetch("/allApps.json"),

            element: <AppDetails></AppDetails>
        },
        {
            path: "/installation",
            loader: async () => {
                const res = await fetch("/allApps.json");
                const data = await res.json();
                return data;
            },
            element: <Installtion />,
        }




        ]
    },
]);

