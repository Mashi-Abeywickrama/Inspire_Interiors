import React from 'react'
import Header2 from "../../components/header2.jsx"
import * as Icon from 'react-bootstrap-icons';
import './../../styles/user.css';



export default function dashboard() {
  return (
    <div>
       <Header2/>
       <div className='auto'>
        <div className="User">User </div> 
        <div className='icon'> <Icon.ChevronRight size={24} /> </div>
        <div className="All"> All</div>
       </div>

       <div className='tabs'>
        <div className='buttonset' >
          <button>All</button>
        <button>Vendor</button>
        <button>Customer</button>
        <button>Admin</button>
        <button>Designer</button>
        <button>Customer care</button>
        </div>
        <div className='line-1'></div>
       </div>

       <div className='bar'>
       <div className='icon-1'> <Icon.FunnelFill size={20} /> </div>
        <div className="filter">Filter</div>
       </div>

       <div className="table-header">
        <div className="head">User Name</div>
        <div className="head">User Type</div>
        <div className="head">Email Address</div>
        <div className="head">Status</div>
      </div>

      
    </div>
  )
}
