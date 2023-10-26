import React,{useEffect,useState} from 'react';

import '../../styles/vendor/complaints.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/customer/myOrders.css';
import '../../styles/customer/table.css';

import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { MDBDataTableV5, MDBTable } from 'mdbreact';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useSession} from '../../constants/SessionContext';


const Complaints = () => {
  const [inquiryData, setInquiryData] = useState([]);

  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
  });

  const sessionItems = useSession();
  const userId = sessionItems.sessionData.userid;


  return (
    <>
      <div className='complaints-container background-total accordion bg-white rounded-3 mb-4 me-3 p-4'>
        <div className='d-flex flex-row gap-2'>
          <p className='fs-5 fw-bold Cabin-text'>Complaints</p>
          <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
          <p className='fs-5 fw-bold Cabin-text' style={{ color: "#A2A3B1" }}>All</p>
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
                  data={{
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
                    rows: inquiryData.map((inquiry) => {
                      return {
                        customer: inquiry.username,
                        reference: inquiry.inquiry_reference,
                        type: inquiry.inquiry_type,
                        status: <div className='d-flex flex-row gap-4'><button className='response-btn'>Respond</button><Link to={`/vendor/complaints/viewcomplaint?id=${inquiry.inquiry_id}`}><button className='view-btn'>View</button></Link></div>
                      }
                    })
                  }}
                  sortable={false}
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