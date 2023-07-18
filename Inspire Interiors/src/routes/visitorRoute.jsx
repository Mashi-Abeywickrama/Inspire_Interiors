import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../pages/visitor/home';
import Contact from '../pages/visitor/contact';
import Services from '../pages/visitor/services';
import Error from '../pages/visitor/error';
import MyOrder from '../pages/Customer/orders/my_orders';

function VisitorRoute() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path="/404" element={<Error />} />
            <Route path="/dev" element={<MyOrder />} />
          	<Route path="*" element={<Navigate to="/404" />} />

            {/* <Route path='/Blog' element={<Blog />}></Route> */}
            {/* <Route path='/About' element={<About />}></Route> */}
        </Routes>
    </BrowserRouter>
  )
}

export default VisitorRoute