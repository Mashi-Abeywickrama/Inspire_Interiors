import React from "react";
import * as Icon from "react-bootstrap-icons";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DonutChart from "./../../components/admin/doughnut";
import Bars from "./../../components/admin/bars";
import Needlepie from "./../../components/admin/needlepie";
import LineChart from "./../../components/admin/linechart";

import Img1 from "./../../assets/img/admin/designer.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./../../styles/admin/dashboard.css";

const AdminDashboard = () => {
  return (
    
      <div className="background-grey p-3 rounded-3 d-flex flex-column gap-3">
           <div className="d-flex flex-col fs-2 w-100">Dashboard</div>
           <div className="d-flex flex-row col-12 justify-content-between">
            <div className="d-flex flex-column w-26  bg-white rounded-3 shadow  ">
                  <span className="today d-flex fs-5 p-2">Today</span>
                  <DonutChart />
                  <span className="about d-flex fs-4 justify-content-center p-2">
                    Completed Project
                  </span>
                </div>
                <div className="d-flex flex-column w-26  bg-white rounded-3 shadow  ">
                  <span className="today d-flex fs-5 p-2">Today</span>
                  <DonutChart />
                  <span className="about d-flex fs-4 justify-content-center p-2">
                    Active Project
                  </span>
                </div>
                <div className="d-flex flex-column w-26  bg-white rounded-3 shadow">
                  <span className="today d-flex fs-5 p-2">Today</span>
                  <DonutChart />
                  <span className="about d-flex fs-4 justify-content-center p-2">
                    Registered Users
                  </span>
                </div>  

              <div className="d-flex flex-row gap-3 ">
                <div className="bg-white rounded-3 shadow p-2  flex-fill">
                  <span className="d-flex fs-5 ">this week</span>
                  <span className="today d-flex fs-5 ">Registered users</span>
                 <div className="d-flex justify-content-center"> <Bars /></div>
                </div>
                <div className="bg-white rounded-3 shadow p-2 flex-fill">
                  <span className="d-flex fs-5">today</span>
                  <span className="today d-flex fs-5 ">Active users</span>
                  <div className="d-flex justify-content-center">
                    <div className="d-flex justify-content-center"><Needlepie /></div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-row gap-3 ">
                <div className="bg-white rounded-3 shadow p-2  flex-fill">
                  <span className="today d-flex fs-5 ">Earning</span>
                  <div className="d-flex justify-content-center"><LineChart /></div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column col-md-3 gap-3 flex-fill ">
              <div className="bg-white rounded-3 shadow flex-fill">
                <div className="bg-white col-lg-4 rounded-3 shadow ">
                <span className="today d-flex fs-5 p-2">Commission</span>

                <div className="d-flex flex-column p-2 gap-3">
                  <div>
                    <div className="d-flex justify-content-between"><span className="topic d-flex fs-5">Earned </span><span className="topic d-flex fs-5">25%</span></div>
                    <div class="progress">
                      <div
                        class="progress-bar w-25 bg-success"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                      ></div>
                    </div>
                  </div>
                  <div>
                  <div className="d-flex justify-content-between"><span className="topic d-flex fs-5">Pending </span><span className="topic d-flex fs-5">50%</span></div>
                    <div class="progress">
                      <div
                        class="progress-bar w-50 bg-info"
                        role="progressbar"
                        aria-valuenow=""
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div>
                  <div className="d-flex justify-content-between"><span className="topic d-flex fs-5">Refund </span><span className="topic d-flex fs-5">75%</span></div>
                    <div class="progress">
                      <div
                        class="progress-bar w-75 bg-warning"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="d-flex flex-row col-12 gap-2 justify-content-between">
                <div className="d-flex flex-row col-9  justify-content-between">
                    <div className="d-flex flex-column gap-2 col-12" >
                      <div className="d-flex flex-row gap-2 justify-content-between">
                      <div className="bg-white rounded-3 shadow p-2  col-7">
                  <span className="d-flex fs-5 ">this week</span>
                  <span className="today d-flex fs-5 ">Registered users</span>
                 <div className="d-flex justify-content-center "> <Bars /></div>
                      </div>
                      <div className="bg-white rounded-3 shadow p-2 col-6 flex-fill">
                  <span className="d-flex fs-5">today</span>
                  <span className="today d-flex fs-5 ">Active users</span>
                  <div className="d-flex justify-content-center">
                    <div className="d-flex justify-content-center"><Needlepie /></div>
                  </div>
                      </div>
                      </div>
                      <div className="d-flex flex-row gap-3 ">
                <div className="bg-white rounded-3 shadow p-2  flex-fill">
                  <span className="today d-flex fs-5 ">Registered users</span>
                  <div className="d-flex justify-content-center"><LineChart /></div>
                </div>
              </div>
                  </div>
                </div>
               
                <div className="d-flex flex-row col-3 justify-content-between">
                    <div className="bg-white rounded-3 shadow w-100 ">
                <div className="d-flex flex-column gap-3 p-1 ">
                  <div>
                    <span className="today d-flex fs-5 p-1">Invoice</span>

                    <div className="designer d-flex flex-column gap-2 p-1 ">
                      <span className="topic d-flex fs-5 p-1">designer</span>
                      <div className="row1">
                        <div className=" d-flex flex-row p-1 gap-1 justify-content-between">
                          <img className="img" src={Img1} />
                          <span> flotsom</span>
                          <span> 5h ago </span>
                          <span> 60k</span>
                        </div>
                      </div>
                      <div className="row1">
                        <div className=" d-flex flex-row p-1 gap-3 justify-content-between">
                          <img className="img" src={Img1} />
                          <span> flotsom</span>
                          <span> 5h ago </span>
                          <span> 60k</span>
                        </div>
                      </div>
                      <div className="row1">
                        <div className="d-flex flex-row p-1 gap-3 justify-content-between">
                          <img className="img" src={Img1} />
                          <span> flotsom</span>
                          <span> 5h ago </span>
                          <span> 60k</span>
                        </div>
                      </div>
                      <button className="button d-flex justify-content-center mx-auto w-100 bg-white">
                        view more
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="vendor d-flex flex-column gap-1 p-1 ">
                      <span className="topic d-flex fs-5 p-1">Vendor</span>
                      <div >
                      <div className="row2 my-2 ">
                        <div className="d-flex flex-row p-1 gap-1 justify-content-between">
                          <img className="img" src={Img1} />
                          <span> flotsom</span>
                          <span> 5h ago </span>
                          <span> 60k</span>
                        </div>
                      </div>
                      <div className="row2 my-2">
                        <div className="d-flex flex-row p-1 gap-1 justify-content-between">
                          <img className="img" src={Img1} />
                          <span> flotsom</span>
                          <span> 5h ago </span>
                          <span> 60k</span>
                        </div>
                      </div>
                      <div className="row2 my-2">
                        <div className="d-flex flex-row p-1 gap-1 justify-content-between">
                          <img className="img" src={Img1} />
                          <span> flotsom</span>
                          <span> flotsom</span>
                          <span> flotsom</span>
                        </div>
                      </div></div>
                      <button className="button d-flex justify-content-center mx-auto w-100 bg-white">
                        view more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
                </div>
              </div>
      </div>
      </div>
    
  );
};
export default AdminDashboard;
