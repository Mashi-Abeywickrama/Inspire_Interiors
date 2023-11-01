import React, { useEffect, useState } from "react";
import Sofa from "./../../assets/Designer/sofa.png";
import axios from "axios";

import "../../styles/Designer/promotionEarnings.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/customer/myOrders.css";
import "../../styles/customer/table.css";

import * as Icon from "react-bootstrap-icons";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { MDBDataTableV5, MDBTable } from "mdbreact";
import { Link } from "react-router-dom";
import Customer from "../../assets/Designer/profile1.png";
import { useSession } from "../../constants/SessionContext";

const tableData = {
  columns: [
    {
      label: "Request",
      field: "product",
      sort: "asc",
      width: 150,
    },
    {
      label: "Room Type",
      field: "designer",
      sort: "asc",
      width: 270,
    },
    {
      label: "DATE",
      field: "date",
      sort: "asc",
      width: 200,
    },
    {
      label: "Status",
      field: "price",
      sort: "asc",
      width: 150,
    },
    {
      field: "rate",
      sort: "asc",
      width: 100,
    },
    // {
    //   label: "SOLD",
    //   field: "sold",
    //   sort: "asc",
    //   width: 100,
    // },
    // {
    //   label: "PAYMENT STATUS",
    //   field: "status",
    //   sort: "asc",
    //   width: 100,
    // },
  ],
  rows: [
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <p className="align-items-center mt-3 fw-bold">Sofa</p>
        </div>
      ),
      designer: "Arpico",
      date: "25.07.2023",
      price: "4000Rs",
      rate: "15%",
      sold: "15",
      status: (
        <div className="completed d-flex gap-2 align-items-center">
          <i class="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">Received</p>
        </div>
      ),
    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <p className="align-items-center mt-3 fw-bold">Sofa</p>
        </div>
      ),
      designer: "Arpico",
      date: "25.07.2023",
      price: "4000Rs",
      rate: "15%",
      sold: "15",
      status: (
        <div className="completed d-flex gap-2 align-items-center">
          <i class="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">Received</p>
        </div>
      ),
    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <p className="align-items-center mt-3 fw-bold">Sofa</p>
        </div>
      ),
      designer: "Arpico",
      date: "25.07.2023",
      price: "4000Rs",
      rate: "15%",
      sold: "15",
      status: (
        <div className="completed d-flex gap-2 align-items-center">
          <i class="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">Received</p>
        </div>
      ),
    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <p className="align-items-center mt-3 fw-bold">Sofa</p>
        </div>
      ),
      designer: "Arpico",
      date: "25.07.2023",
      price: "4000Rs",
      rate: "15%",
      sold: "15",
      status: (
        <div className="completed d-flex gap-2 align-items-center">
          <i class="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">Received</p>
        </div>
      ),
    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <p className="align-items-center mt-3 fw-bold">Sofa</p>
        </div>
      ),
      designer: "Arpico",
      date: "25.07.2023",
      price: "4000Rs",
      rate: "15%",
      sold: "15",
      status: (
        <div className="completed d-flex gap-2 align-items-center">
          <i class="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">Received</p>
        </div>
      ),
    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <p className="align-items-center mt-3 fw-bold">Sofa</p>
        </div>
      ),
      designer: "Arpico",
      date: "25.07.2023",
      price: "4000Rs",
      rate: "15%",
      sold: "15",
      status: (
        <div className="completed d-flex gap-2 align-items-center">
          <i class="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">Received</p>
        </div>
      ),
    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <p className="align-items-center mt-3 fw-bold">Sofa</p>
        </div>
      ),
      designer: "Arpico",
      date: "25.07.2023",
      price: "4000Rs",
      rate: "15%",
      sold: "15",
      status: (
        <div className="completed d-flex gap-2 align-items-center">
          <i class="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">Received</p>
        </div>
      ),
    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <p className="align-items-center mt-3 fw-bold">Sofa</p>
        </div>
      ),
      designer: "Arpico",
      date: "25.07.2023",
      price: "4000Rs",
      rate: "15%",
      sold: "15",
      status: (
        <div className="completed d-flex gap-2 align-items-center">
          <i class="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">Received</p>
        </div>
      ),
    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <p className="align-items-center mt-3 fw-bold">Sofa</p>
        </div>
      ),
      designer: "Arpico",
      date: "25.07.2023",
      price: "4000Rs",
      rate: "15%",
      sold: "15",
      status: (
        <div className="completed d-flex gap-2 align-items-center">
          <i class="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">Received</p>
        </div>
      ),
    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <p className="align-items-center mt-3 fw-bold">Sofa</p>
        </div>
      ),
      designer: "Arpico",
      date: "25.07.2023",
      price: "4000Rs",
      rate: "15%",
      sold: "15",
      status: (
        <div className="completed d-flex gap-2 align-items-center">
          <i class="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">Received</p>
        </div>
      ),
    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <p className="align-items-center mt-3 fw-bold">Sofa</p>
        </div>
      ),
      designer: "Arpico",
      date: "25.07.2023",
      price: "4000Rs",
      rate: "15%",
      sold: "15",
      status: (
        <div className="completed d-flex gap-2 align-items-center">
          <i class="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">Received</p>
        </div>
      ),
    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <p className="align-items-center mt-3 fw-bold">Sofa</p>
        </div>
      ),
      designer: "Arpico",
      date: "25.07.2023",
      price: "4000Rs",
      rate: "15%",
      sold: "15",
      status: (
        <div className="completed d-flex gap-2 align-items-center">
          <i class="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">Received</p>
        </div>
      ),
    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <p className="align-items-center mt-3 fw-bold">Sofa</p>
        </div>
      ),
      designer: "Arpico",
      date: "25.07.2023",
      price: "4000Rs",
      rate: "15%",
      sold: "15",
      status: (
        <div className="completed d-flex gap-2 align-items-center">
          <i class="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">Received</p>
        </div>
      ),
    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <p className="align-items-center mt-3 fw-bold">Sofa</p>
        </div>
      ),
      designer: "Arpico",
      date: "25.07.2023",
      price: "4000Rs",
      rate: "15%",
      sold: "15",
      status: (
        <div className="completed d-flex gap-2 align-items-center">
          <i class="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">Received</p>
        </div>
      ),
    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <p className="align-items-center mt-3 fw-bold">Sofa</p>
        </div>
      ),
      designer: "Arpico",
      date: "25.07.2023",
      price: "4000Rs",
      rate: "15%",
      sold: "15",
      status: (
        <div className="completed d-flex gap-2 align-items-center">
          <i class="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">Received</p>
        </div>
      ),
    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <p className="align-items-center mt-3 fw-bold">Sofa</p>
        </div>
      ),
      designer: "Arpico",
      date: "25.07.2023",
      price: "4000Rs",
      rate: "15%",
      sold: "15",
      status: (
        <div className="completed d-flex gap-2 align-items-center">
          <i class="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">Received</p>
        </div>
      ),
    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <p className="align-items-center mt-3 fw-bold">Sofa</p>
        </div>
      ),
      designer: "Arpico",
      date: "25.07.2023",
      price: "4000Rs",
      rate: "15%",
      sold: "15",
      status: (
        <div className="completed d-flex gap-2 align-items-center">
          <i class="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">Received</p>
        </div>
      ),
    },
  ],
};
const columns = [
  {
    label: "Request",
    field: "product",
    sort: "asc",
    width: 100,
  },
  {
    label: "Room Type",
    field: "designer",
    sort: "asc",
    width: 100,
  },
  {
    label: "DATE",
    field: "date",
    sort: "asc",
    width: 100,
  },
  {
    label: "Status",
    field: "status",
    sort: "asc",
    width: 100,
  },
  {
    field: "rate",
    sort: "asc",
    width: 100,
  },
];
const rows = [
  {
    product: (
      <div className="d-flex flex-row gap-3 align-items-center">
        <img src={Customer} />

        <p className="align-items-center mt-3 fw-bold">Request No : </p>
      </div>
    ),
    designer: "Bed Room",
    date: "25.07.2023",
    price: "4000Rs",
    rate: "15%",
    status: (
      <div>
        <div className="completed d-flex gap-3 align-items-center">
          <i class="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">Received</p>
        </div>
      </div>
    ),
  },
];
function DesignerCustomerRequest() {
  //get designer id from session
  const session = useSession();
  // console.log("User id is " + session.sessionData.userid);
  const id = session.sessionData.userid.toString();
  const [alldata, setAllData] = useState([]);
  useEffect(() => {
    const getall = `http://localhost:8080/designer/CRequest/did/${id}`;
    axios.get(getall).then((res) => {
      setAllData(res.data);
    });
  }, []);
  console.log(alldata);
  return (
    <div className="stock-container background-total accordion bg-white rounded-3 mb-4 me-3">
      <div className="col-12 d-flex flex-column flex-lg-row flex-md-row gap-4 p-3 justify-content-between">
        <p className="text-dark fs-3 fw-bold Cabin-text">Customer Requests</p>
        <div className="d-flex flex-row gap-3 mt-3">
          <Icon.Bank size={25} color="#035C94" />
          <Link to="../setting">
            <p className="fs-5 fw-semibold" style={{ color: "#035C94" }}>
              Bank Details
            </p>
          </Link>
        </div>
      </div>
      <div>
        <Tabs
          defaultActiveKey="all"
          id="uncontrolled-tab-example"
          className="mb-3 bg-white tab"
        >
          <Tab eventKey="all" title="All">
            <div className="p-4">
              <MDBDataTableV5
                responsive
                striped
                bordered
                small
                columns={columns}
                // data={tableData}
                rows={rows}
                sortable={true}
                exportToCSV={true}
                paging={true}
                searching={true}
              />
            </div>
          </Tab>
          <Tab eventKey="Accepted" title="Accepted">
            Accepted
          </Tab>
          <Tab eventKey="Completed" title="Completed">
            Completed
          </Tab>
          <Tab eventKey="Waiting" title="Waiting For Payment">
            Waiting For Payment
          </Tab>
          <Tab eventKey="Rejected" title="Rejected">
            Rejected
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default DesignerCustomerRequest;
