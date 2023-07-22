import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Error from '../pages/visitor/error';
import Designs from '../pages/Customer/designs';


function customerRoute() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/designs' element={<Designs />}></Route>

        </Routes>
    </BrowserRouter>
  )
}

export default customerRoute