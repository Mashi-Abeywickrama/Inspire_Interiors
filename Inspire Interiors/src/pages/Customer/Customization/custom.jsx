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
        status: "New"
    });

    const sessionItems = useSession();
    const userId = sessionItems.sessionData.userid;

    const updateOfferData = (field, value) => {
        setCustomizedOrderData((prevDetails) => ({
            ...prevDetails,
            [field]: value !== undefined ? value : prevDetails[field],
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

        try{
            const response = await axiosInstance.post("/addcustomizedorder", {
                productdescription: customizedorderData.description,
                productspecification: customizedorderData.specification,
                budget: customizedorderData.budget,
                additionalnotes: customizedorderData.notes,
                productimage: customizedorderData.images,
                customerid: userId,

            });
            if(response.status === 200)
            {
              console.log("Response from API:", response.data);
              setShow(false);
            }
        } catch (error) {
            console.log("Error from API:", error);
        }
    };
    
    

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
                                        <label>Product Description</label>
                                        <textarea type='text' name="description" autoFocus className='form-control Cabin-text' value={customizedorderData.description}onChange={(e) =>updateOfferData(e.target.name, e.target.value)} style={{backgroundColor: "#F2FAFF"}}></textarea>
                                    </div>
                                    <div className='mb-1'>
                                        <label>Product Specification</label>
                                        <textarea type='text' name="specification" className='form-control Cabin-text' value={customizedorderData.specification}onChange={(e) =>updateOfferData(e.target.name, e.target.value)} style={{backgroundColor: "#F2FAFF"}}></textarea>
                                    </div>
                                    <div className='mb-1'>
                                        <label>Product Budget</label>
                                        <input type='text' name="budget" className='form-control Cabin-text' value={customizedorderData.budget}onChange={(e) =>updateOfferData(e.target.name, e.target.value)} style={{backgroundColor: "#F2FAFF"}}></input>
                                    </div>
                                    <div className='mb-1'>
                                        <label>Additional Notes</label>
                                        <textarea type='textarea' name="notes" className='form-control Cabin-text' value={customizedorderData.notes}onChange={(e) =>updateOfferData(e.target.name, e.target.value)} style={{backgroundColor: "#F2FAFF"}}></textarea>
                                    </div>
                                    <div className='mb-1'>
                                        <label>Product Images</label>
                                        <input type='file' name="images" className='form-control Cabin-text' value={customizedorderData.images}onChange={(e) =>updateOfferData(e.target.name, e.target.value)} style={{backgroundColor: "#F2FAFF"}}></input>
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

        {/* <div>
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
                    rows: customizedorderData.map((item) => ({
                      name: item.customer,
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
              </Link>
            </Tab>
            <Tab eventKey="Completed" title="Completed">
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
                    rows: customizedorderData.map((item) => ({
                      name: item.customer,
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
              </Link>
            </Tab>
            <Tab eventKey="Ongoing" title="Ongoing">
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
                    rows: customizedorderData.map((item) => ({
                      name: item.customer,
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
              </Link>
            </Tab>
            <Tab eventKey="Delayed" title="Delayed">
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
                    rows: customizedorderData.map((item) => ({
                      name: item.customer,
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
              </Link>
            </Tab>
            <Tab eventKey="Canceled" title="Canceled">
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
                    rows: customizedorderData.map((item) => ({
                      name: item.customer,
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
              </Link>
            </Tab>
          </Tabs>
        </div> */}
      </div>
    </>

  );
}


export default Custom;
