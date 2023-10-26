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
import { RadialBarChart, RadialBar, Legend } from "recharts";
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useSession} from '../../constants/SessionContext';

const radarData = [
        {
            name: "Completed",
            uv: 14,
            fill: "#EF333F"
        },
        {
            name: "Ongoing",
            uv: 15,
            fill: "#F5B640"
        },
        {
            name: "New",
            uv: 17,
            fill: "#6929F1"
        },
        {
            name: "Customized",
            uv: 12,
            fill: "#36ACF6"
        },
        {
            name: "Canclled",
            uv: 15,
            fill: "#007F00"
        }
]

const acceptedData = {
    columns: [
        {
          label: 'ORDER DETAILS',
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
    rows: [
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <Link to="/vendor/order/vieworder"><img src={Sofa}/></Link>
                    <p className='align-items-center fs-6 fw-semibold mt-3'>Sofa</p>
                </div>,
            status: <div className="d-flex flex-column"><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Accepted</p></div><p className="float-end">23 min ago</p></div>
        },
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <Link to="/vendor/order/vieworder"><img src={Sofa}/></Link>
                    <p className='align-items-center fs-6 fw-semibold mt-3'>Sofa</p>
                </div>,
            status: <div className="d-flex flex-column"><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Accepted</p></div><p className="float-end">23 min ago</p></div>
        },
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <Link to="/vendor/order/vieworder"><img src={Sofa}/></Link>
                    <p className='align-items-center fs-6 fw-semibold mt-3'>Sofa</p>
                </div>,
            status: <div className="d-flex flex-column"><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Accepted</p></div><p className="float-end">23 min ago</p></div>
        },
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <Link to="/vendor/order/vieworder"><img src={Sofa}/></Link>
                    <p className='align-items-center fs-6 fw-semibold mt-3'>Sofa</p>
                </div>,
            status: <div className="d-flex flex-column"><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Accepted</p></div><p className="float-end">23 min ago</p></div>
        },
    ]
}

const newData = {
    columns: [
        {
          label: 'ORDER DETAILS',
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
    rows: [
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <Link to="/vendor/order/customrequest"><img src={Sofa}/></Link>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                        <p className="fs-6 fw-normal">Merlin Die Sofa</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className="d-flex flex-row gap-3"><button className="fs-6 fw-semibold Cabin-text ignore-btn">Ignore</button><button className="fs-6 fw-semibold Cabin-text accepted-btn">Accept</button></div><p className="float-end">23 min ago</p></div>
        },
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <Link to="/vendor/order/customrequest"><img src={Sofa}/></Link>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                        <p className="fs-6 fw-normal">Merlin Die Sofa</p>
                    </div>
                </div>,
            status:<div className="d-flex flex-column"><div className="d-flex flex-row gap-3"><button className="fs-6 fw-semibold Cabin-text ignore-btn">Ignore</button><button className="fs-6 fw-semibold Cabin-text accepted-btn">Accept</button></div><p className="float-end">23 min ago</p></div>
        },
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <Link to="/vendor/order/customrequest"><img src={Sofa}/></Link>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                        <p className="fs-6 fw-normal">Merlin Die Sofa</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className="d-flex flex-row gap-3"><button className="fs-6 fw-semibold Cabin-text ignore-btn">Ignore</button><button className="fs-6 fw-semibold Cabin-text accepted-btn">Accept</button></div><p className="float-end">23 min ago</p></div>
        },
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <Link to="/vendor/order/customrequest"><img src={Sofa}/></Link>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                        <p className="fs-6 fw-normal">Merlin Die Sofa</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className="d-flex flex-row gap-3"><button className="fs-6 fw-semibold Cabin-text ignore-btn">Ignore</button><button className="fs-6 fw-semibold Cabin-text accepted-btn">Accept</button></div><p className="float-end">23 min ago</p></div>
        }
    ]
}

const style = {
    top: 90,
    left: 270,
};

const Order = () => {

    const [orderData, setOrderData] = useState([]);
    const [selectedTab, setSelectedTab] = useState('All');
    const [loading, setLoading] = useState(true);


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
        orderData.filter((item) => item.status === status);


    return (
        <>
            <div className='orders-container background-order accordion rounded-3 mb-4 me-5'>
                <div className='w-100 d-flex flex-column flex-lg-row gap-4'>
                    <div className='col-lg-8 bg-white rounded-3 shadow p-4'>
                        <div className='d-flex flex-row gap-2'>
                            <p className='fs-5 fw-bold Cabin-text'>Orders</p>
                            <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />

                            <p className='fs-5 fw-bold Cabin-text' style={{ color: "#A2A3B1" }}>{selectedTab}</p>

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
                                <Tab eventKey="Delayed" title="Delayed">
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
                                                rows: filteredData('Delayed').map((item) => ({
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
                                    <p className='fs-5 fw-semibold Cabin-text m-0' style={{ color: "#A0AEC0" }}>this month</p>
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
                                        background
                                        clockWise
                                        dataKey="uv" />
                                    <Legend
                                        iconSize={10}
                                        width={120}
                                        height={140}
                                        layout="horizonal"
                                        horizonalAlign="middle"
                                        wrapperStyle={style} />
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