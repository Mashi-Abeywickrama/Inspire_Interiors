// import React from 'react';
import React, { useState, useEffect } from 'react';
import { Button, InputGroup, Nav, Navbar } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { MDBDataTableV5, MDBTable } from 'mdbreact';
import { Link } from 'react-router-dom';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './../../styles/customer/myOrders.css';
import './../../styles/admin/table.css';



const Order = () => {

  const apiBaseURL = 'http://localhost:8080';

  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosInstance = axios.create({
    baseURL: apiBaseURL,
    timeout: 5000,
  });

  const fetchOrderData = async () => {
    try {
      const response = await axios.get(apiBaseURL + '/getorder');
      const orderData = response.data;
      setOrderData(orderData); // Update the state with fetched user data
      setLoading(false);
    } catch (error) {
      console.error('Error fetching order data:', error);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, []);

  const data = {
    columns: [
      {
        label: "REF_NO",
        field: "ref_no",
        sort: "asc",
        width: 150,
      },
      {
        label: "ORDERED_DATE",
        field: "date",
        sort: "asc",
        width: 150,
      },
      {
        label: "PRODUCT/DESIGN",
        field: "product",
        sort: "asc",
        width: 150,
      },
      {
        label: "CUSTOMER",
        field: "customer",
        sort: "asc",
        width: 270,
      },
      {
        label: "VENDOR/DESIGNER",
        field: "designer",
        sort: "asc",
        width: 270,
      },
      {
        label: "QTY",
        field: "qty",
        sort: "asc",
        width: 200,
      },
      {
        label: "PRICE",
        field: "price",
        sort: "asc",
        width: 150,
      },
      {
        label: "COMMISSION",
        field: "commission",
        sort: "asc",
        width: 100,
      },
      {
        label: "STATUS",
        field: "status",
        sort: "asc",
        width: 100,
      },
      {
        label: "  ",
        field: "action",
        sort: "NONE",
        width: 100,
      },
    ],

    rows: orderData.map((order) => ({
      ref_no: order.ref_no,
      date: order.date,
      product:order.product||order.design,
      customer: order.customer,
      designer: order.designer||order.vendor,
      qty:order.qty,
      price:order.price,
      commission:order.commission,
      status:order.status,
      action: 
          <Link to="/admin/orders/invoice"><div className="d-flex gap-2 align-items-center text-dark">
            <p className="m-0 ">send invoice</p> <Icon.ArrowRight />
          </div></Link>
      
      
      // other fields...
    })),
   
  };

  return (
    <>  
    {/* <div className="d-flex  flex-column gap-3 full">
      <Navigationbar />
      <div className="d-flex gap-4 w-100 max-width justify-content-start  ">
          <SidebarDashboard /> */}

        <div className="background-total p-3 rounded-3">
          <div className='row'>
            <p className='heading'>Orders</p>
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


      {/* </div> */}
   {/* </div> */}
  </>
    
  );
}


export default Order;
