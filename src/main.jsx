import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Products from './Components/Products/Products.jsx';
import Laptops from './Components/Laptops/Laptops.jsx';
import Phones from './Components/Phones/Phones.jsx';
import SmartWatches from './Components/SmartWatches/SmartWatches.jsx';
import Chargers from './Components/Chargers/Chargers.jsx';
import PowerBanks from './Components/PowerBanks/PowerBanks.jsx';
import Faqs from './Components/Faqs/Faqs.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import { HelmetProvider } from 'react-helmet-async';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Products></Products>,
          },
          {
            path: "laptops",
            element: <Laptops></Laptops>,
          },
          {
            path: "phones",
            element: <Phones></Phones>,
          },
          {
            path: "smart-watches",
            element: <SmartWatches></SmartWatches>,
          },
          {
            path: "chargers",
            element: <Chargers></Chargers>,
          },
          {
            path: "power-banks",
            element: <PowerBanks></PowerBanks>,
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/faqs",
        element: <Faqs></Faqs>,
      },
      {
        path: "/product/:productId", 
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
