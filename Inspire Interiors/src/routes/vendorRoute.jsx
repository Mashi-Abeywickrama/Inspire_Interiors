import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import ViewOrder from '../pages/vendor/viewOrder';
import Promotion from '../pages/vendor/promotion';

function VenderRoute() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/vendor' element={<ViewOrder />}></Route>
            <Route path='/vendor/promotion' element={<Promotion />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default VenderRoute;