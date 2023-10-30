import React from 'react';
import { useState, useEffect } from 'react';
import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { HiFilter } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { MDBDataTableV5, MDBTable } from 'mdbreact';

import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../../styles/customer/myOrders.css';
import './../../styles/customer/table.css';
import axios from 'axios';
import { useSession } from '../../constants/SessionContext';

const MyOrder = () => {
  const [orderData, setOrderData] = useState([]);
  const [userDate, setUserDate] = useState([]);
  const [selectedTab, setSelectedTab] = useState('All');
  const [loading, setLoading] = useState(true);


  const sessionItems = useSession();

  const apiURL = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiURL,
    timeout: 5000,
  });

  useEffect(() => {
    axiosInstance
      .get(`/getorder`)
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
      .get(`/users`)
      .then((response) => {

        setUserDate(response.data);
        setLoading(false);

        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);

        setLoading(false);
      });
  }, []);

  const mergedOrderUser = (orderData, userDate) => {
    const mergedOutput = orderData.map(
      (orderItem) => {
        const matchingUser = userDate.find(
          (userItem) => userItem.userid == orderItem.vendor,
        );


        if (matchingUser) {
          // Merge the data from both sources
          return {

            ...matchingUser,
            ...orderItem,

          };
        } else {
          return orderItem;
        }
      });

    return mergedOutput;
  };

  const mergedUserVendor = mergedOrderUser(orderData, userDate);
  console.log("mergeData_fair", mergedUserVendor);




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

  const filteredData = (status) =>
    mergedUserVendor.filter((item) => item.status === status);

  return (
    <>

      <div className="background-total p-3 rounded-3">
        <div className='row'>
          <p className="text-dark fs-5 fw-bold Cabin-text ">Delivery</p>
        </div>

        <div>
          <Tabs
            defaultActiveKey="all"
            id="uncontrolled-tab-example"
            className="mb-3 bg-white tab"
          >
            <Tab eventKey="all" title="All">
              <div className=''>

                <MDBDataTableV5 responsive
                  striped
                  bordered
                  small
                  data={{
                    columns: [
                      {
                        label: 'REFERENCE NO',
                        field: 'number',
                        sort: 'asc',
                        width: 270
                      },
                      {
                        label: 'VENDOR NAME',
                        field: 'name',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'CUSTOMER NAME',
                        field: 'cus_name',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'QUANTITY',
                        field: 'quantity',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: 'INITIALIZED DATE',
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
                    rows: mergedUserVendor.map((item) => ({
                      name: item.name,
                      number: item.ref_no,
                      quantity: item.quantity,
                      date: item.date,
                      action: <Link to={`/manager/delivery/view/${item.orderid}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94" }}><p className='m-0'>View More</p> <Icon.ArrowRight /></div></Link>,
                      status: getOrderStatus(item.status)
                    })),
                  }}
                  sortable={true}
                  exportToCSV={true}
                  paging={true}
                  searching={true}
                />
              </div>

            </Tab>
            <Tab eventKey="Ongoing" title="Ongoing">
              <div className=''>

                <MDBDataTableV5 responsive
                  striped
                  bordered
                  small
                  data={{
                    columns: [
                      {
                        label: 'REFERENCE NO',
                        field: 'number',
                        sort: 'asc',
                        width: 270
                      },
                      {
                        label: 'VENDOR NAME',
                        field: 'name',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'CUSTOMER NAME',
                        field: 'cus_name',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'QUANTITY',
                        field: 'quantity',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: 'INITIALIZED DATE',
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
                    rows: filteredData("Prepared" || "Shipped").map((item) => ({
                      name: item.name,
                      number: item.ref_no,
                      quantity: item.quantity,
                      date: item.date,
                      action: <Link to={`/manager/delivery/view/${item.orderid}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94" }}><p className='m-0'>View More</p> <Icon.ArrowRight /></div></Link>,
                      status: getOrderStatus(item.status)
                    })),
                  }}
                  sortable={true}
                  exportToCSV={true}
                  paging={true}
                  searching={true}
                />
              </div>
              Confirmed
            </Tab>
            <Tab eventKey="Delivered" title="Delivered">
              <div className=''>

                <MDBDataTableV5 responsive
                  striped
                  bordered
                  small
                  data={{
                    columns: [
                      {
                        label: 'REFERENCE NO',
                        field: 'number',
                        sort: 'asc',
                        width: 270
                      },
                      {
                        label: 'VENDOR NAME',
                        field: 'name',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'CUSTOMER NAME',
                        field: 'cus_name',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'QUANTITY',
                        field: 'quantity',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: 'INITIALIZED DATE',
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
                    rows: filteredData("Delivered").map((item) => ({
                      name: item.name,
                      number: item.ref_no,
                      quantity: item.quantity,
                      date: item.date,
                      action: <Link to={`/manager/delivery/view/${item.orderid}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94" }}><p className='m-0'>View More</p> <Icon.ArrowRight /></div></Link>,
                      status: getOrderStatus(item.status)
                    })),
                  }}
                  sortable={true}
                  exportToCSV={true}
                  paging={true}
                  searching={true}
                />
              </div>
            </Tab>
            <Tab eventKey="Completed" title="Completed">
              <div className=''>

                <MDBDataTableV5 responsive
                  striped
                  bordered
                  small
                  data={{
                    columns: [
                      {
                        label: 'REFERENCE NO',
                        field: 'number',
                        sort: 'asc',
                        width: 270
                      },
                      {
                        label: 'VENDOR NAME',
                        field: 'name',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'CUSTOMER NAME',
                        field: 'cus_name',
                        sort: 'asc',
                        width: 150
                      },
                      {
                        label: 'QUANTITY',
                        field: 'quantity',
                        sort: 'asc',
                        width: 100
                      },
                      {
                        label: 'INITIALIZED DATE',
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
                    rows: filteredData("Completed").map((item) => ({
                      name: item.name,
                      number: item.ref_no,
                      quantity: item.quantity,
                      date: item.date,
                      action: <Link to={`/manager/delivery/view/${item.orderid}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94" }}><p className='m-0'>View More</p> <Icon.ArrowRight /></div></Link>,
                      status: getOrderStatus(item.status)
                    })),
                  }}
                  sortable={true}
                  exportToCSV={true}
                  paging={true}
                  searching={true}
                />
              </div>

            </Tab>
          </Tabs>
        </div>
      </div>


      {/* </div> */}
      {/* </div> */}
    </>

  );
}


export default MyOrder;
