
import React from 'react';
import { useState } from 'react'

import Home from './pages/visitor/home';
import Services from './pages/visitor/services';
import Contact from './pages/visitor/contact';
import ViewOrder from './pages/vendor/viewOrder';
import './App.css';
import Header from './components/header';
import MyOrder from './pages/Customer/orders/my_orders';
import VisitorRoute from './routes/visitorRoute';
import VenderRoute from './routes/vendorRoute';




 const App = () => {

  return (
    <>
    <VenderRoute/>
    <VisitorRoute/>
    </>
  
  )
}

export default App;
