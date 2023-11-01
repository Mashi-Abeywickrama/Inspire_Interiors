import React,{useEffect, useState} from 'react';
import '../../styles/vendor/order.css';

import Sofa from "../../assets/img/vendor/sofa.png"
import * as Icon from "react-bootstrap-icons";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/customer/myOrders.css';
import '../../styles/customer/table.css';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { MDBDataTableV5, MDBTable } from 'mdbreact';
import { RadialBarChart, RadialBar, Legend, PieChart, Tooltip } from "recharts";
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useSession} from '../../constants/SessionContext';


const style = {
    top: 90,
    left: 270,
};

const Order = () => {

    const [orderData, setOrderData] = useState([]);
    const [selectedTab, setSelectedTab] = useState('All');
    const [loading, setLoading] = useState(true);
    const [customizeData, setCustomizedData] = useState([]);
    const [customer, setCustomer] = useState([]);

    const [NewOrderCount, setNewOrderCount] = useState(null);
    const [CompletedOrderCount, setCompletedOrderCount] = useState(null);
    const [OngoingOrderCount, setOngoingOrderCount] = useState(null);
    const [CancelledOrderCount, setCancelledOrderCount] = useState(null);


    const sessionItems = useSession();
    const userId = sessionItems.sessionData.userid;


    const apiURL = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiURL,
        timeout: 5000,
    });

    useEffect(() => {
        axiosInstance
        .get(`/getorder/vendor/${userId}`)
        .then((response) => {

            setOrderData(response.data);
            setLoading(false);

            console.log(response.data);
        })
        .catch((error) => {
            console.log("Error fetching data", error);

            setLoading(false);
        });
    }, []);

    useEffect(() => {
        axiosInstance
        .get(`/customizedorder`)
        .then((response) => {
            setCustomizedData(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log("Error fetching customized Data",error);
        })
    },[]);

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

    useEffect(() => {
        axiosInstance
            .get(`/getorder/vendor/${userId}`)
            .then((response) => {
                setOrderData(response.data);
                console.log(response.data);

                const newOrders = response.data.filter((order) => order.status === "New");
                setNewOrderCount(newOrders.length);

                const completedOrders = response.data.filter((order) => order.status === "Completed");
                setCompletedOrderCount(completedOrders.length);

                const OngoingOrders = response.data.filter((order) => order.status !== "Completed" && order.status !== "New" && order.status !== "Canceled" );
                setOngoingOrderCount(OngoingOrders.length);

                const canceledOrders = response.data.filter((order) => order.status === "Canceled");
                setCancelledOrderCount(canceledOrders.length);

            }).catch((error) => {
                console.log("Fetching error", error);
        });
    }, []);

    const radarData = [
        {
            name: "Canceled",
            OrderCount: CancelledOrderCount,
            fill: "#EF333F"
        },
        {
            name: "Ongoing",
            OrderCount: OngoingOrderCount,
            fill: "#F5B640"
        },
        {
            name: "New",
            OrderCount: NewOrderCount,
            fill: "#36ACF6"
        },
        {
            name: "Completed",
            OrderCount: CompletedOrderCount,
            fill: "#007F00"
        }
]

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
              status: customizeItem.status
            
            };
          } else {
            return customizeItem;
          }
        });
      
        return mergedData;
      };
    
      const mergedCustomizedOrder = mergeData(customizeData, customer);
      console.log("merged Data", mergedCustomizedOrder);

      const sortedCustomizedData = mergedCustomizedOrder.sort((a, b) => b.customizedorderid - a.customizedorderid);

      // Take the first 4 products (latest products)
      const latestCustomizedorder = sortedCustomizedData.slice(0, 4);

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
          Recieved: {
            className: 'ongoing d-flex gap-2 align-items-center',
            text: 'Recieved',
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

    const filteredCustomizedData = (status) => 
        latestCustomizedorder.filter((item) => item.status === status);

    const newData = {
        columns: [
            {
              label: 'PRODUCT DETAILS',
              field: 'product',
              sort: 'asc',
              width: 180
            },
            {
                label: 'CUSTOMER',
                field: 'customer',
                sort: 'asc',
                width: 150
              }
        ],
        rows: filteredCustomizedData("New").map((custom) => {
            return {   
                product: <div className='d-flex flex-row gap-3'>
                            <Link to={`/vendor/order/customrequest?id=${custom.customizedorderid}`}><img src={Sofa}/></Link>
                            <p className="fs-6 fw-normal mt-2">{custom.productname}</p>
                        </div>,
                customer: <p className='align-items-center fs-6 fw-normal mt-2'>{custom.username}</p>                   
            }
        })
    };
    console.log(filteredCustomizedData("New"));

    const acceptedData = {
        columns: [
            {
              label: 'PRODUCT DETAILS',
              field: 'product',
              sort: 'asc',
              width: 150
            },
            {
              field: 'status',
              sort: 'asc',
              width: 270
            },
        ],
        rows: filteredCustomizedData("Accepted").map((acceptorder) => {
            return{  
                product: <div className='d-flex flex-row gap-3'>
                            <Link to={`/vendor/order/acceptrequest?id=${acceptorder.customizedorderid}`}><img src={Sofa}/></Link>
                            <p className="fs-6 fw-normal mt-2">{acceptorder.productname}</p>
                        </div>,
                status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>{acceptorder.status}</p></div>
            }
        })
    };

    const filteredData = (status) => 
        orderData.filter((item) => item.status === status);


    return (
        <>
            <div className='orders-container background-order accordion rounded-3 mb-4 me-5'>
                <div className='w-100 d-flex flex-column flex-lg-row gap-4'>
                    <div className='col-lg-8 bg-white rounded-3 shadow p-4'>
                        <div className='d-flex flex-row gap-2'>
                            <p className='fs-5 fw-bold Cabin-text text-dark'>Orders</p>
                            <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                            <p className='fs-5 fw-bold Cabin-text text-dark'>{selectedTab}</p>

                        </div>
                        <div>
                            <Tabs
                                defaultActiveKey="all"
                                id="uncontrolled-tab-example"
                                className="mb-3 bg-white tab"
                                onSelect={(selectedKey) => setSelectedTab(selectedKey)}
                            >
                                <Tab eventKey="all" title="All">
                                    <div className='p-4'>

                                    {loading ? (
                                        <p>Loading...</p>
                                    ) : (
                                        <MDBDataTableV5 responsive
                                            striped
                                            bordered
                                            small
                                            data = {{
                                                columns: [
                                                    {
                                                        label: 'CUSTOMER NAME',
                                                        field: 'name',
                                                        sort: 'asc',
                                                        width: 150
                                                    },
                                                    {
                                                        label: 'REFERENCE NO',
                                                        field: 'number',
                                                        sort: 'asc',
                                                        width: 270
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
                                                rows: orderData.map((item) => ({
                                                    name: item.customer,
                                                    number: item.ref_no,
                                                    quantity: item.quantity,
                                                    date: item.date,
                                                    action: <Link to={`/vendor/order/vieworder?id=${item.orderid}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>,
                                                    status: getOrderStatus(item.status)
                                                  })),
                                                }}
                                                sortable={true}
                                                exportToCSV={true}
                                                paging={true}
                                                searching={true} 
                                        />
                                    )}
                                    </div>
                                </Tab>
                                <Tab eventKey="New" title="New">
                                <div className='p-4'>
                                    {loading ? (
                                        <p>Loading...</p>
                                    ) : (

                                        <MDBDataTableV5 responsive
                                            striped
                                            bordered
                                            small

                                            data = {{
                                                columns: [
                                                    {
                                                        label: 'CUSTOMER NAME',
                                                        field: 'name',
                                                        sort: 'asc',
                                                        width: 150
                                                    },
                                                    {
                                                        label: 'REFERENCE NO',
                                                        field: 'number',
                                                        sort: 'asc',
                                                        width: 270
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
                                                rows: filteredData('New').map((item) => ({
                                                    name: item.customer,
                                                    number: item.ref_no,
                                                    quantity: item.quantity,
                                                    date: item.date,
                                                    action: <Link to={`/vendor/order/vieworder?id=${item.orderid}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>,
                                                    status: getOrderStatus(item.status)
                                                  })),
                                                }}
                                                sortable={true}
                                                exportToCSV={true}
                                                paging={true}
                                                searching={true} 
                                        />
                                    )}
                                    </div>
                                </Tab>
                                <Tab eventKey="Ongoing" title="Ongoing">
                                <div className='p-4'>
                                    {loading ? (
                                        <p>Loading...</p>
                                    ) : (
                                        <MDBDataTableV5 responsive
                                            striped
                                            bordered
                                            small
                                            data = {{
                                                columns: [
                                                    {
                                                        label: 'CUSTOMER NAME',
                                                        field: 'name',
                                                        sort: 'asc',
                                                        width: 150
                                                    },
                                                    {
                                                        label: 'REFERENCE NO',
                                                        field: 'number',
                                                        sort: 'asc',
                                                        width: 270
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
                                                rows: filteredData('Ongoing').map((item) => ({
                                                    name: item.customer,
                                                    number: item.ref_no,
                                                    quantity: item.quantity,
                                                    date: item.date,
                                                    action: <Link to={`/vendor/order/vieworder?id=${item.orderid}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>,
                                                    status: getOrderStatus(item.status)
                                                  })),
                                                }}
                                                sortable={true}
                                                exportToCSV={true}
                                                paging={true}
                                                searching={true} 
                                        />
                                    )}
                                    </div>
                                </Tab>
                                <Tab eventKey="Completed" title="Completed">
                                <div className='p-4'>
                                    {loading ? (
                                        <p>Loading...</p>
                                    ) : (
                                        <MDBDataTableV5 responsive
                                            striped
                                            bordered
                                            small
                                            data = {{
                                                columns: [
                                                    {
                                                        label: 'CUSTOMER NAME',
                                                        field: 'name',
                                                        sort: 'asc',
                                                        width: 150
                                                    },
                                                    {
                                                        label: 'REFERENCE NO',
                                                        field: 'number',
                                                        sort: 'asc',
                                                        width: 270
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
                                                rows: filteredData('Completed').map((item) => ({
                                                    name: item.customer,
                                                    number: item.ref_no,
                                                    quantity: item.quantity,
                                                    date: item.date,
                                                    action: <Link to={`/vendor/order/vieworder?id=${item.orderid}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>,
                                                    status: getOrderStatus(item.status)
                                                  })),
                                                }}
                                                sortable={true}
                                                exportToCSV={true}
                                                paging={true}
                                                searching={true} 
                                        />
                                    )}
                                    </div>
                                </Tab>
                                <Tab eventKey="Canceled" title="Canceled">
                                <div className='p-4'>
                                    {loading ? (
                                        <p>Loading...</p>
                                    ) : (
                                        <MDBDataTableV5 responsive
                                            striped
                                            bordered
                                            small
                                            data = {{
                                                columns: [
                                                    {
                                                        label: 'CUSTOMER NAME',
                                                        field: 'name',
                                                        sort: 'asc',
                                                        width: 150
                                                    },
                                                    {
                                                        label: 'REFERENCE NO',
                                                        field: 'number',
                                                        sort: 'asc',
                                                        width: 270
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
                                                rows: filteredData('Canceled').map((item) => ({
                                                    name: item.customer,
                                                    number: item.ref_no,
                                                    quantity: item.quantity,
                                                    date: item.date,
                                                    action: <Link to={`/vendor/order/vieworder?id=${item.orderid}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>,
                                                    status: getOrderStatus(item.status)
                                                  })),
                                                }}
                                                sortable={true}
                                                exportToCSV={true}
                                                paging={true}
                                                searching={true} 
                                        />
                                    )}
                                    </div>

                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='d-flex flex-column gap-3'>
                            <div className='col-lg-12 bg-white rounded-3 shadow p-4'>
                                <div className='d-flex flex-row gap-3'>
                                    <p className='fs-5 fw-bold Cabin-text'>Customized Orders</p>
                                    <Link to="/vendor/order/customizeorders"><p className="fs-6 fw-semibold mt-1 Cabin-text" style={{ color: "#035C94" }}>See all<Icon.ArrowRight color="#035C94" className="mx-1"/></p></Link>
                                </div>
                                <Tabs
                                    defaultActiveKey="New"
                                    id="uncontrolled-tab-example"
                                    className="mb-3 bg-white tab"
                                >
                                    <Tab eventKey="New" title="New">
                                        <div className=''>

                                            <MDBDataTableV5 responsive
                                                striped
                                                bordered
                                                small
                                                data={newData}
                                                sortable={false}
                                                exportToCSV={true}
                                                paging={false}
                                                searching={false} />

                                        </div>
                                    </Tab>
                                    <Tab eventKey="Accepted" title="Accepted">
                                        <div className=''>

                                            <MDBDataTableV5 responsive
                                                striped
                                                bordered
                                                small
                                                data={acceptedData}
                                                sortable={false}
                                                exportToCSV={true}
                                                paging={false}
                                                searching={false} />

                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                            <div className='col-lg-12 bg-white rounded shadow p-4'>
                                <div className='d-flex flex-row justify-content-between align-items-center'>
                                    <p className='fs-5 fw-bold Cabin-text m-0'>Order Summary</p>
                                </div>
                                <RadialBarChart
                                    width={280}
                                    height={300}
                                    cx={130}
                                    cy={150}
                                    innerRadius={20}
                                    outerRadius={140}
                                    barSize={15}
                                    data={radarData}
                                >
                                    <RadialBar
                                        minAngle={15}
                                        label={{ fill: '#FFFFFF', position: 'insideStart' }}
                                        background
                                        clockWise
                                        dataKey="OrderCount" />
                                    <Legend
                                        iconSize={10}
                                        width={120}
                                        height={140}
                                        layout="horizonal"
                                        horizonalAlign="middle"
                                        wrapperStyle={style} />
                                    <Tooltip />
                                </RadialBarChart>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Order;