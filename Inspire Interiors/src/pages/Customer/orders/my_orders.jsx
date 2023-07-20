import React from 'react';
import { Button, InputGroup, Nav, Navbar } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { HiFilter } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarDashboard from '../../../components/customer/sidebar';
import Navigationbar from '../../../components/navigationbar';
import './../../../styles/customer/myOrders.css';



const MyOrder = () => (

  <>
    <div className="d-flex flex-column gap-3 full">
      <Navigationbar />
      <div className="d-flex gap-4 w-100 justify-content-start  ">

        <SidebarDashboard />

        <div className="background p-3 rounded-3">
          <div className='row'>
             <p className='heading'>My Orders</p>
            </div>
            
            <div>
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3 bg-white tab"
              >
                <Tab eventKey="all" title="All">
                  <div className="d-flex flex-column gap-3 ">
                    <div className='d-flex gap-3'>
                      <Button type='button' className='d-flex gap-2 align-items-center filter-btn'>
                        <HiFilter />
                       
                        Filter
                      </Button>
                      <div className='d-flex gap-2 search-input align-items-center rounded-3  px-2  col-7 col-sm-4 col-md-3 col-lg-3 '>
                        <BiSearch/>
                      <input className='bg-white search-field col-11 ' type='text' placeholder='Search here'>
                        
                      </input>
                      </div>
                      
                    </div>
                  </div>
                  All
                </Tab>
                <Tab eventKey="Completed" title="Completed">
                  Completed
                </Tab>
                <Tab eventKey="Ongoing" title="Ongoing">
                  Ongoing
                </Tab>
                <Tab eventKey="Delayed" title="Delayed">
                  Delayed
                </Tab>
                <Tab eventKey="Canceled" title="Canceled">
                  Canceled
                </Tab>
              </Tabs>
            </div>
          </div>

        
      </div>
    </div>
  </>



);

export default MyOrder;
