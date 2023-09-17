// import React from "react";
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { MDBDataTableV5, MDBTable } from "mdbreact";
import LineChart from "./../../components/admin/linechart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

import "./../../styles/admin/commission.css";
import axios from "axios";


export default function commisssion() {
const apiBaseURL = 'http://localhost:8080';

const [orderData, setOrderData] = useState([]);
const [totalcompleteCom, setTotalcompleteCom] = useState(0); // State variable to hold the total commission
const [totalpendingCom,setTotalpendingCom]=useState(0);

  const [loading, setLoading] = useState(true);

  const axiosInstance = axios.create({
    baseURL: apiBaseURL,
    timeout: 5000,
  });

  const fetchOrderData = async () => {
    try {
      const response = await axios.get(apiBaseURL + '/getorder');
      const orderData = response.data;
      setOrderData(orderData); 
      setLoading(false);
    } catch (error) {
      console.error('Error fetching order data:', error);
    }
  };

  const fetchTotalcompleteCom = async () => {
    try {
      const response = await axios.get(apiBaseURL + '/totalcommission');
      const totalcompleteCom = response.data;
      setTotalcompleteCom(totalcompleteCom); // Update the total commission state
    } catch (error) {
      console.error('Error fetching total commission:', error);
    }
  };

  const fetchTotalpendingCom = async () => {
    try {
      const response = await axios.get(apiBaseURL + '/totalpencommission');
      const totalpendingCom = response.data;
      setTotalpendingCom(totalpendingCom); // Update the total commission state
    } catch (error) {
      console.error('Error fetching total commission:', error);
    }
  };

  useEffect(() => {
    fetchOrderData();
    fetchTotalcompleteCom();
    fetchTotalpendingCom();
  }, []);
  
  const data = {
    columns: [
      {
        label: "USER",
        field: "name",
        sort: "asc",
        width: 150,
      },
      // {
      //   label: "PRODUCT/DESIGN",
      //   field: "type",
      //   sort: "asc",
      //   width: 150,
      // },
      // {
      //   label: "RATE",
      //   field: "ammount",
      //   sort: "asc",
      //   width: 270,
      // },
      {
        label: "COMMISSION",
        field: "commission",
        sort: "asc",
        width: 200,
      },
      {
        label: "STATUS",
        field: "status",
        sort: "asc",
        width: 100,
      },
      {
        label: "  ",
        field: "action",
        sort: "NONE",
        width: 100,
      },
    ],
    rows: orderData.map((order) => ({
        name: order.designer||order.vendor,
       commission: order.commission,
       status:order.status,
        action: (
          <Link to={`/admin/commision/commissionView/${order.orderid}`}>
            <div className="d-flex gap-2 align-items-center text-dark">
              <p className="m-0">View More</p> <Icon.ArrowRight />
            </div>
          </Link>
        ),
      })),
    }
  return (
    <Container fluid>
      <div>
        <div className="d-flex flex-col fs-2">Commission </div>

        <div className="d-flex flex-column col-12 gap-3 ">
          <div className=" bg-white">
            <div className="d-flex flex-column gap-3 m-2">
              <div className="d-flex flex-row gap-3 ">
                <div className="d-flex flex-column gap-2">
                  <span className="heading fs-3">Total Revenue</span>

                  <div className="earned  d-flex flex-row align-items-center justify-content-center h-50">
                    <div className="d-flex flex-column p-3 text-center">
                      <span className="d-flex fs-4 ">Commission </span>
                      <span className="d-flex fs-4 "> Earned </span>
                    </div>
                    <span className="fs-1 p-3">{totalcompleteCom}Rs </span>
                  </div>
                  <div className="pending2 d-flex flex-row align-items-center justify-content-center h-50">
                    <div className="d-flex flex-column p-3 text-center">
                      <span className="fs-4">Commission</span>
                      <span className="fs-4">Pending</span>
                    </div>
                    <span className="fs-1 p-3">{totalpendingCom}Rs</span>
                  </div>
                </div>
                <div className="line-v d-flex"></div>

                <div>
                  <span className="heading fs-3 align-items-center">Sales</span>
                  <LineChart />
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-row gap-3 p-2 shadow">
            <div className="bg-white p-3 justify-content-center col-8">
              <div>
                <div>
                  <Tabs
                    defaultActiveKey="all"
                    id="uncontrolled-tab-example"
                    className="mb-3 bg-white tab"
                  >
                    <Tab eventKey="all" title="All">
                      <div className="">
                        <MDBDataTableV5
                          responsive
                          striped
                          bordered
                          small
                          data={data}
                          sortable={true}
                          exportToCSV={true}
                        />
                      </div>
                    </Tab>

                    <Tab eventKey="Designers" title="Designers">
                      Designers
                    </Tab>
                    <Tab eventKey="Vendor" title="Vendor">
                      Vendors
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>

            <div className=" d-flex bg-white flex-column gap-3 p-2 col-4 flex-fill ">
              <span className="heading fs-3">Commission Rate</span>
              <div className="product d-flex p-2 shadow flex-column h-100 ">
                <div className="com-earned d-flex fs-4">Product</div>
                <div className="d-flex flex-row gap-5 justify-content-center">
                  <span>Price range</span>
                  <span>Rate</span>
                </div>
                <div className="line d-flex "></div>
                <div className="d-flex flex-row gap-3 justify-content-center">
                  <span>00 5000</span>
                  <div class="progress">
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                    ></div>
                  </div>
                  <span>18%</span>
                </div>
                <div className="d-flex flex-row gap-3 justify-content-center ">
                  <span>5,000 10,000</span>
                  <div class="progress">
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                    ></div>
                  </div>
                  <span>18%</span>
                </div>
                <div className="d-flex flex-row gap-3 justify-content-center">
                  <span>10,000 20,000</span>
                  <div class="progress">
                    <div
                      class="progress-barbg-success"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                    ></div>
                  </div>
                  <span>18%</span>
                </div>
              </div>

              <div className="product d-flex p-2 shadow flex-column h-100 ">
                <div className="com-earned d-flex fs-4">Design</div>
                <div className="d-flex flex-row gap-5 justify-content-center">
                  <span>Price range</span>
                  <span>Rate</span>
                </div>
                <div className="line d-flex w-100"></div>
                <div className="d-flex flex-row gap-3 justify-content-center">
                  <span>00 5000</span>
                  <div class="progress">
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                    ></div>
                  </div>
                  <span>18%</span>
                </div>
                <div className="d-flex flex-row gap-3 justify-content-center">
                  <span>5,000 10,000</span>
                  <div class="progress">
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                    ></div>
                  </div>
                  <span>18%</span>
                </div>
                <div className="d-flex flex-row gap-3 justify-content-center ">
                  <span className="d-flex ">10,000 20,000</span>
                  <div class="progress">
                    <div
                      class="progress-barbg-success"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                    ></div>
                  </div>
                  <span className="d-flex">18%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
