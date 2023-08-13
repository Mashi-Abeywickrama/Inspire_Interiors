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
import { Link } from 'react-router-dom';


const User = () => {
  const data = {
    columns: [
      {
        label: 'USERNAME',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'TYPE',
        field: 'type',
        sort: 'asc',
        width: 270
      },
      {
        label: 'EMAIL',
        field: 'email',
        sort: 'asc',
        width: 200
      },
      {
        label: 'STATUS',
        field: 'status',
        sort: 'asc',
        width: 50
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
        name: 'Peter pan',
        type: 'Vendor',
        email: 'peter@email.com',
        status: <div className='verified d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Verified</p></div>
        ,
        action: <Link to="/admin/user/profile"><div className='d-flex gap-2 align-items-center text-dark'><p className='m-0'>Send invoice</p> <Icon.ArrowRight/></div></Link>
      },
      {
        name: 'Peter pan',
        type: 'Vendor',
        email: 'peter@email.com',
        status: <div className='not-verified d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Not verified</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>Send Invoice</p> <Icon.ArrowRight/></div>
      },
      {
        name: 'Peter pan',
        type: 'Vendor',
        email: 'peter@email.com',
        status: <div className='verified d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Verified</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>Send invoice</p> <Icon.ArrowRight/></div>
      },
      {
        name: 'Peter pan',
        type: 'Vendor',
        email: 'peter@email.com',
        status: <div className='not-verified d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Not Verified</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>Send Invoice</p> <Icon.ArrowRight/></div>
      },
      {
        name: 'Peter pan',
        type: 'Vendor',
        email: 'peter@email.com',
        status: <div className='verified d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Verified</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>Send invoice</p> <Icon.ArrowRight/></div>
      },
      {
        name: 'Peter pan',
        type: 'Vendor',
        email: 'peter@email.com',
        status: <div className='verified d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Verified</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>Send invoice</p> <Icon.ArrowRight/></div>
      },
      {
        name: 'Peter pan',
        type: 'Vendor',
        email: 'peter@email.com',
        status: <div className='verified d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Verified</p></div>
        ,
        action: <div className='d-flex gap-2 align-items-center'><p className='m-0'>Send invoice</p> <Icon.ArrowRight/></div>
      }
    ]
  };

  return (
    <>  
    {/* <div className="d-flex  flex-column gap-3 full">
      <Navigationbar />
      <div className="d-flex gap-4 w-100 max-width justify-content-start  ">
          <SidebarDashboard /> */}

        <div className="background-total p-3 rounded-3">
          <div className='d-flex flex-row justify-content-between'>
            <div className='d-flex flex-row align-items-center gap-2'>
            <div className="fs-5">User</div> 
            <div className='text-secondary '> <Icon.ChevronRight size={20} /> </div>
            <div className="text-secondary fs-5"> All</div>
            </div>
           <button class='px-2 py-1 fs-6 ' style={{backgroundColor:"#023047"}}>+ Add New</button>
          </div>


          <div>
            <Tabs
              defaultActiveKey="all"
              id="uncontrolled-tab-example"
              className="mb-3 bg-white tab"
            >
              <Tab eventKey="all" title="All">
                <div className=''>
             
                  <MDBDataTableV5 responsive
                  striped
                  bordered
                  small
                  data={data}
                  sortable={true}
                  exportToCSV={true}
                  
                />
                </div>
              </Tab>
              <Tab eventKey="Customer" title="Customer">
              Customer
              </Tab>
              <Tab eventKey="Designer" title="Designer">
              Designer
              </Tab>
              <Tab eventKey="Vendor" title="Vendor">
              Vendor
              </Tab>
              <Tab eventKey="Admin" title="Admin">
                Admin
              </Tab>
              <Tab eventKey="Customer-Support" title="Customer-Support">
              Customer-Support
              </Tab>
            </Tabs>
          </div>
        </div>


      {/* </div> */}
   {/* </div> */}
  </>
    
  );
}


export default User;
