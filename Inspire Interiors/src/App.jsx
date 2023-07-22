
import React from 'react';
import { useState } from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

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
