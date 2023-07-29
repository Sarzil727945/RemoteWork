import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './Laout/Main';
import Scanning from './components/Scanning/Scanning';
import Selection from './components/Selection/Selection';
import PackingPlan1 from './components/PackingPlan1/PackingPlan1';
import PackingPlan2 from './components/PackingPlan2/PackingPlan2';
import PackingPlan3 from './components/packingPlan3/PackingPlan3';
import PackingPlan4 from './components/PackingPlan4/PackingPlan4';
import PackingPlan5 from './components/PackingPlan5/PackingPlan5';
import GreatJob from './components/GreatJob/GreatJob';
import ErrorPage from './Laout/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/scanning",
        element: <Scanning></Scanning>
      },
      {
        path: "/selection",
        element: <Selection></Selection>
      },
      {
        path: "/packingPlan1",
        element: <PackingPlan1></PackingPlan1>,
      },
      {
        path: "/packingPlan2",
        element: <PackingPlan2></PackingPlan2>
      },
      {
        path: "/packingPlan3",
        element: <PackingPlan3></PackingPlan3>
      },
      {
        path: "/packingPlan4",
        element: <PackingPlan4></PackingPlan4>
      },
      {
        path: "/packingPlan5",
        element: <PackingPlan5></PackingPlan5>
      },
      {
        path: "/greatJob",
        element: <GreatJob></GreatJob>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)