import React from "react";
import { useState } from "react";

import Home from "./pages/visitor/home";
import Services from "./pages/visitor/services";
import Contact from "./pages/visitor/contact";
import ViewOrder from "./pages/vendor/viewOrder";
import "./App.css";
import Header from "./components/header";
import MyOrder from "./pages/Customer/orders/my_orders";
import VisitorRoute from "./routes/visitorRoute";
import VenderRoute from "./routes/vendorRoute";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AboutUs from "./pages/visitor/AboutUs";
import Rootlayout from "./layouts/Rootlayout";
import Error from "./pages/visitor/error";
import Login from "./pages/visitor/login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

const App = () => {
  return (
    // <>
    //   <VenderRoute />
    //   <VisitorRoute />
    // </>
    <RouterProvider router={router} />
  );
};

export default App;
