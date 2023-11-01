import React, { useState, useEffect } from "react";
import axios from "axios";

import BlackSofa from "../../assets/img/vendor/blacksofa.png";
import YellowSofa from "../../assets/img/vendor/yellowsofa.png";
import TableSet from "../../assets/img/vendor/tableset.png";
import WhiteSofa from "../../assets/img/vendor/whitesofa.png";
import * as Icon from "react-bootstrap-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faHeart } from "@fortawesome/free-solid-svg-icons";
import Sofa from "../../assets/img/vendor/sofa.png";
import Sketch from "../../assets/Designer/Sketch.jpeg";
import Shake from "../../assets/Designer/Shake.jpeg";
import Customer from "../../assets/Designer/profile1.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/customer/myOrders.css";
import "../../styles/customer/table.css";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { MDBDataTableV5, MDBTable } from "mdbreact";
import "../../styles/Designer/DesignerDesigntool.css";
import CreateNewDesignPopup from "../../components/designer/Popup/CreateNewDesignPopup";
import { NavLink } from "react-router-dom";
import { id } from "date-fns/locale";
import { useSession } from "../../constants/SessionContext";
import { Link } from "react-router-dom";
import { set } from "date-fns";

const receivedData = {
  columns: [
    {
      label: "CUSTOMIZED REQUEST DETAILS",
      field: "product",
      sort: "asc",
      width: 250,
    },
    {
      field: "status",
      sort: "asc",
      width: 270,
    },
  ],
  rows: [
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <div className="d-flex flex-column">
            <p className="align-items-center fs-6 fw-semibold mt-3 m-0">
              David Avacado
            </p>
            <p className="fs-6 fw-normal">Living Room</p>
          </div>
        </div>
      ),
      status: (
        <div className="d-flex flex-column">
          <div className="d-flex flex-row gap-3">
            <button className="fs-6 fw-semibold Cabin-text ignore-btn">
              Ignore
            </button>
            <button className="fs-6 fw-semibold Cabin-text accepted-btn">
              Accept
            </button>
          </div>
          <p className="float-end">23 min ago</p>
        </div>
      ),
    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <div className="d-flex flex-column">
            <p className="align-items-center fs-6 fw-semibold mt-3 m-0">
              David Avacado
            </p>
            <p className="fs-6 fw-normal">Living Room</p>
          </div>
        </div>
      ),
      status: (
        <div className="d-flex flex-column">
          <div className="d-flex flex-row gap-3">
            <button className="fs-6 fw-semibold Cabin-text ignore-btn">
              Ignore
            </button>
            <button className="fs-6 fw-semibold Cabin-text accepted-btn">
              Accept
            </button>
          </div>
          <p className="float-end">23 min ago</p>
        </div>
      ),
    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <div className="d-flex flex-column">
            <p className="align-items-center fs-6 fw-semibold mt-3 m-0">
              David Avacado
            </p>
            <p className="fs-6 fw-normal">Living Room</p>
          </div>
        </div>
      ),
      status: (
        <div className="d-flex flex-column">
          <div className="d-flex flex-row gap-3">
            <button className="fs-6 fw-semibold Cabin-text ignore-btn">
              Ignore
            </button>
            <button className="fs-6 fw-semibold Cabin-text accepted-btn">
              Accept
            </button>
          </div>
          <p className="float-end">23 min ago</p>
        </div>
      ),
    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <div className="d-flex flex-column">
            <p className="align-items-center fs-6 fw-semibold mt-3 m-0">
              David Avacado
            </p>
            <p className="fs-6 fw-normal">Living Room</p>
          </div>
        </div>
      ),
      status: (
        <div className="d-flex flex-column">
          <div className="d-flex flex-row gap-3">
            <button className="fs-6 fw-semibold Cabin-text ignore-btn">
              Ignore
            </button>
            <button className="fs-6 fw-semibold Cabin-text accepted-btn">
              Accept
            </button>
          </div>
          <p className="float-end">23 min ago</p>
        </div>
      ),
    },
  ],
};

