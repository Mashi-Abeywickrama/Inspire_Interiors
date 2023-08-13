import React from 'react';

import '../../styles/vendor/complaints.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/customer/myOrders.css';
import '../../styles/customer/table.css';

import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { MDBDataTableV5, MDBTable } from 'mdbreact';
import {Link} from 'react-router-dom';

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
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><Link to="/vendor/complaints/viewcomplaint"><button className='view-btn'>View</button></Link></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'different design',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><Link to="/vendor/complaints/viewcomplaint"><button className='view-btn'>View</button></Link></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><Link to="/vendor/complaints/viewcomplaint"><button className='view-btn'>View</button></Link></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><Link to="/vendor/complaints/viewcomplaint"><button className='view-btn'>View</button></Link></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><Link to="/vendor/complaints/viewcomplaint"><button className='view-btn'>View</button></Link></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><Link to="/vendor/complaints/viewcomplaint"><button className='view-btn'>View</button></Link></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><Link to="/vendor/complaints/viewcomplaint"><button className='view-btn'>View</button></Link></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><Link to="/vendor/complaints/viewcomplaint"><button className='view-btn'>View</button></Link></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><Link to="/vendor/complaints/viewcomplaint"><button className='view-btn'>View</button></Link></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><Link to="/vendor/complaints/viewcomplaint"><button className='view-btn'>View</button></Link></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><Link to="/vendor/complaints/viewcomplaint"><button className='view-btn'>View</button></Link></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><Link to="/vendor/complaints/viewcomplaint"><button className='view-btn'>View</button></Link></div>
      },
      {
        customer: 'Justin Septimus',
        reference: '32423432434',
        type: 'refund',
        status: <div className='d-flex flex-row gap-3'><button className='reject-btn'>Reject</button><button className='accept-btn'>Accept</button><Link to="/vendor/complaints/viewcomplaint"><button className='view-btn'>View</button></Link></div>
      },
    ]
}

const Complaints = () => {
  return (
    <>
      <div className='complaints-container background-total accordion bg-white rounded-3 mb-4 me-3 p-4'>
        <div className='d-flex flex-row gap-2'>
          <p className='fs-3 fw-bold Cabin-text'>Complaints</p>
          <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
          <p className='fs-3 fw-bold Cabin-text' style={{ color: "#A2A3B1" }}>All</p>
        </div>
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
                  sortable={false}
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
  );
}

export default Complaints;