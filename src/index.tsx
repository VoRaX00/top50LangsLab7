import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "./main/Main";
import List from "./list/List";
import Language from './language/Language';
import Chart from "./chart/Chart";

const router = createBrowserRouter([
    {
        path: ""
        ,
        element: <Main />,
    },
    {
        path: "/list",
        element: <List />,
    },
    {
        path: "/languages/:id",
        element: <Language />,
    },
    {
        path: "/chart",
        element: <Chart />,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
