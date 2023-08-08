import React from 'react'
import {BrowserRouter, Routes,  Navigate} from 'react-router-dom';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Error from '../pages/visitor/error';
// import Designs from '../pages/Customer/designs';
import CDashboardlayout from '../layouts/Customer/customerDashboardlayout';
import MyOrder from '../pages/Customer/orders/my_orders';
import MarketPlace from '../pages/Customer/marketplace/marketPlace';
import Home from '../pages/visitor/home';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/customer/" element={<CDashboardlayout/>} errorElement={<Home />}>
      <Route path="orders" element={<MyOrder/> } />
      <Route path="marketplace" element={<MarketPlace />} />
    </Route>
    </>
  )
);

const CustomerRoute = () => {

  return (
    <RouterProvider router={router} />
  );
};

export default CustomerRoute