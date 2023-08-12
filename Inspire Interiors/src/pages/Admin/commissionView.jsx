import React from "react";

import * as Icon from "react-bootstrap-icons";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { MDBDataTableV5, MDBTable } from "mdbreact";
import Img from "./../../assetS/img/admin/vendor.png";
import "./../../styles/admin/commissionview.css";
import Pie from "./../../components/admin/dopie";
// import './../../styles/admin/table.css';

export default function commissionView() {
  const data = {
    columns: [
      {
        label: "PRODUCT/DESIGN",
        field: "office",
        sort: "asc",
        width: 150,
      },
      {
        label: "VENDOR/DESIGNER",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "QUANTITY",
        field: "QTY",
        sort: "asc",
        width: 200,
      },
      {
        label: "COMMISSION",
        field: "salary",
        sort: "asc",
        width: 100,
      },
      {
        label: "REFERENCE NO",
        field: "number",
        sort: "asc",
        width: 150,
      },
      {
        label: "CUSTOMER",
        field: "name",
        sort: "asc",
        width: 100,
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
    rows: [
      {
        office: "Chair",
        position: "Peter Pan",
        QTY: "8",
        salary: "6100",
        number: "11221",
        name: "Ronaldo",
        status: (
          <div className="completed d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Completed</p>
          </div>
        ),
        action: (
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0">Send invoice</p> <Icon.ArrowRight />
          </div>
        ),
      },
      {
        office: "Chair",
        position: "Peter Pan",
        QTY: "8",
        salary: "6100",
        number: "11221",
        name: "Ronaldo",
        status: (
          <div className="pending d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Pending</p>
          </div>
        ),
        action: (
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0">Send Invoice</p> <Icon.ArrowRight />
          </div>
        ),
      },
      {
        office: "Chair",
        position: "Peter Pan",
        QTY: "8",
        salary: "6100",
        number: "11221",
        name: "Ronaldo",
        status: (
          <div className="completed d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Completed</p>
          </div>
        ),
        action: (
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0">Send Invoice</p> <Icon.ArrowRight />
          </div>
        ),
      },
      {
        office: "Chair",
        position: "Peter Pan",
        QTY: "8",
        salary: "6100",
        number: "11221",
        name: "Ronaldo",
        status: (
          <div className="pending d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Pending</p>
          </div>
        ),
        action: (
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0">Send Invoice</p> <Icon.ArrowRight />
          </div>
        ),
      },
      {
        office: "Chair",
        position: "Peter Pan",
        QTY: "8",
        salary: "6100",
        number: "11221",
        name: "Ronaldo",
        status: (
          <div className="completed d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Completed</p>
          </div>
        ),
        action: (
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0">Send Invoice</p> <Icon.ArrowRight />
          </div>
        ),
      },
      {
        office: "Chair",
        position: "Peter Pan",
        Qty: "8",
        salary: "6100",
        number: "11221",
        name: "Ronaldo",
        status: (
          <div className="completed d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Completed</p>
          </div>
        ),
        action: (
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0">Send Invoice</p> <Icon.ArrowRight />
          </div>
        ),
      },
      {
        office: "Chair",
        position: "Peter Pan",
        QTY: "8",
        salary: "6100",
        number: "11221",
        name: "Ronaldo",
        status: (
          <div className="completed d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Completed</p>
          </div>
        ),
        action: (
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0">Send Invoice</p> <Icon.ArrowRight />
          </div>
        ),
      },
      {
        office: "Chair",
        position: "Peter Pan",
        QTY: "8",
        salary: "6100",
        number: "11221",
        name: "Ronaldo",
        status: (
          <div className="completed d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Completed</p>
          </div>
        ),
        action: (
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0">Send Invoice</p> <Icon.ArrowRight />
          </div>
        ),
      },
      {
        office: "Chair",
        position: "Peter Pan",
        QTY: "8",
        salary: "6100",
        number: "11221",
        name: "Ronaldo",
        status: (
          <div className="completed d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Completed</p>
          </div>
        ),
        action: (
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0">Send Invoice</p> <Icon.ArrowRight />
          </div>
        ),
      },
      {
        office: "Chair",
        position: "Peter Pan",
        QTY: "8",
        salary: "6100",
        number: "11221",
        name: "Ronaldo",
        status: (
          <div className="completed d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Completed</p>
          </div>
        ),
        action: (
          <div className="d-flex gap-2 align-items-center">
            <p className="m-0">Send invoice</p> <Icon.ArrowRight />
          </div>
        ),
      },
    ],
  };
  return (
    <div className="container-fluid">
      <div className="d-flex fs-4">Commission</div>

      <div className="d-flex gap-2">
        <div className="d-flex flex-column gap-2 col-md-9 flex-fill">
          <div className="d-flex gap-2">
            <div className="pend d-flex flex-row col-md-3 shadow rounded-4 justify-content-center p-4 gap-5 flex-fill">
              <div className="d-flex flex-column">
                <span className="fs-5">Pending</span>
                <span className="fs-5">Commission</span>
              </div>
              <span className="d-flex  fs-2">30.67M</span>
            </div>
            <div className="paid d-flex flex-row col-md-3 shadow rounded-4 justify-content-center p-4 gap-5 flex-fill">
              <div className="d-flex flex-column">
                <span className="fs-5">Paid</span>
                <span className="fs-5">Commission</span>
              </div>
              <span className="d-flex  fs-2">30.67M</span>
            </div>
            <div className="overdue d-flex flex-row col-md-3 shadow rounded-4 justify-content-center p-4 gap-5 flex-fill">
              <div className="d-flex flex-column">
                <span className="fs-5">Overdue</span>
                <span className="fs-5">Commission</span>
              </div>
              <span className="d-flex  fs-2">30.67M</span>
            </div>
          </div>
          <div className="d-flex ">
            <div className="d-flex flex-column bg-white shadow rounded-4 flex-fill">
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
                <Tab eventKey="Completed" title="Completed">
                  Completed
                </Tab>
                <Tab eventKey="Ongoing" title="Ongoing">
                  Ongoing
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
        </div>

        <div className=" admin-commission-view d-flex flex-column gap-2 col-md-3 flex-fill">
          <div className="d-flex bg-white shadow rounded-4 flex-column p-3 gap-1">
            <img className="mx-auto" src={Img} alt="Arpico Furniture" />
            <div>
              <h2 className="text d-flex fs-3 justify-content-center">
                Arpico Furniture
              </h2>
              <div className="d-flex flex-row justify-content-center">
                <span className="text">Contact: </span>
                <span className="number">011 434 3333</span>
              </div>
              <span className="number d-flex justify-content-center">
                Huzefa Bangala
              </span>
              <span className="d-flex flex-row justify-content-center">1123/B, Dusti Townline Jackson Ville, Sri Lanka</span>
            </div>
            <div className="d-flex w-25"></div>
            <div className="d-flex flex-column flex-fill">
              <div className="d-flex justify-content-between">
                <span className="text">Product Sold:</span>
                <span>10000</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text">Custom Product Sold:</span>
                <span>100</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text">Earned:</span>
                <span>1000Rs</span>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column bg-white shadow rounded-4 justify-content-center gap-2 flex-fill">
            <span className="text p-2 fs-2">Order Summary</span>
           <div className="d-flex mx-auto"> <Pie /></div>
            <div className=" d-flex flex-row justify-content-center gap-4 ">
                <div className="d-flex flex-column align-items-center"><div className="r-1 d-flex "></div><span>Completed</span><span>20</span></div>
                <div className="d-flex flex-column align-items-center"><div className="r-2 d-flex"></div><span>Pending</span><span>20</span></div>
                <div className="d-flex flex-column align-items-center"><div className="r-3 d-flex"></div><span>New</span><span>20</span></div>
                <div className="d-flex flex-column align-items-center"><div className="r-4 d-flex"></div><span>Cancelled</span><span>20</span></div>
                

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
