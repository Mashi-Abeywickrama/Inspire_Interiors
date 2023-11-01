import React from 'react';
import { useState, useEffect } from 'react';
import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { HiFilter } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { MDBDataTableV5, MDBTable } from 'mdbreact';

import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../../../styles/customer/myOrders.css';
import './../../../styles/customer/table.css';
import axios from 'axios';
import { useSession } from '../../../constants/SessionContext';

const Custom = () => {
    const [customizedorderData, setCustomizedOrderData] = useState({
        productdescription: '',
        productspecification: '',
        budget: '',
        additionalnotes: '',
        productimage: '',
        customerid: '',
        vendorid: '',
        status: "New",
        productname:''
    });

    const [mycustomizedorderData, setMyCustomizedOrderData] = useState([]);

    const sessionItems = useSession();
    const userId = sessionItems.sessionData.userid;

    const updateOfferData = (field, value) => {
        setCustomizedOrderData((prevDetails) => ({
            ...prevDetails,
            [field]: value ,
        }));
    };

    const apiBaseURL = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000,
    });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
      console.log(customizedorderData.additionalnotes);

      axiosInstance.post("/addcustomizedorder",  {         
            productdescription: customizedorderData.productdescription,
                productspecification: customizedorderData.productspecification,
                budget: customizedorderData.budget,
                additionalnotes: customizedorderData.additionalnotes,
                productimage: customizedorderData.productimage,
                customerid: userId,
                status: "New",
                productname: customizedorderData.productname
            
            }).then(() => {
                console.log("Added")
                }).catch((error) => {
                console.log(error);
            });

    };

    useEffect(() => {
        // Make an API request to fetch the shipping addresses from the backend
        axiosInstance.get(`/customizedorder/${userId}`) // Replace this with the actual API URL},
            .then(response => {
                setMyCustomizedOrderData(response.data); // Assuming the response is an array of shipping addresses
                console.log('my orders:', response.data);
            })
            .catch(error => {
                console.error('Error fetching shipping addresses:', error);
            });
    }, []); // Fetch the addresses when the component mounts

    const getOrderStatus = (status) => {
    const statusDetails = {
      New: {
        className: 'new d-flex gap-2 align-items-center',
        text: 'New',
      },
      Completed: {
        className: 'completed d-flex gap-2 align-items-center',
        text: 'Completed',
      },
      Ongoing: {
        className: 'ongoing d-flex gap-2 align-items-center',
        text: 'Ongoing',
      },

      Prepared: {
        className: 'ongoing d-flex gap-2 align-items-center',
        text: 'Prepared',
      },

      Shipped: {
        className: 'ongoing d-flex gap-2 align-items-center',
        text: 'Shipped',
      },

      Delivered: {
        className: 'ongoing d-flex gap-2 align-items-center',
        text: 'Delivered',
      },

       Confirmed: {
        className: 'ongoing d-flex gap-2 align-items-center',
        text: 'Confirmed',
      },

      Delayed: {
        className: 'delayed d-flex gap-2 align-items-center',
        text: 'Delayed',
      },
      Canceled: {
        className: 'outstock d-flex gap-2 align-items-center',
        text: 'Canceled',
      },
    };
    if (statusDetails.hasOwnProperty(status)) {
      const { className, text } = statusDetails[status];
      return (
        <div className={className}>
          <i className="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">{text}</p>
        </div>
      );
    }
    return null;
  };

  const filteredData = (status) =>
    mycustomizedorderData.filter((item) => item.status === status);


    
    

  return (
    <>
      <div className="background-total p-3 rounded-3">
        <div className='row'>
            <div className='d-flex flex-row justify-content-between'>
                <p className='heading'>My Customized Orders</p>
                <div>
                    <button className='add-btn' onClick={handleShow}><Icon.PlusLg color="white" size={20}/>Add New</button>

                    <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton>
                            <Modal.Title>New Customize Order</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={handleSubmit}>
                                <input type="hidden" name="customid"  />
                                <div className="d-flex flex-column mx-4 gap-3">
                                  <div className='mb-1'>
                                        <label>Product Name</label>
                                        <input type='text' name="productname" className='form-control Cabin-text' value={customizedorderData.productname}onChange={(e) =>updateOfferData(e.target.name, e.target.value)} style={{backgroundColor: "#F2FAFF"}}></input>
                                    </div>
                                    <div className='mb-1'>
                                        <label>Product Description</label>
                                        <textarea type='text' name="productdescription" autoFocus className='form-control Cabin-text' value={customizedorderData.productdescription}onChange={(e) =>updateOfferData(e.target.name, e.target.value)} style={{backgroundColor: "#F2FAFF"}}></textarea>
                                    </div>
                                    <div className='mb-1'>
                                        <label>Product Specification</label>
                                        <textarea type='text' name="productspecification" className='form-control Cabin-text' value={customizedorderData.productspecification}onChange={(e) =>updateOfferData(e.target.name, e.target.value)} style={{backgroundColor: "#F2FAFF"}}></textarea>
                                    </div>
                                    <div className='mb-1'>
                                        <label>Product Budget</label>
                                        <input type='text' name="budget" className='form-control Cabin-text' value={customizedorderData.budget}onChange={(e) =>updateOfferData(e.target.name, e.target.value)} style={{backgroundColor: "#F2FAFF"}}></input>
                                    </div>
                                    <div className='mb-1'>
                                        <label>Additional Notes</label>
                                        <textarea type='textarea' name="additionalnotes" className='form-control Cabin-text' value={customizedorderData.additionalnotes}onChange={(e) =>updateOfferData(e.target.name, e.target.value)} style={{backgroundColor: "#F2FAFF"}}></textarea>
                                    </div>
                                    <div className='mb-1'>
                                        <label>Product Images</label>
                                        <input type='file' name="productimage" className='form-control Cabin-text' value={customizedorderData.productimage}onChange={(e) =>updateOfferData(e.target.name, e.target.value)} style={{backgroundColor: "#F2FAFF"}}></input>
                                    </div>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <button type="button" className='withdraw-btn m-4' onClick={handleClose}><Icon.PlusLg color="white" size={20} />Discard Changes</button>
                                        <button type="submit" className='accept-btn m-4'><Icon.PlusLg color="white" size={20} />Create Order</button>
                                    </div>
                                </div>
                            </form>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>

        <div>
          <Tabs
            defaultActiveKey="all"
            id="uncontrolled-tab-example"
            className="mb-3 bg-white tab"
          >
            <Tab eventKey="all" title="All">
              <Link to="vieworder"><div className=''>

                <MDBDataTableV5 responsive
                  striped
                  bordered
                  small
                  data={{
                    columns: [
                      {
                        label: 'REFERENCE NO',
                        field: 'number',
                        sort: 'asc',
                        width: 270
                      },
                      {
                        label: 'VENDOR NAME',
                        field: 'name',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'QUANTITY',
                        field: 'quantity',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: 'DELIVERY DATE',
                        field: 'date',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'STATUS',
                        field: 'status',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: ' ',
                        field: 'action',
                        sort: 'NONE',
                        width: 100
                      }
                    ],
                    rows: mycustomizedorderData.map((item) => ({
                      name: item.customerid,
                      number: item.customerid,
                      quantity: item.customerid,
                      date: item.customerid,
                      action: <Link to={`/customer/orders/vieworder/${item.orderid}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94" }}><p className='m-0'>View More</p> <Icon.ArrowRight /></div></Link>,
                      status: getOrderStatus(item.status)
                    })),
                  }}
                  sortable={true}
                  exportToCSV={true}
                  paging={true}
                  searching={true}
                />
              </div>
              </Link>
            </Tab>
            <Tab eventKey="New" title="New">
              <div className=''>

                <MDBDataTableV5 responsive
                  striped
                  bordered
                  small
                  data={{
                    columns: [
                      {
                        label: 'REFERENCE NO',
                        field: 'number',
                        sort: 'asc',
                        width: 270
                      },
                      {
                        label: 'VENDOR NAME',
                        field: 'name',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'QUANTITY',
                        field: 'quantity',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: 'DELIVERY DATE',
                        field: 'date',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'STATUS',
                        field: 'status',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: ' ',
                        field: 'action',
                        sort: 'NONE',
                        width: 100
                      }
                    ],
                    rows: filteredData("New").map((item) => ({
                      name: item.name,
                      number: item.ref_no,
                      quantity: item.quantity,
                      date: item.date,
                      action: <Link to={`/customer/orders/vieworder/${item.orderid}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94" }}><p className='m-0'>View More</p> <Icon.ArrowRight /></div></Link>,
                      status: getOrderStatus(item.status)
                    })),
                  }}
                  sortable={true}
                  exportToCSV={true}
                  paging={true}
                  searching={true}
                />
              </div>
              
            </Tab>
          </Tabs>
        </div>
{/* Designs */}
        <div>
          <Tabs
            defaultActiveKey="all"
            id="uncontrolled-tab-example"
            className="mb-3 bg-white tab"
          >
            <Tab eventKey="all" title="All">
              <Link to="vieworder"><div className=''>

                <MDBDataTableV5 responsive
                  striped
                  bordered
                  small
                  data={{
                    columns: [
                      {
                        label: 'REFERENCE NO',
                        field: 'number',
                        sort: 'asc',
                        width: 270
                      },
                      {
                        label: 'VENDOR NAME',
                        field: 'name',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'QUANTITY',
                        field: 'quantity',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: 'DELIVERY DATE',
                        field: 'date',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'STATUS',
                        field: 'status',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: ' ',
                        field: 'action',
                        sort: 'NONE',
                        width: 100
                      }
                    ],
                    rows: mycustomizedorderData.map((item) => ({
                      name: item.customerid,
                      number: item.customerid,
                      quantity: item.customerid,
                      date: item.customerid,
                      action: <Link to={`/customer/orders/vieworder/${item.orderid}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94" }}><p className='m-0'>View More</p> <Icon.ArrowRight /></div></Link>,
                      status: getOrderStatus(item.status)
                    })),
                  }}
                  sortable={true}
                  exportToCSV={true}
                  paging={true}
                  searching={true}
                />
              </div>
              </Link>
            </Tab>
            <Tab eventKey="New" title="New">
              <div className=''>

                <MDBDataTableV5 responsive
                  striped
                  bordered
                  small
                  data={{
                    columns: [
                      {
                        label: 'REFERENCE NO',
                        field: 'number',
                        sort: 'asc',
                        width: 270
                      },
                      {
                        label: 'VENDOR NAME',
                        field: 'name',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'QUANTITY',
                        field: 'quantity',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: 'DELIVERY DATE',
                        field: 'date',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'STATUS',
                        field: 'status',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: ' ',
                        field: 'action',
                        sort: 'NONE',
                        width: 100
                      }
                    ],
                    rows: filteredData("New").map((item) => ({
                      name: item.name,
                      number: item.ref_no,
                      quantity: item.quantity,
                      date: item.date,
                      action: <Link to={`/customer/orders/vieworder/${item.orderid}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94" }}><p className='m-0'>View More</p> <Icon.ArrowRight /></div></Link>,
                      status: getOrderStatus(item.status)
                    })),
                  }}
                  sortable={true}
                  exportToCSV={true}
                  paging={true}
                  searching={true}
                />
              </div>
              
            </Tab>
          </Tabs>
        </div>

      </div>
    </>

  );
}


export default Custom;
