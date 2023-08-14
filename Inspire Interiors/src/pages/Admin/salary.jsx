import React from 'react';
import { Button, InputGroup, Nav, Navbar } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { MDBDataTableV5, MDBTable } from 'mdbreact';



import 'bootstrap/dist/css/bootstrap.min.css';
// import './../../styles/customer/myOrders.css';
import './../../styles/admin/table.css';
import './../../styles/admin/user.css'


const Salary = () => {
  const data = {
    columns: [
      {
        label: 'USERNAME',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'TOTALSALES',
        field: 'type',
        sort: 'asc',
        width: 270
      },
      {
        label: 'COMMISSION',
        field: 'email',
        sort: 'asc',
        width: 200
      },
      {
        label: 'EARNING',
        field: 'status',
        sort: 'asc',
        width: 100
      },
      {
        label: '  ',
        field: 'action',
        sort: 'NONE',
        width: 100
      }
    ],
    rows: [
      {
        name: 'Chair',
        type: '203',
        email: '20K',
        status: '200K',
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>view more</p> <Icon.ArrowRight/></div>
      },
      {
        name: 'Chair',
        type: '203',
        email: '20K',
        status: '200K',
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>view more</p> <Icon.ArrowRight/></div>
      },
      {
        name: 'Chair',
        type: '203',
        email: '20K',
        status: '200K',
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>view more</p> <Icon.ArrowRight/></div>
      },
      {
        name: 'Chair',
        type: '203',
        email: '20K',
        status: '200K',
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>view more</p> <Icon.ArrowRight/></div>
      },
      {
        name: 'Chair',
        type: '203',
        email: '20K',
        status: '200K',
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>view more</p> <Icon.ArrowRight/></div>
      },
      {
        name: 'Chair',
        type: '203',
        email: '20K',
        status: '200K',
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>view more</p> <Icon.ArrowRight/></div>
      },
      {
        name: 'Chair',
        type: '203',
        email: '20K',
        status: '200K',
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>view more</p> <Icon.ArrowRight/></div>
      },
    ]
  };

  return (
    <div>  
    {/* <div className="d-flex  flex-column gap-3 full">
      <Navigationbar />
      <div className="d-flex gap-4 w-100 max-width justify-content-start  ">
          <SidebarDashboard /> */}


        </div>
    
  );
};


export default Salary;
