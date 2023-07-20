import React from 'react'
import { Navbar } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';


import 'bootstrap/dist/css/bootstrap.min.css';
import "./../styles/header2.css";

import Logo from './../assets/img/logo.svg';


export default function dashboard() {
  return (
    <div>
       
       <Navbar className="nav" expand="lg">
      <div className="nav-div">
        <Navbar.Brand href="/">
          <img src={Logo} alt="inspire interiors" />
        </Navbar.Brand>
     </div> 
     </Navbar>

     <div className='Rectangle'>
       <button className='sidebar'>Dashboard</button> 
     <button className='sidebar'>Users</button>
     <button className='sidebar'>Commission</button>
     <button className='sidebar'>Salary</button>
     <button className='sidebar'>Order</button>
     <button className='sidebar'>Report</button>
     <button className='sidebar'>Setting</button>
     </div>

    </div>
  )
}
