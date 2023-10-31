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
  const [orderData, setOrderData] = useState([]);
  const [outputData, setOutputData] = useState([]);

  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
  });

  const sessionItems = useSession();
  const userId = sessionItems.sessionData.userid;

  useEffect(() => {
        axiosInstance.get(`/getorder/vendor/${userId}`)
            .then((response) => {
                console.log(response.data);
                setOrderData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [userId]);
    

    useEffect(() => {
        axiosInstance.get(`/inquirytype/orderComplaints`)
            .then((response) => {
                console.log(response.data);
                setInquiryData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const mergeData = (orderData, InquiryData) => {
    const mergedData = orderData.map(
      (orderItem) => {
      const matchingInquiry = InquiryData.find(
        (inquiryItem) =>  inquiryItem.order_no == orderItem.ref_no
      );

  
      if (matchingInquiry ) {
        // Merge the data from both sources
        return {
          ...outputData,
          ...orderItem,
          ...matchingInquiry,
        };
      } 
    });
  
    return mergedData;
  };

  const mergedOrderInquiry = mergeData(orderData, inquiryData);
  console.log("mergeData_fair", mergedOrderInquiry);


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
                        width: 70
                      },
                      {
                        label: 'INQUIRY DATE',
                        field: 'type',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: 'ORDER NO',
                        field: 'order_no',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: 'ORDER STATUS',
                        field: 'order_status',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: '  ',
                        field: 'status',
                        sort: 'NONE',
                        width: 100
                      }
                    ],
                    rows: mergedOrderInquiry
                    .filter(inquiry => inquiry !== undefined)
                    .map((inquiry,index) => {
                      
                      return {

                        customer: inquiry !== undefined ? inquiry.username: " ",
                        reference: inquiry !== undefined ? inquiry.inquiry_reference: " ",
                        type: inquiry !== undefined ? inquiry.inquiry_date : " ",
                        order_no: inquiry !== undefined ? inquiry.order_no : " ",
                        order_status: inquiry !== undefined ? getOrderStatus(inquiry.status) : " ",
                        status: <div className='d-flex flex-row gap-4'><Link to={`/vendor/complaints/viewcomplaint?id=${inquiry.inquiry_id}`}><button className='view-btn'>View</button></Link></div>
                        
                      }
                    })
                  }}
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
  );
}

export default Complaints;