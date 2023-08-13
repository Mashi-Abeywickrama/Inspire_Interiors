import React from 'react';
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
    rows: [
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <img src={Sofa}/>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>Sofa</p>
                        <p className="fs-6 fw-normal">Bed Room</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Accepted</p></div><p className="float-end">23 min ago</p></div>
        },
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <img src={Sofa}/>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>Sofa</p>
                        <p className="fs-6 fw-normal">Bed Room</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Withdraw</p></div><p className="float-end">2 days ago</p></div>
        },
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <img src={Sofa}/>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>Sofa</p>
                        <p className="fs-6 fw-normal">Bed Room</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Accepted</p></div><p className="float-end">23 min ago</p></div>
        },
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <img src={Sofa}/>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>Sofa</p>
                        <p className="fs-6 fw-normal">Bed Room</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Accepted</p></div><p className="float-end">23 min ago</p></div>
        }
    ]
}

const newData = {
    columns: [
        {
          label: 'PRODUCT NAME',
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
                    <img src={Sofa}/>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                        <p className="fs-6 fw-normal">Bed Room</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className="d-flex flex-row gap-3"><button className="fs-6 fw-semibold Cabin-text ignore-btn">Ignore</button><button className="fs-6 fw-semibold Cabin-text accepted-btn">Accept</button></div><p className="float-end">23 min ago</p></div>
        },
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <img src={Sofa}/>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                        <p className="fs-6 fw-normal">Bed Room</p>
                    </div>
                </div>,
            status:<div className="d-flex flex-column"><div className="d-flex flex-row gap-3"><button className="fs-6 fw-semibold Cabin-text ignore-btn">Ignore</button><button className="fs-6 fw-semibold Cabin-text accepted-btn">Accept</button></div><p className="float-end">23 min ago</p></div>
        },
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <img src={Sofa}/>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                        <p className="fs-6 fw-normal">Bed Room</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className="d-flex flex-row gap-3"><button className="fs-6 fw-semibold Cabin-text ignore-btn">Ignore</button><button className="fs-6 fw-semibold Cabin-text accepted-btn">Accept</button></div><p className="float-end">23 min ago</p></div>
        },
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <img src={Sofa}/>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>David Avacado</p>
                        <p className="fs-6 fw-normal">Bed Room</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className="d-flex flex-row gap-3"><button className="fs-6 fw-semibold Cabin-text ignore-btn">Ignore</button><button className="fs-6 fw-semibold Cabin-text accepted-btn">Accept</button></div><p className="float-end">23 min ago</p></div>
        }
    ]
}

const largeTableData = {
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
        label: '  ',
        field: 'action',
        sort: 'NONE',
        width: 100
    }
    ],
    rows: [
    {
        name: 'Justin Septimus',
        number: '14688',
        quantity: '30000',
        date: '27.06.2023',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
        action: <Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
    },
    {
        name: 'Justin Septimus',
        number: '14688',
        quantity: '30000',
        date: '27.06.2023',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
        action: <Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
    },
    {
        name: 'Justin Septimus',
        number: '14688',
        quantity: '30000',
        date: '27.06.2023',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
        action: <Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
    },
    {
        name: 'Justin Septimus',
        number: '14688',
        quantity: '30000',
        date: '27.06.2023',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
        action: <Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
    },
    {
        name: 'Justin Septimus',
        number: '14688',
        quantity: '30000',
        date: '27.06.2023',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
        action: <Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
    },
    {
        name: 'Justin Septimus',
        number: '14688',
        quantity: '30000',
        date: '27.06.2023',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
        action: <Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
    },
    {
        name: 'Justin Septimus',
        number: '14688',
        quantity: '30000',
        date: '27.06.2023',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
        action: <Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
    },
    {
        name: 'Justin Septimus',
        number: '14688',
        quantity: '30000',
        date: '27.06.2023',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
        action: <Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
    },
    {
        name: 'Justin Septimus',
        number: '14688',
        quantity: '30000',
        date: '27.06.2023',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
        action: <Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
    },
    {
        name: 'Justin Septimus',
        number: '14688',
        quantity: '30000',
        date: '27.06.2023',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
        action: <Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
    },
    {
        name: 'Justin Septimus',
        number: '14688',
        quantity: '30000',
        date: '27.06.2023',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>,
        action: <Link to="/vendor/order/vieworder"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
    },
    ]
}

const style = {
    top: 300,
    left: 200,
};

const Order = () => (
    <>
        <div className='orders-container background-order accordion rounded-3 mb-4 me-5'>
            <div className='w-100 d-flex flex-column flex-lg-row gap-4'>
                <div className='col-lg-8 bg-white rounded-3 shadow p-4'>
                    <div className='d-flex flex-row gap-2'>
                        <p className='fs-3 fw-bold Cabin-text'>Orders</p>
                        <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                        <p className='fs-3 fw-bold Cabin-text' style={{ color: "#A2A3B1" }}>All</p>
                    </div>
                    <div>
                        <Tabs
                            defaultActiveKey="all"
                            id="uncontrolled-tab-example"
                            className="mb-3 bg-white tab"
                        >
                            <Tab eventKey="all" title="All">
                                <div className='p-4'>

                                    <MDBDataTableV5 responsive
                                        striped
                                        bordered
                                        small
                                        data={largeTableData}
                                        sortable={true}
                                        exportToCSV={true}
                                        paging={true}
                                        searching={true} />
                                </div>
                            </Tab>
                            <Tab eventKey="New" title="New">
                                New
                            </Tab>
                            <Tab eventKey="Ongoing" title="Ongoing">
                                Ongoing
                            </Tab>
                            <Tab eventKey="Completed" title="Completed">
                                Completed
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
                <div className='col-lg-4'>
                    <div className='d-flex flex-column gap-3'>
                        <div className='col-lg-12 bg-white rounded-3 shadow p-4'>
                            <div className='d-flex flex-row gap-3'>
                                <p className='fs-3 fw-bold Cabin-text'>Customized Orders</p>
                                <Link to="/vendor/order/customizeorders"><p className="fs-5 fw-semibold mt-2 Cabin-text" style={{ color: "#035C94" }}>See all<Icon.ArrowRight color="#035C94" /></p></Link>
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
                            <div className='d-flex flex-column'>
                                <p className='fs-3 fw-bold Cabin-text m-0'>Order Summary</p>
                                <p className='fs-5 fw-semibold Cabin-text' style={{ color: "#A0AEC0" }}>this month</p>
                            </div>
                            <RadialBarChart
                                width={300}
                                height={400}
                                cx={150}
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

export default Order;