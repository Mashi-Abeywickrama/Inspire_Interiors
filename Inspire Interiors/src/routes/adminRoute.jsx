import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import AdminDashboard from '../pages/Admin/dashboard';


function AdminRoute() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/admin/' element={<AdminDashboard />}></Route>
    


        </Routes>
    </BrowserRouter>
  )
}

export default AdminRoute