import BlackSofa from "../../assets/img/vendor/blacksofa.png";
import YellowSofa from "../../assets/img/vendor/yellowsofa.png";
import TableSet from "../../assets/img/vendor/tableset.png";
import WhiteSofa from "../../assets/img/vendor/whitesofa.png";
import * as Icon from "react-bootstrap-icons";

import Sofa from "../../assets/img/vendor/sofa.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/customer/myOrders.css";
import "../../styles/customer/table.css";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { MDBDataTableV5, MDBTable } from "mdbreact";
import "../../styles/Designer/DesignerDesigntool.css";
import CreateNewDesignPopup from "../../components/designer/Popup/CreateNewDesignPopup";
import { NavLink } from "react-router-dom";

const receivedData = {
  columns: [
    {
      label: "PROMOTION DETAILS",
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

const sentData = {
  columns: [
    {
      label: "PROMOTION DETAILS",
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
            <p className="align-items-center fs-6 fw-semibold mt-3 m-0">David Avocardo</p>
            <p className="fs-6 fw-normal">Living Room</p>
          </div>
        </div>
      ),
      status: (
        <div className="d-flex flex-column">
          <div className="completed d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Accepted</p>
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
            <p className="align-items-center fs-6 fw-semibold mt-3 m-0">Sherine De Mel</p>
            <p className="fs-6 fw-normal">Living Room</p>
          </div>
        </div>
      ),
      status: (
        <div className="d-flex flex-column">
          <div className="completed d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Withdrawn</p>
          </div>
          <p className="float-end">2 days ago</p>
        </div>
      ),
    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <div className="d-flex flex-column">
            <p className="align-items-center fs-6 fw-semibold mt-3 m-0">Mevern Jade</p>
            <p className="fs-6 fw-normal">Living Room</p>
          </div>
        </div>
      ),
      status: (
        <div className="d-flex flex-column">
          <div className="completed d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Accepted</p>
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
            <p className="align-items-center fs-6 fw-semibold mt-3 m-0">Triney Da Zar</p>
            <p className="fs-6 fw-normal">Living Room</p>
          </div>
        </div>
      ),
      status: (
        <div className="d-flex flex-column">
          <div className="completed d-flex gap-2 align-items-center">
            <i class="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">Accepted</p>
          </div>
          <p className="float-end">23 min ago</p>
        </div>
      ),
    },
  ],
};

function DesignerDesigntool() {
  return (
    <div className="d-flex design-container background-design flex-column gap-3 me-5">
      <div className="col-lg-12  bg-white rounded-3 p-4">
        {/* Saved Designs */}
        <div className="d-flex flex-row-reverse">
          <CreateNewDesignPopup />
        </div>
        <div className="d-flex flex-row gap-3">
          <p className="fs-3 fw-bold Cabin-text">Saved Designs</p>
          <p
            className="fs-5 fw-semibold mt-2 Cabin-text"
            style={{ color: "#035C94" }}
          >
            <NavLink to="../mydesigns">
              <div className="text-primary">
                See all
                <Icon.ArrowRight color="#035C94" />
              </div>
            </NavLink>
          </p>
        </div>
        <div className="d-flex flex-column flex-lg-row flex-md-row  gap-3">
          <div class="col">
            <div class="card p-2 h-100 mb-2 rounded-3 border-0 shadow">
              <img
                className="img-fluid"
                src={BlackSofa}
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
                      HI THE GREY
                    </p>
                    <p class="card-title fw-bold fs-6 m-0 Cabin-text">
                      Landskrona
                    </p>
                    <p className="card-text m-0 fs-6 fw-bolder Cabin-text">
                      $499
                    </p>
                  </div>
                  <Icon.Bag
                    className="align-items-center"
                    size={35}
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
                  <Icon.Bag
                    className="align-items-center"
                    size={35}
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
                    <p class="card-title fw-bold fs-6 m-0 Cabin-text">Living Room</p>
                    <p className="card-text m-0 fw-bolder fs-6 Cabin-text">
                      $499
                    </p>
                  </div>
                  <Icon.Bag
                    className="align-items-center"
                    size={35}
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
                    <p class="card-title fw-bold fs-6 m-0 Cabin-text">Living Room</p>
                    <p className="card-text m-0 fw-bolder fs-6 Cabin-text">
                      $499
                    </p>
                  </div>
                  <Icon.Bag
                    className="align-items-center"
                    size={35}
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
        </div>
      </div>

      <div className="d-flex flex-column flex-lg-row flex-md-row gap-3">
        {/*Recent Designs */}
        <div className="col-lg-6 bg-white rounded-3 p-4 gap-3">
          <div className="d-flex flex-row gap-3">
            <p className="fs-3 fw-bold Cabin-text">Recent Designs</p>
            <p
              className="fs-5 fw-semibold mt-2 Cabin-text"
              style={{ color: "#035C94" }}
            >
              <NavLink to="../mydesigns">
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
                <div class="col">
                  <div class="card p-2 h-100 mb-2 rounded-3 border-0 shadow">
                    <img
                      className="img-fluid"
                      src={BlackSofa}
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
                            HI THE GREY
                          </p>
                          <p class="card-title fw-bold fs-6 m-0 Cabin-text">
                            Living room
                          </p>
                          <p className="card-text m-0 fs-6 fw-bolder Cabin-text">
                            $499
                          </p>
                        </div>
                        <Icon.Bag
                          className="align-items-center"
                          size={35}
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
                        <Icon.Bag
                          className="align-items-center"
                          size={35}
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
              </div>
              <div className="d-flex flex-column flex-lg-row flex-md-row gap-3">
                <div class="col">
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
                        <Icon.Bag
                          className="align-items-center"
                          size={35}
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
                        <Icon.Bag
                          className="align-items-center"
                          size={35}
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
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 bg-white rounded-3 p-4">
          {/*Customer Requests */}
          <div className="d-flex flex-row gap-3">
            <p className="fs-3 fw-bold Cabin-text">Customer Requests</p>
            <p
              className="fs-5 fw-semibold mt-2 Cabin-text"
              style={{ color: "#035C94" }}
            >
              See all
              <Icon.ArrowRight color="#035C94" />
            </p>
          </div>
          <div className="d-flex flex-column my-2">
            <Tabs
              defaultActiveKey="Accepted"
              id="uncontrolled-tab-example"
              className="mb-3 bg-white tab"
            >
              <Tab eventKey="Accepted" title="Accepted">
                <div className="my-2">
                  <MDBDataTableV5
                    responsive
                    striped
                    bordered
                    small
                    data={sentData}
                    sortable={false}
                    exportToCSV={true}
                    paging={false}
                    searching={false}
                  />
                </div>
              </Tab>
              <Tab eventKey="Received" title="Received">
                <div className="">
                  <MDBDataTableV5
                    responsive
                    striped
                    bordered
                    small
                    data={receivedData}
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
