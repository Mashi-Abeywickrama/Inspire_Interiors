import React from 'react'
import Header2 from "../../components/header2.jsx"
import * as Icon from 'react-bootstrap-icons';
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// import './../../styles/user.css';
import SidebarDashboard from '../../components/customer/sidebar.jsx';
import Navigationbar from "../../components/navigationbar";


const AdminDashboard=()=> {
  return (
    <div>
      <div className="d-flex flex-column  gap-3">
      <Navigationbar/>
      <div className="d-flex gap-4 ">
       <SidebarDashboard/>

      
       <div className='d-flex flex-col fs-2'>
        <div className="">User </div> 
        <div className='text-secondary'> <Icon.ChevronRight size={24} /> </div>
        <div className="text-secondary"> All</div>
       </div> 

       {/* <div className=' fs-6 border-bottom' style={{marginTop: '50px', height: '1.27px' }}>
       <div className="d-flex gap-4" style={{ backgroundColor: '#2a6082' }}>
        <tabs className='d-flex gap-4' >
          <tab>All</tab>
        <tab>Vendor</tab>
        <tab>Customer</tab>
        <tab>Admin</tab>
        <tab>Designer</tab>
        <tab>Customer care</tab>
        </tabs>
        </div>
       </div> */}

       {/* <div className='bar'>
       <div className='icon-1'> <Icon.FunnelFill size={20} /> </div>
        <div className="filter">Filter</div>
       </div> */}

       {/* <div className="table-header">
        <div className="head">User Name</div>
        <div className="head">User Type</div>
        <div className="head">Email Address</div>
        <div className="head">Status</div>
      </div> */}

      
    </div>
    </div>
    </div>
  )
}
export default AdminDashboard;
