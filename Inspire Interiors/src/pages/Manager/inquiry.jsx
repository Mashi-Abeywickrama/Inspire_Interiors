import React, { useEffect, useState } from 'react';
import '../../styles/customerSupport/inquiry.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/customer/myOrders.css';
import '../../styles/customer/table.css';
import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import { MDBDataTableV5 } from 'mdbreact';
import axios from 'axios';

const Inquiry = () => {
  const apiBaseURL = 'http://localhost:8080'; // Replace this with the base URL of your Spring Boot backend
  const axiosInstance = axios.create({
    baseURL: apiBaseURL,
    timeout: 5000,
  });

  const [inquiryData, setInquiryData] = useState([]);
  const [loading, setLoading] = useState(true);
   const [selectedTab, setSelectedTab] = useState('All'); // State to hold the selected tab title
  const fetchInquiry = async () => {
    try {
      const response = await axiosInstance.get('/inquiry');
      const data = response.data;
      setInquiryData(data);
      setLoading(false);
    } catch (error) {
       console.error('Error from backend:', error);
        setLoading(false);
    }
  };
 useEffect(() => {
    fetchInquiry();
  }, []);

  const getStatusComponent = (status) => {
    // Define the mapping of status to CSS classes and text
    const statusMap = {
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
    if (statusMap.hasOwnProperty(status)) {
      const { className, text } = statusMap[status];
      return (
        <div className={className}>
          <i className="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">{text}</p>
        </div>
      );
    }

    return null;
  };

  // Filter data based on status
  const filteredData = (status) =>
    inquiryData.filter((item) => item.inquiry_status === status) || inquiryData.filter((item) => item.inquiry_type === status);

    const filteredDataByType = (type) =>
    inquiryData.filter((item) => item.inquiry_type === type);

  return (
    <>
      <div className="inquiry-container background-total accordion bg-white rounded-3 mb-4 me-3">
        <div className="col-12 d-flex flex-row justify-content-between">
          <div className="d-flex flex-row gap-4 p-3 ">
            <p className="text-dark fs-5 fw-bold Cabin-text ">Inquiries</p>
            <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
            <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>
              {selectedTab}
            </p>
          </div>
        </div>
        <div>
          <Tabs
            defaultActiveKey="All"
            id="uncontrolled-tab-example"
            className="mb-3 bg-white tab"
            onSelect={(selectedKey) => setSelectedTab(selectedKey)}
          >
            <Tab eventKey="All" title="All">
              <div className="p-4">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <MDBDataTableV5
                    responsive
                    striped
                    bordered
                    small
                    data={{
                      columns: [
                        {
                          label: 'CUSTOMER NAME',
                          field: 'customer',
                          sort: 'asc',
                          width: 150,
                        },
                        {
                          label: 'INQUIRY TYPE',
                          field: 'inquiry',
                          sort: 'asc',
                          width: 270,
                        },
                        {
                          label: 'REFERENCE NO',
                          field: 'reference',
                          sort: 'asc',
                          width: 200,
                        },
                        {
                          label: 'STATUS',
                          field: 'status',
                          sort: 'asc',
                          width: 100,
                        },
                        {
                          label: '  ',
                          field: 'action',
                          sort: 'NONE',
                          width: 100,
                        },
                      ],
                      rows: inquiryData.map((item) => ({
                        customer: item.username,
                        inquiry: item.inquiry_type,
                        reference: item.inquiry_reference,
                        status: getStatusComponent(item.inquiry_status),
                        action: (
                          <Link to={`/manager/inquiry/view/${item.inquiry_type}/${item.inquiry_id}`}>
                            <div className="d-flex gap-2 align-items-center">
                              <p className="m-0 text-black">View More</p>{' '}
                              <Icon.ArrowRight color="#000" />
                            </div>
                          </Link>
                        ),
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
            <Tab eventKey="orderComplaints" title="Order Complaints">
              <div className="p-4">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <MDBDataTableV5
                    responsive
                    striped
                    bordered
                    small
                    data={{
                      columns: [
                        {
                          label: 'CUSTOMER NAME',
                          field: 'customer',
                          sort: 'asc',
                          width: 150,
                        },
                        {
                          label: 'INQUIRY TYPE',
                          field: 'inquiry',
                          sort: 'asc',
                          width: 270,
                        },
                        {
                          label: 'REFERENCE NO',
                          field: 'reference',
                          sort: 'asc',
                          width: 200,
                        },
                        {
                          label: 'STATUS',
                          field: 'status',
                          sort: 'asc',
                          width: 100,
                        },
                        {
                          label: '  ',
                          field: 'action',
                          sort: 'NONE',
                          width: 100,
                        },
                      ],
                      rows: filteredDataByType('orderComplaints').map((item) => ({
                        customer: item.username,
                        inquiry: item.inquiry_type,
                        reference: item.inquiry_reference,
                        status: getStatusComponent(item.inquiry_status),
                        action: (
                          <Link to={`/manager/inquiry/view/${item.inquiry_type}/${item.inquiry_id}`}>
                            <div className="d-flex gap-2 align-items-center">
                              <p className="m-0 text-black">View More</p>{' '}
                              <Icon.ArrowRight color="#000" />
                            </div>
                          </Link>
                        ),
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
              <div className="p-4">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <MDBDataTableV5
                    responsive
                    striped
                    bordered
                    small
                    data={{
                      columns: [
                        {
                          label: 'CUSTOMER NAME',
                          field: 'customer',
                          sort: 'asc',
                          width: 150,
                        },
                        {
                          label: 'INQUIRY TYPE',
                          field: 'inquiry',
                          sort: 'asc',
                          width: 270,
                        },
                        {
                          label: 'REFERENCE NO',
                          field: 'reference',
                          sort: 'asc',
                          width: 200,
                        },
                        {
                          label: 'STATUS',
                          field: 'status',
                          sort: 'asc',
                          width: 100,
                        },
                        {
                          label: '  ',
                          field: 'action',
                          sort: 'NONE',
                          width: 100,
                        },
                      ],
                      rows: filteredData('Completed').map((item) => ({
                        customer: item.username,
                        inquiry: item.inquiry_type,
                        reference: item.inquiry_reference,
                        status: getStatusComponent(item.inquiry_status),
                        action: (
                          <Link to={`/manager/inquiry/view/${item.inquiry_type}/${item.inquiry_id}`}>
                            <div className="d-flex gap-2 align-items-center">
                              <p className="m-0 text-black">View More</p>{' '}
                              <Icon.ArrowRight color="#000" />
                            </div>
                          </Link>
                        ),
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
    </>
  );
};

export default Inquiry;
