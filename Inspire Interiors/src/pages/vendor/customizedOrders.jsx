import React,{useEffect, useState} from 'react';
import Sofa from '../../assets/img/vendor/sofa.png';

import '../../styles/vendor/customizedOrders.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/customer/myOrders.css';
import '../../styles/customer/table.css';

import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from 'axios';

import { MDBDataTableV5, MDBTable } from 'mdbreact';
import {Link} from 'react-router-dom';


const CustomizeOrders = () => {
    const [customizeData, setCustomizedData] = useState([]);
    const [customer, setCustomer] = useState([]);

    const apiBaseURL = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000,
    });

    useEffect(() => {
        axiosInstance
            .get("/customizedorder")
            .then((response) => {
                setCustomizedData(response.data);
                console.log(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        axiosInstance
        .get(`/filtertype/customer`)
        .then((response) => {
            setCustomer(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log("Error fetching customer Data",error);
        })
    },[]);

    const mergeData = (customizeData, customer) => {
        const mergedData = customizeData.map(
          (customizeItem) => {
          const matchingCustomer = customer.find(
            (customerItem) =>  customerItem.userid === customizeItem.customerid
          );
    
         
      
          if (matchingCustomer ) {
            // Merge the data from both sources
            return {
              ...customizeItem,
              ...matchingCustomer,
              status: customizeItem.status,
            
            };
          } else {
            return {
                ...customizeItem
            };
        }});
      
        return mergedData;
    };
    
    const mergedCustomizedOrder = mergeData(customizeData, customer);
    console.log("merged Data", mergedCustomizedOrder);

    const filteredData = (status) => 
    mergedCustomizedOrder.filter((item) => item.status === status);

    const newRequestData = {
        columns: [
            {
                label: 'CUSTOMER NAME',
                field: 'customer',
                sort: 'asc',
                width: 200
            },
            {
                label: 'PRODUCT DETAILS',
                field: 'product',
                sort: 'asc',
                width: 270
            },
            
            {
                label: 'PRODUCT SPECIFICATION',
                field: 'specification',
                sort: 'asc',
                width: 200
            },
            {
                label: 'ACTIONS',
                field: 'status',
                sort: 'asc',
                width: 100
            },
    
        ],
        rows: filteredData("New").map((neworder) => {
            return {
                customer: neworder.username,
                product: <div className='d-flex flex-row gap-3'>
                    <img src={Sofa}/>
                    <p className='align-items-center fs-6 fw-semibold m-2'>{neworder.productname}</p>
                </div>,
                specification: neworder.productspecification,
                status: <div className='d-flex flex-row gap-4'><button className='accept-btn'>Accept</button><Link to={`/vendor/order/customrequest?id=${neworder.customizedorderid}`}><button className='view-btn'>View</button></Link></div>
            }    
        })
    };

    const acceptedOrderData = {
        columns: [
            {
                label: 'CUSTOMER NAME',
                field: 'customer',
                sort: 'asc',
                width: 200
            },
            {
                label: 'PRODUCT DETAILS',
                field: 'product',
                sort: 'asc',
                width: 270
            },
            
            {
                label: 'PRODUCT SPECIFICATION',
                field: 'specification',
                sort: 'asc',
                width: 200
            },
            {
                label: '',
                field: 'status',
                sort: 'asc',
                width: 50
            },
        ],
        rows: filteredData("Accepted").map((acceptorder) => {
            return {
                customer: acceptorder.username,
                product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <div className="d-flex flex-column">
                    <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>{acceptorder.productname}</p>
                    <p className="fs-6 fw-normal">{}</p>
                    </div>
                </div>,
                specification: acceptorder.productspecification,
                status: <div className='d-flex flex-row gap-5'><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>{acceptorder.status}</p></div><Link to={`/vendor/order/acceptrequest?id=${acceptorder.customizedorderid}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link></div>
            }
        })
    };


    return(
        <>
            <div className="customized-container background-total accordion bg-white rounded-3 mb-4 me-3 p-4">
                <div className='d-flex flex-row gap-2'>
                    <Link to="/vendor/order"><p className='fs-5 fw-bold Cabin-text' style={{ color: "#A2A3B1" }}>Orders</p></Link>
                    <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                    <p className='fs-5 fw-bold Cabin-text text-dark'>Customized</p>
                </div>
                <div>
                    <Tabs
                        defaultActiveKey="new"
                        id="uncontrolled-tab-example"
                        className="mb-3 bg-white tab"
                    >
                        <Tab eventKey="new" title="New Requests">
                            <div className='p-4'>

                                <MDBDataTableV5 responsive
                                    striped
                                    bordered
                                    small
                                    data={newRequestData}
                                    sortable={false}
                                    exportToCSV={true}
                                    paging={true}
                                    searching={true} />
                            </div>
                        </Tab>
                        <Tab eventKey="accepted" title="Accepted Orders">
                            <div className='p-4'>

                                <MDBDataTableV5 responsive
                                    striped
                                    bordered
                                    small
                                    data={acceptedOrderData}
                                    sortable={false}
                                    exportToCSV={true}
                                    paging={true}
                                    searching={true} />
                            </div>
                        </Tab>

                    </Tabs>
                </div>
            </div>


        </>
    )
}

export default CustomizeOrders;