function DesignerDesigntool() {
  const [dradata, setDradata] = useState([]);
  const [data, setData] = useState([]);
  const [requestDesign, setRequestDesign] = useState([]);
  const [acceptedData, setAcceptedData] = useState([]);
  const [fildata, setFildata] = useState([]);
  const [loading, setLoading] = useState(true);

  //get designer id from session
  const session = useSession();
  // console.log("User id is " + session.sessionData.userid);
  const id = session.sessionData.userid.toString();

  function arrange(arr) {
    let arr1 = arr.sort(
      (a, b) => new Date(a.createdOn) - new Date(b.createdOn)
    );
    arr1 = arr1.slice(-4);

    return arr1;
  }

  //fetch...
  useEffect(() => {
    const receivedRequest = `http://localhost:8080/designer/CRequest/did/${id}/st/0`;
    const acceptedRequest = `http://localhost:8080/designer/CRequest/did/${id}/st/1`;
    const draftUrl =
      "http://localhost:8080/designer/designtool/getdesign/dra/" + id;

    const requestDesignUrl =
      "http://localhost:8080/designer/designtool/getdesign/req/" + id;
    // Fetch data from the API
    axios
      .get(receivedRequest)
      .then((response) => {
        setData(response.data); // Set the fetched data to the state
        setLoading(false); // Update loading state to false
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Update loading state to false in case of an error
      });
    axios.get(acceptedRequest).then((response) => {
      setAcceptedData(response.data);
      console.log(acceptedData);
    });

    axios
      .get(draftUrl)
      .then((response) => {
        setDradata(response.data);
        console.log("Designer's Own Designs");
        console.log(dradata);
      })
      .catch((err) => console.log(err));

    axios.get(requestDesignUrl).then((res) => {
      setRequestDesign(res.data);
      console.log("Customer Requested Designs...");
      console.log(requestDesign);
    });
  }, []);
  let arr = arrange(dradata);
  console.log(arr);
  let arr1 = arrange(requestDesign);
  console.log(arr1);
  let arr1_a = arr1.slice(0, 2);
  let arr1_b = arr1.slice(2, 4);

  const x = data.length;
  console.log(
    data.map((item) => "Data is " + item.request_id),
    x
  );

  const columns = [
    {
      label: "CUSTOMIZED REQUEST DETAILS",
      field: "product",
      sort: "asc",
      width: 250,
    },
    {
      field: "status",
      sort: "asc",
      width: 270,
    },
  ];

  const received = data.map((item) => ({
    product: (
      <div className="d-flex flex-row gap-4 align-items-center">
        <a href={`crequestview/${item.request_id}`}>
          <img src={Customer} alt={`Product ${item.request_id}`} />
        </a>
        <div className="d-flex flex-column">
          <p className="align-items-center fs-6 fw-semibold mt-3 m-0">
            REQUEST NO: {item.request_id}
          </p>
          <p className="fs-6 fw-normal">Living Room</p>
        </div>
      </div>
    ),
    status: (
      <div className="d-flex flex-column">
        <div className="d-flex gap-2 align-items-center">
          <a href={`crequestview/${item.request_id}`}>
            <p className="text-primary fs-6 ">
              View More &nbsp;
              <i class="bi bi-arrow-right fs-6"></i>
            </p>
          </a>

          {/* <i className="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">Accepted</p> */}
        </div>
        {/* <p className="float-end">23 min ago</p> */}
      </div>
    ),
  }));

  const accepted = acceptedData.map((item) => ({
    product: (
      <div className="d-flex flex-row gap-4 align-items-center">
        <a href={`crequestview/${item.request_id}`}>
          <img src={Customer} alt={`Product ${item.request_id}`} />
        </a>
        <div className="d-flex flex-column">
          <p className="align-items-center fs-6 fw-semibold mt-3 m-0">
            REQUEST NO: {item.request_id}
          </p>
          <p className="fs-6 fw-normal">Living Room</p>
        </div>
      </div>
    ),
    status: (
      <div className="d-flex flex-column">
        <div className="d-flex gap-2 align-items-center">
          <a href={`crequestview/${item.request_id}`}>
            <p className="text-primary fs-6 ">
              View More &nbsp;
              <i class="bi bi-arrow-right fs-6"></i>
            </p>
          </a>

          {/* <i className="bi bi-circle-fill tag-icon"></i>
          <p className="m-0">Accepted</p> */}
        </div>
        {/* <p className="float-end">23 min ago</p> */}
      </div>
    ),
  }));

  console.log(data);
  console.log(acceptedData);

  return (
    <div className="d-flex design-container background-design flex-column gap-3 me-5">
      <div className="col-lg-12  bg-white rounded-3 p-4">
        {/* Saved Designs */}
        <div className="d-flex flex-row-reverse">
          <CreateNewDesignPopup />
        </div>
        <div className="d-flex flex-row gap-3">
          <p className="fs-3 fw-bold Cabin-text">Drafted Designs</p>
          <p
            className="fs-5 fw-semibold mt-2 Cabin-text"
            style={{ color: "#035C94" }}
          >
            <NavLink to="../drafteddesigns">
              <div className="text-primary">
                See all
                <Icon.ArrowRight color="#035C94" />
              </div>
            </NavLink>
          </p>
        </div>
        <div className="d-flex flex-column flex-lg-row flex-md-row  gap-3">
          {arr.map((res) => (
            <Link to={"http://localhost:8000?id=" + res.id}>
              <div class="col">
                <div class="card p-2 h-100 mb-2 rounded-3 border-0 shadow">
                  <img
                    className="img-fluid"
                    src={Sketch}
                    class="card-img-top"
                    alt="blacksofa"
                  />
                  <div class="card-body m-0 p-0 mt-3">
                    <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                      <div className="d-flex flex-column">
                        <p
                          className="card-text m-0 fs-6 fw-semibold Cabin-text"
                          style={{ color: "#969696" }}
                        >
                          Design No {res.id}
                        </p>
                        <p class="card-title fw-bold fs-6 m-0 Cabin-text">
                          Created On: {res.createdOn}
                        </p>
                      </div>
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="align-items-center justify-content-center"
                        size="" // Adjust the size as needed
                        style={{
                          color: "white",
                          backgroundColor: "#035C94",
                          padding: "8px",
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* <div class="col">
            <div class="card p-2 h-100 mb-2 rounded-3 border-0 shadow">
              <img
                className="img-fluid"
                src={YellowSofa}
                class="card-img-top"
                alt="yellowsofa"
              />
              <div class="card-body m-0 p-0 mt-3">
                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                  <div className="d-flex flex-column">
                    <p
                      className="card-text m-0 fs-6 fw-semibold Cabin-text"
                      style={{ color: "#969696" }}
                    >
                      YELLOW WORLD
                    </p>
                    <p class="card-title fw-bold fs-6 m-0 Cabin-text">
                      Living Room
                    </p>
                  </div>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="align-items-center justify-content-center"
                    size="" // Adjust the size as needed
                    style={{
                      color: "white",
                      backgroundColor: "#035C94",
                      padding: "8px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card p-2 h-100 mb-2 rounded-3 border-0 shadow">
              <img
                className="img-fluid"
                src={TableSet}
                class="card-img-top"
                alt="tableset"
              />
              <div class="card-body m-0 p-0 mt-3">
                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                  <div className="d-flex flex-column">
                    <p
                      className="card-text m-0 fs-6 fw-semibold Cabin-text"
                      style={{ color: "#969696" }}
                    >
                      LUXURY HOME
                    </p>
                    <p class="card-title fw-bold fs-6 m-0 Cabin-text">
                      Living Room
                    </p>
                  </div>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="align-items-center justify-content-center"
                    size="" // Adjust the size as needed
                    style={{
                      color: "white",
                      backgroundColor: "#035C94",
                      padding: "8px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card p-2 h-100 mb-2 rounded-3 border-0 shadow">
              <img
                className="img-fluid"
                src={TableSet}
                class="card-img-top"
                alt="tableset"
              />
              <div class="card-body m-0 p-0 mt-3">
                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                  <div className="d-flex flex-column">
                    <p
                      className="card-text m-0 fs-6 fw-semibold Cabin-text"
                      style={{ color: "#969696" }}
                    >
                      LUXURY HOME
                    </p>
                    <p class="card-title fw-bold fs-6 m-0 Cabin-text">
                      Living Room
                    </p>
                  </div>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="align-items-center justify-content-center"
                    size="" // Adjust the size as needed
                    style={{
                      color: "white",
                      backgroundColor: "#035C94",
                      padding: "8px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="d-flex flex-column flex-lg-row flex-md-row gap-3">
        {/*Recent Designs */}
        <div className="col-lg-6 bg-white rounded-3 p-4 gap-3">
          <div className="d-flex flex-row gap-3">
            <p className="fs-3 fw-bold Cabin-text">
              Customer Requested Designs
            </p>
            <p
              className="fs-5 fw-semibold mt-2 Cabin-text"
              style={{ color: "#035C94" }}
            >
              <NavLink to="../requesteddesigns">
                <div className="text-primary">
                  See all
                  <Icon.ArrowRight color="#035C94" />
                </div>
              </NavLink>
            </p>
          </div>
          <div className="d-flex flex-column flex-lg-row flex-md-row gap-3">
            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column flex-lg-row flex-md-row gap-3">
                {arr1_a.map((res) => (
                  <div class="col">
                    <Link to={"http://localhost:8000?id=" + res.id}>
                      <div class="card p-2 h-100 mb-2 rounded-3 border-0 shadow">
                        <img
                          className="img-fluid"
                          src={Shake}
                          class="card-img-top"
                          alt="blacksofa"
                        />
                        <div class="card-body m-0 p-0 mt-3">
                          <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                            <div className="d-flex flex-column">
                              <p
                                className="card-text m-0 fs-6 fw-semibold Cabin-text"
                                style={{ color: "#969696" }}
                              >
                                Design No {res.id}
                              </p>
                              <p class="card-title fw-bold fs-6 m-0 Cabin-text">
                                Created On: {res.createdOn}
                              </p>
                              <p className="card-text m-0 fs-6 fw-bolder Cabin-text">
                                Request No: {res.request_id}
                              </p>
                            </div>
                            <FontAwesomeIcon
                              icon={faHeart}
                              className="align-items-center"
                              style={{
                                color: "white",
                                backgroundColor: "#035C94",
                                padding: "8px 12px 8px",
                                borderRadius: "5px",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}

                {/* <div class="col">
                  <div class="card p-2 h-100 mb-2 rounded-3 border-0 shadow">
                    <img
                      className="img-fluid"
                      src={YellowSofa}
                      class="card-img-top"
                      alt="yellowsofa"
                    />
                    <div class="card-body m-0 p-0 mt-3">
                      <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                        <div className="d-flex flex-column">
                          <p
                            className="card-text m-0 fs-6 fw-semibold Cabin-text"
                            style={{ color: "#969696" }}
                          >
                            YELLOW WORLD
                          </p>
                          <p class="card-title fw-bold fs-6 m-0 Cabin-text">
                            Living Room
                          </p>
                          <p className="card-text m-0 fw-bolder fs-6 Cabin-text">
                            $499
                          </p>
                        </div>
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="align-items-center"
                          style={{
                            color: "red",
                            backgroundColor: "#035C94",
                            padding: "8px 12px 8px",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="d-flex flex-column flex-lg-row flex-md-row gap-3">
                {arr1_b.map((res) => (
                  <div class="col">
                    <Link to={"http://localhost:8000?id=" + res.id}>
                      <div class="card p-2 h-100 mb-2 rounded-3 border-0 shadow">
                        <img
                          className="img-fluid"
                          src={Shake}
                          class="card-img-top"
                          alt="blacksofa"
                        />
                        <div class="card-body m-0 p-0 mt-3">
                          <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                            <div className="d-flex flex-column">
                              <p
                                className="card-text m-0 fs-6 fw-semibold Cabin-text"
                                style={{ color: "#969696" }}
                              >
                                Design No {res.id}
                              </p>
                              <p class="card-title fw-bold fs-6 m-0 Cabin-text">
                                Created On: {res.createdOn}
                              </p>
                              <p className="card-text m-0 fs-6 fw-bolder Cabin-text">
                                Request No: {res.request_id}
                              </p>
                            </div>
                            <FontAwesomeIcon
                              icon={faHeart}
                              className="align-items-center"
                              style={{
                                color: "white",
                                backgroundColor: "#035C94",
                                padding: "8px 12px 8px",
                                borderRadius: "5px",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
                {/* <div class="col">
                  <div class="card p-2 h-100 mb-2 rounded-3 border-0 shadow">
                    <img
                      className="img-fluid"
                      src={YellowSofa}
                      class="card-img-top"
                      alt="yellowsofa"
                    />
                    <div class="card-body m-0 p-0 mt-3">
                      <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                        <div className="d-flex flex-column">
                          <p
                            className="card-text m-0 fs-6 fw-semibold Cabin-text"
                            style={{ color: "#969696" }}
                          >
                            YELLOW WORLD
                          </p>
                          <p class="card-title fw-bold fs-6 m-0 Cabin-text">
                            Living Room
                          </p>
                          <p className="card-text m-0 fw-bolder fs-6 Cabin-text">
                            $499
                          </p>
                        </div>
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="align-items-center"
                          style={{
                            color: "white",
                            backgroundColor: "#035C94",
                            padding: "8px 12px 8px",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div class="col">
                  <div class="card p-2 h-100 mb-2 rounded-3 border-0 shadow">
                    <img
                      className="img-fluid"
                      src={YellowSofa}
                      class="card-img-top"
                      alt="yellowsofa"
                    />
                    <div class="card-body m-0 p-0 mt-3">
                      <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                        <div className="d-flex flex-column">
                          <p
                            className="card-text m-0 fs-6 fw-semibold Cabin-text"
                            style={{ color: "#969696" }}
                          >
                            YELLOW WORLD
                          </p>
                          <p class="card-title fw-bold fs-6 m-0 Cabin-text">
                            Living Room
                          </p>
                          <p className="card-text m-0 fw-bolder fs-6 Cabin-text">
                            $499
                          </p>
                        </div>
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="align-items-center"
                          style={{
                            color: "white",
                            backgroundColor: "#035C94",
                            padding: "8px 12px 8px",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 bg-white rounded-3 p-4">
          {/*Customer Requests */}
          <div className="d-flex flex-row gap-3">
            <p className="fs-3 fw-bold Cabin-text">Customer Requests</p>
            <NavLink to="../requests">
              <p
                className="fs-5 fw-semibold mt-2 Cabin-text"
                style={{ color: "#035C94" }}
              >
                See all
                <Icon.ArrowRight color="#035C94" />
              </p>
            </NavLink>
          </div>
          <div className="d-flex flex-column my-2">
            <Tabs
              defaultActiveKey="Received"
              id="uncontrolled-tab-example"
              className="mb-3 bg-white tab"
            >
              <Tab eventKey="Received" title="Received">
                <div className="my-2">
                  <MDBDataTableV5
                    responsive
                    striped
                    bordered
                    small
                    rows={received}
                    columns={columns}
                    sortable={false}
                    exportToCSV={true}
                    paging={false}
                    searching={false}
                  />
                </div>
              </Tab>
              <Tab eventKey="Accepted" title="Accepted">
                <div className="">
                  <MDBDataTableV5
                    responsive
                    striped
                    bordered
                    small
                    columns={columns}
                    rows={accepted}
                    // data={receivedData}
                    sortable={false}
                    exportToCSV={true}
                    paging={false}
                    searching={false}
                  />
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignerDesigntool;
