import React from 'react';

import '../../styles/vendor/complaints.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/customer/myOrders.css';
import '../../styles/customer/table.css';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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
        width: 270
    },
    {
        label: 'COMPLAINT TYPE',
        field: 'type',
        sort: 'asc',
        width: 200
    },
    {
        label: '  ',
        field: 'status',
        sort: 'NONE',
        width: 100
    }
    ],
    rows: [
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><button className='view-btn'>View</button></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><button className='view-btn'>View</button></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><button className='view-btn'>View</button></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><button className='view-btn'>View</button></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><button className='view-btn'>View</button></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><button className='view-btn'>View</button></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><button className='view-btn'>View</button></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><button className='view-btn'>View</button></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><button className='view-btn'>View</button></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><button className='view-btn'>View</button></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><button className='view-btn'>View</button></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><button className='view-btn'>View</button></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><button className='view-btn'>View</button></div>
      },
    ]
}

const Complaints = () => (
    <>
        <div className='complaints-container background-total accordion bg-white rounded-3 mb-4 me-3 p-4'>
            <p className="text-dark fs-3 fw-bold Cabin-text ">Complaints</p>
            <div className='d-flex flex-column my-2'>
                <Tabs
                    defaultActiveKey="All"
                    id="uncontrolled-tab-example"
                    className="mb-3 bg-white complaint-tab"
                >
                    <Tab eventKey="All" title="All">
                        <div className=''>

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
                    <Tab eventKey="New" title="New">
                        New
                    </Tab>
                    <Tab eventKey="On Going" title="On Going">
                        On Going
                    </Tab>
                    <Tab eventKey="Resolved" title="Resolved">
                        Resolved
                    </Tab>
                </Tabs>
            </div>

        </div>
    </>
)

export default Complaints;