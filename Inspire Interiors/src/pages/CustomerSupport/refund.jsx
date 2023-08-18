import React from 'react';

import '../../styles/customerSupport/refund.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/customer/myOrders.css';
import '../../styles/customer/table.css';

import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { Link } from 'react-router-dom';

import { MDBDataTableV5, MDBTable } from 'mdbreact';

const tabledata = {
    columns: [
    {
        label: 'CUSTOMER NAME',
        field: 'customer',
        sort: 'asc',
        width: 150
    },
    {
        label: 'REFERENCE NO',
        field: 'reference',
        sort: 'asc',
        width: 200
    },
    {
        label: 'VENDOR CODE',
        field: 'vendor',
        sort: 'asc',
        width: 270
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
        customer: 'Justin Septimus',
        reference: '14689',
        vendor: '30000',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <Link to="view"><div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div> </Link>
    },
    {
        customer: 'Justin Septimus',
        reference: '14689',
        vendor: '30000',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <Link to="view"><div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div> </Link>
    },
    {
        customer: 'Justin Septimus',
        reference: '14689',
        vendor: '30000',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <Link to="view"><div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div> </Link>
    },    
    {
        customer: 'Justin Septimus',
        reference: '14689',
        vendor: '30000',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <Link to="view"><div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div> </Link>
    },
    {
        customer: 'Justin Septimus',
        reference: '14689',
        vendor: '30000',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <Link to="view"><div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div> </Link>
    },
    {
        customer: 'Justin Septimus',
        reference: '14689',
        vendor: '30000',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <Link to="view"><div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div> </Link>
    },
    {
        customer: 'Justin Septimus',
        reference: '14689',
        vendor: '30000',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <Link to="view"><div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div> </Link>
    },
    {
        customer: 'Justin Septimus',
        reference: '14689',
        vendor: '30000',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <Link to="view"><div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div> </Link>
    },
    {
        customer: 'Justin Septimus',
        reference: '14689',
        vendor: '30000',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <Link to="view"><div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div> </Link>
    },
    {
        customer: 'Justin Septimus',
        reference: '14689',
        vendor: '30000',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <Link to="view"><div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div> </Link>
    },
    {
        customer: 'Justin Septimus',
        reference: '14689',
        vendor: '30000',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <Link to="view"><div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div> </Link>
    },
    {
        customer: 'Justin Septimus',
        reference: '14689',
        vendor: '30000',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <Link to="view"><div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div> </Link>
    },
    {
        customer: 'Justin Septimus',
        reference: '14689',
        vendor: '30000',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <Link to="view"><div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div> </Link>
    },
    {
        customer: 'Justin Septimus',
        reference: '14689',
        vendor: '30000',
        status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Completed</p></div>
        ,
        action: <Link to="view"><div className='d-flex gap-2 align-items-center'><p className='m-0 text-black'>View More</p> <Icon.ArrowRight color='#000'/></div> </Link>
    },

]
};

const Refund = () => (
    <>

        <div className="refund-container background-total accordion bg-white rounded-3 mb-4 me-3">
            <div className="col-12 d-flex flex-row justify-content-between">
                <div className='d-flex flex-row gap-4 p-3 '>
                    <p className="text-dark fs-5 fw-bold Cabin-text ">Refund Requests</p>
                    <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                    <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>All</p>
                </div>
                <div>
                    <button className='add-btn m-4'><Icon.PlusLg color="white" size={20} />Add New</button>
                </div>
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
                                data={tabledata}
                                sortable={true}
                                exportToCSV={true}
                                paging={true}
                                searching={true} />
                        </div>
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


    </>
)

export default Refund;
