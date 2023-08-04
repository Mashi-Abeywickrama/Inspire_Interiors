import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import AdminDashboard from '../pages/Admin/dashboard';
import Report from '../pages/Admin/report';


function AdminRoute() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/admin/dashboard' element={<AdminDashboard />}></Route>
            <Route path='/admin/report' element={<Report />}></Route>
    


        </Routes>
    </BrowserRouter>
  )
}

export default AdminRoute