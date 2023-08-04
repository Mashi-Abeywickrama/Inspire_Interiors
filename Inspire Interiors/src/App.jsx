
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
import Report from './pages/Admin/report';
import Dashboard from './pages/Admin/dashboard';
import User from './pages/Admin/user';
import Commission from './pages/Admin/commission';
import Orders from './pages/Admin/orders';
import Salary from './pages/Admin/salary';


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
    <Route path="/Admin/" element={<CDashboardlayout />} errorElement={<Error />}>
      <Route index element={<Dashboard/> } />
      <Route path="report" element={<Report/> } />
      <Route  path="user" element={<User/> } />
      <Route  path="commission" element={<Commission/> } />
      <Route  path="orders" element={<Orders/> } />
      <Route  path="salary" element={<Salary/> } />
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
