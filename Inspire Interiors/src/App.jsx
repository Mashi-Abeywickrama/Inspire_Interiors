
import React from 'react';
import { useState } from 'react'


import './App.css';
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
