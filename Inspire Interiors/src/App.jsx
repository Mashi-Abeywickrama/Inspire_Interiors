
import React from 'react';
import { useState } from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css';

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
import Home from "./pages/visitor/home";  
import Contact from "./pages/visitor/contact";
import Services from "./pages/visitor/services";
import Project from './pages/visitor/project';
import OnlyHeaderRootlayout from './layouts/onlyHeaderRootlayout';
import CDashboardlayout from './layouts/Customer/customerDashboardlayout';
import MyOrder from './pages/Customer/orders/my_orders';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Rootlayout />} errorElement={<Error />}>
      <Route index element={<Home /> } />
      <Route path="about" element={<AboutUs />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Project />} />
    </Route>
     <Route path="/login" element={<OnlyHeaderRootlayout />} errorElement={<Error />}>
      <Route index element={<Login /> } />
    </Route>
    <Route path="/customer" element={<CDashboardlayout />} errorElement={<Home />}>
      <Route index element={<MyOrder/> } />
    </Route>
    </>
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
