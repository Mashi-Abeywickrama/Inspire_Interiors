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

  const fetchOrderData = async (status) => {
    try {
      const response = await axios.get(apiBaseURL + `/getorder`);
      const orderData = response.data;
      setOrderData(orderData); 
      setLoading(false);
    } catch (error) {
      console.error(`Error fetching order data with status ${status}:`, error);
    }
  };
  

  useEffect(() => {
    fetchOrderData('all'); // Fetch all orders initially
  }, []);
  
  const handleTabSelect = (status) => {
    fetchOrderData(status); // Fetch orders based on the selected tab status
  };

  const filteredData = (status) =>
  orderData.filter((item) => item.status === status);
  

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
      qty:order.quantity,
      price:order.price,
      commission:order.commission,
      status:order.status,
      action: order.status === 'completed' ? (
        <Link to={`/admin/orders/invoice/${order.orderid}`}>
          <div className="d-flex gap-2 align-items-center text-dark">
            <p className="m-0">send invoice</p> <Icon.ArrowRight />
          </div>
        </Link>
      ): (
        <div className="d-flex gap-2 align-items-center text-dark">
        <p className="m-0"  style={{color:"gray"}}>send invoice</p> <Icon.ArrowRight />
      </div> // Display the status text if not completed
    ),
      
      
      // other fields...
    })),
   
  };

  const data1 = {
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

    rows: filteredData('New').map((order) => ({
      ref_no: order.ref_no,
      date: order.date,
      product:order.product||order.design,
      customer: order.customer,
      designer: order.designer||order.vendor,
      qty:order.quantity,
      price:order.price,
      commission:order.commission,
      status:order.status,
      action: 
        //  <Link to={`/admin/orders/invoice/${order.orderid}`}>
            <div className="d-flex gap-2 align-items-center text-dark">
             <p className="m-0 "  style={{color:"gray"}}>send invoice</p> <Icon.ArrowRight  style={{color:"gray"}} />
           </div>
         // </Link> 
      
      
      // other fields...
    })),
   
  };

  const data2 = {
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

    rows: filteredData('completed').map((order) => ({
      ref_no: order.ref_no,
      date: order.date,
      product:order.product||order.design,
      customer: order.customer,
      designer: order.designer||order.vendor,
      qty:order.quantity,
      price:order.price,
      commission:order.commission,
      status:order.status,
      action: 
          <Link to={`/admin/orders/invoice/${order.orderid}`}>
            <div className="d-flex gap-2 align-items-center text-dark">
            <p className="m-0 ">send invoice</p> <Icon.ArrowRight />
          </div>
        </Link> 
      
      
      // other fields...
    })),
   
  };

  const data3 = {
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

    rows: filteredData('cancel').map((order) => ({
      ref_no: order.ref_no,
      date: order.date,
      product:order.product||order.design,
      customer: order.customer,
      designer: order.designer||order.vendor,
      qty:order.quantity,
      price:order.price,
      commission:order.commission,
      status:order.status,
      action:
          // <Link to={`/admin/orders/invoice/${order.orderid}`}>
          <div className="d-flex gap-2 align-items-center text-dark">
             <p className="m-0 "  style={{color:"gray"}}>send invoice</p> <Icon.ArrowRight  style={{color:"gray"}} />
          </div>
          // </Link>
      
      
      // other fields...
    })),
   
  };

  const data4 = {
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

    rows: filteredData('ongoing').map((order) => ({
      ref_no: order.ref_no,
      date: order.date,
      product:order.product||order.design,
      customer: order.customer,
      designer: order.designer||order.vendor,
      qty:order.quantity,
      price:order.price,
      commission:order.commission,
      status:order.status,
      action: 
          // <Link to={`/admin/orders/invoice/${order.orderid}`}>
            <div className="d-flex gap-2 align-items-center text-dark">
            <p className="m-0 " style={{color:"gray"}}>send invoice</p> <Icon.ArrowRight style={{color:"gray"}} />
          </div>
          // {/* </Link> */}
      
      
      // other fields...
    })),
   
  };

  

//  const filterOrdersByStatus = async () => {
//   try {
//     const response = await axios.get(apiBaseURL + `/filtercompleted`);
//     const orderCompleted = response.data;
//     setOrderData(orderCompleted);
//     setLoading(false);
//   } catch (error) {
//     console.error(`Error fetching completed orders:`, error);
//   }
// };


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
              onSelect={handleTabSelect}
            >
              <Tab eventKey="all" title="All">
                <div className="">
             
                  <MDBDataTableV5
                   responsive
                  striped
                  bordered
                  small
                  data={data}
                  sortable={true}
                  exportToCSV={true}
                  
                />
                </div>
              </Tab>
              <Tab eventKey="new" title="New">
                <div className="">
             
                  <MDBDataTableV5
                   responsive
                  striped
                  bordered
                  small
                  data={data1}
                  sortable={true}
                  exportToCSV={true}
                  
                />
                </div>
              </Tab>
              <Tab eventKey="Completed" title="Completed" >
              <div className=''>
             
             <MDBDataTableV5 responsive
             striped
             bordered
             small
             data={data2}
             sortable={true}
             exportToCSV={true}
             
           />
           </div>
              </Tab>
              <Tab eventKey="cancel" title="Cancel">
                <div className="">
             
                  <MDBDataTableV5
                   responsive
                  striped
                  bordered
                  small
                  data={data3}
                  sortable={true}
                  exportToCSV={true}
                  
                />
                </div>
              </Tab>
              <Tab eventKey="Ongoing" title="Ongoing" >
              <div className="">
             
             <MDBDataTableV5
              responsive
             striped
             bordered
             small
             data={data4}
             sortable={true}
             exportToCSV={true}
             
           />
           </div>
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
