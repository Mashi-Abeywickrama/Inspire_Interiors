import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import ViewOrder from '../pages/vendor/viewOrder';
import Promotion from '../pages/vendor/promotion';
import OverView from '../pages/vendor/overview';
import ViewCustomRequest from '../pages/vendor/viewCustomRequest';
import PromotedProduct from '../pages/vendor/promotedProduct';
import ViewStocks from '../pages/vendor/viewStocks';


function VenderRoute() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/vendor/vieworder' element={<ViewOrder />}></Route>
            <Route path='/vendor/promotion' element={<Promotion />}></Route>
            <Route path='/vendor/overview' element={<OverView />}></Route>
            <Route path='/vendor/customrequest' element={<ViewCustomRequest />}></Route>
            <Route path='/vendor/promoteproduct' element={<PromotedProduct />}></Route>
            <Route path='/vendor/viewstock' element={<ViewStocks />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default VenderRoute;