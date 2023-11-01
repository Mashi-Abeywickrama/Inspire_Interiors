import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSession } from "../../constants/SessionContext";
import axios from "axios";
import { MDBDataTableV5, MDBTable } from "mdbreact";

import Hall from "../../assets/img/vendor/visiting room.png";
import Chair from "./../../assets/img/vendor/chair.png";
import Customer from "../../assets/img/vendor/customer.png";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

function DesignerCRequestview() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(0);

  //SetStaus
  const [newStatus, setNewStatus] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [designId, setDesignId] = useState(null);

  const { id } = useParams();

  const designUrl = `http://localhost:8000?id=${designId}`;

  //Fetch...
  useEffect(() => {
    const apiUrl = "http://localhost:8080/designer/customerrequests/" + id;
    // Fetch data from the API
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data); // Set the fetched data to the state
        setLoading(false); // Update loading state to false
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Update loading state to false in case of an error
      });
  }, []);
  useEffect(() => {
    const con = {
      method: `get`,
      url: `http://localhost:8080/designer/designtool/getdesigns/req/${id}`,
    };

    axios(con).then((response) => {
      console.log("Response is ", response);
      setDesignId(response.data.id);
    });
  }, []);
  console.log(data);
  const w = data.width;

  //get designer id from session
  const session = useSession();
  // console.log(session.sessionData.userid);
  const did = session.sessionData.userid;

  const tabledata = {
    columns: [
      {
        label: "DIMENSIONS",
        field: "name",
        sort: "asc",
        width: 200,
      },
      {
        label: "MEASUREMENTS",
        field: "value",
        sort: "asc",
        width: 200,
      },
    ],
    rows: [
      {
        name: "Width",
        value: data.width,
      },
      {
        name: "Length",
        value: data.length,
      },
    ],
  };

  const accepted = () => {
    const config1 = {
      method: `put`,
      url: `http://localhost:8080/designer/customerrequests/u/${id}/setstatus?newStatus=1`,
    };
    const config2 = {
      method: `get`,
      url: `http://localhost:8080/designer/designtool/req/${did}/${id}`,
    };
    const config3 = {
      method: `get`,
      url: `http://localhost:8080/designer/designtool/getdesigns/req/${id}`,
    };

    return axios(config1)
      .then((response) => {
        console.log("Response 1 is ", response);
        return axios(config2);
      })
      .then((response) => {
        console.log("Response 2 is ", response);
        return axios(config3);
      })
      .then((response) => {
        console.log("Response 3 is ", response.data.id);
        const dId = response.data.id;
        setDesignId(dId);
        setIsUpdated(true);
      });
  };
  useEffect(() => {
    console.log("Design Id is ", designId);
  }, [designId]);

  const rejected = () => {
    axios
      .put(
        `http://localhost:8080/designer/customerrequests/u/${id}/setstatus?newStatus=2`
      )
      .then((response) => {
        console.log(response);
        setIsUpdated(true);
      })
      .catch((error) => {
        console.log(" error to reject", error);
      });
  };
  const finished = () => {
    if (amount > 0) {
      axios.put(
        `http://localhost:8080/designer/CRequest/req/${id}/amount/${amount}`
      );
      axios
        .put(
          `http://localhost:8080/designer/customerrequests/u/${id}/setstatus?newStatus=3`
        )
        .then((response) => {
          console.log(response);
          setIsUpdated(true);
        })
        .catch((error) => {
          console.log(" error to reject", error);
        });
    } else {
      alert("Please Enter Amount");
    }
  };
  const handleReload = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000); // 2 seconds delay
  };

  let content;
  if (data.designer_id === did) {
    content = (
      <div>
        {/* <h1>Id is : {id}</h1>
        <h1>Designer Id is : {did}</h1> */}

        <div className="custom-container rounded-3 mb-4 ">
          <div className="col-12 d-flex flex-column flex-md-row flex-lg-row gap-4">
            <div className="col-lg-8 bg-white rounded-3 shadow p-4">
              <div className="d-flex flex-row gap-4">
                <Link to="/vendor/order/customizeorders">
                  <p className="text-dark fs-5 fw-bold Cabin-text">
                    Custom Designs
                  </p>
                </Link>
                <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                <p
                  className="fs-5 fw-bold Cabin-text"
                  style={{ color: "#A2A3B1" }}
                >
                  Requests
                </p>
              </div>
              <div className="d-flex flex-column">
                <p
                  className="fs-5 fw-bold Cabin-text text-uppercase text-primary"
                  style={{ color: "#545563" }}
                >
                  Request No: {data.request_id}
                </p>
                <p
                  className="fs-5 fw-bold Cabin-text text-dark text-uppercase"
                  style={{ color: "#545563" }}
                >
                  {data.roomType}
                </p>
                <p
                  className="fs-6 fw-bold Cabin-text"
                  style={{ color: "#545563" }}
                >
                  Design Description
                </p>
                <p
                  className="fs-6 fw-normal Cabin-text"
                  style={{ color: "#17183B" }}
                >
                  {data.description}
                </p>
              </div>
              <div className="d-flex flex-column">
                <p
                  className="fs-6 fw-bold Cabin-text"
                  style={{ color: "#545563" }}
                >
                  Design Specification
                </p>
                <p
                  className="fs-6 fw-normal Cabin-text"
                  style={{ color: "#17183B" }}
                >
                  {data.dimensions}
                </p>

                <div className="p-4">
                  <MDBDataTableV5
                    responsive
                    striped
                    bordered
                    small
                    data={tabledata}
                    sortable={false}
                    exportToCSV={true}
                    paging={false}
                    searching={false}
                  />
                </div>
              </div>
              {/* <div className="d-flex flex-column">
                <p
                  className="fs-6 fw-bold Cabin-text"
                  style={{ color: "#545563" }}
                >
                  Reference Images
                </p>
                <div className="d-flex flex-row gap-3">
                  <img className="img-fluid" src={Hall} alt="hall" />
                  <img className="img-fluid" src={Hall} alt="hall" />
                  <img className="img-fluid" src={Hall} alt="hall" />
                </div>
                <p
                  className="fs-6 fw-bold Cabin-text"
                  style={{ color: "#A2A3B1" }}
                >
                  + 3 more
                </p>
              </div> */}
              <div className="d-flex flex-column">
                <p
                  className="fs-6 fw-bold Cabin-text"
                  style={{ color: "#545563" }}
                >
                  Budget
                </p>
                <p
                  className="fs-6 fw-normal Cabin-text"
                  style={{ color: "#17183B" }}
                >
                  {data.budget}
                </p>
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex flex-row gap-3">
                  <p
                    className="fs-6 fw-bold Cabin-text"
                    style={{ color: "#545563" }}
                  >
                    Additional Notes
                  </p>
                  {/* <Icon.PencilFill color="#035C94" /> */}
                </div>
                <p
                  className="fs-6 fw-normal Cabin-text"
                  style={{ color: "#17183B" }}
                >
                  {data.note}
                </p>
                <p
                  className="fs-6 fw-bold Cabin-text"
                  style={{ color: "#545563" }}
                >
                  Requested On: {data.requestedOn}
                </p>
              </div>
              {data.status === 0 && (
                <div className="d-flex flex-row gap-3 justify-content-end">
                  <button className="dlt-btn Cabin-text" onClick={rejected}>
                    Decline Order
                  </button>
                  <button className="acpt-btn Cabin-text" onClick={accepted}>
                    Accept Order
                  </button>
                  {isUpdated && <p>Processing...</p>}
                  {isUpdated && handleReload()}
                </div>
              )}

              {data.status === 1 && (
                <div className="d-flex flex-row gap-3 justify-content-end">
                  <p
                    className="fs-6 fw-bold Cabin-text"
                    style={{ color: "#545563" }}
                  >
                    {" "}
                    Enter Amount :
                  </p>
                  <input
                    type="number"
                    className="bg-light text-dark"
                    style={{ borderColor: "#a9a9a959" }}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <button
                    className="acpt-btn Cabin-text"
                    style={{ background: "#007F00" }}
                    onClick={finished}
                  >
                    Complete Now
                  </button>

                  {isUpdated && <p>Processing...</p>}
                  {isUpdated && handleReload()}

                  <Link to={designUrl}>
                    <button
                      className="acpt-btn Cabin-text"
                      style={{ background: "#035C94" }}
                    >
                      Design Now
                    </button>
                  </Link>
                </div>
              )}

              {data.status === 2 && (
                <button className="dlt-btn Cabin-text">Rejected</button>
              )}

              {data.status === 3 && (
                <dic>
                  <p
                    className="fs-6 fw-bold Cabin-text"
                    style={{ color: "#545563" }}
                  >
                    {" "}
                    Amount Is : {data.amount}
                  </p>
                  <button
                    className="acpt-btn Cabin-text"
                    style={{ background: "#023047" }}
                  >
                    Waiting For Payment
                  </button>
                </dic>
              )}

              {/* <div className="d-flex flex-row gap-3 justify-content-end">
                <Link to="/vendor/order/customizeorders">
                  <button className="dlt-btn Cabin-text">Decline Order</button>
                </Link>
                <Link to="/vendor/order/customizeorders">
                  <button className="acpt-btn Cabin-text">Accept Order</button>
                </Link>
              </div> */}
            </div>
            <div className="col-lg-4">
              <div className="d-flex flex-column gap-2">
                <div className="col-lg-12 bg-white rounded-3 shadow p-4">
                  <div className="d-flex flex-column">
                    <p className="fs-5 fw-bold Cabin-text">
                      About Customer Avocado
                    </p>
                  </div>
                  <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-4">
                    <img
                      style={{ backgroundColor: "#FEE4CB", objectFit: "cover" }}
                      className="img-fluid p-3 rounded-4 border"
                      src={Customer}
                    />
                    <div className="d-flex flex-column">
                      <p className="fs-6 fw-bold" style={{ color: "#3D3D3D" }}>
                        Victor Avocado
                      </p>
                      <div className="d-flex flex-row gap-2">
                        <p
                          className="fs-6 fw-semibold Cabin-text"
                          style={{ color: "#023047" }}
                        >
                          Contact:
                        </p>
                        <p
                          className="fs-6 fw-normal Cabin-text"
                          style={{ color: "#023047" }}
                        >
                          (936) 361-0310
                        </p>
                      </div>
                      <p
                        className="fs-6 fw-bold Cabin-text"
                        style={{ color: "#023047" }}
                      >
                        Huzefa Bagwala
                      </p>
                      <p
                        className="fs-6 fw-normal Cabin-text"
                        style={{
                          color: "#023047",
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                      >
                        1131 Dusty Townline, Jacksonville, TX 40322
                      </p>
                      <button className="contact-btn float-end Cabin-text w-75">
                        Contact Customer
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-12 bg-white rounded-3 shadow p-4">
                  <p className="fs-5 fw-bold Cabin-text">3D Modal</p>
                  <img className="img-fluid px-5" src={Chair} />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    content = <h1>No Access</h1>;
  }

  return <div>{content}</div>;
}

export default DesignerCRequestview;
