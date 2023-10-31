import React, { useState, useEffect } from "react";

import "./../../styles/Designer/promotion.css";
import * as Icon from "react-bootstrap-icons";
import Arpico from "../../assets/Designer/Arpico.png";
import Sofa from "../../assets/Designer/sofa.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/customer/myOrders.css";
import "../../styles/customer/table.css";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { MDBDataTableV5, MDBTable } from "mdbreact";
import { Link } from "react-router-dom";

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useSession } from "../../constants/SessionContext";
import axios from "axios";


const largeTableData = {
  columns: [
    {
      label: "PRODUCT",
      field: "product",
      sort: "asc",
      width: 150,
    },
    {
      label: "VENDOR",
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
      label: "PRODUCT PRICE",
      field: "price",
      sort: "asc",
      width: 150,
    },
    {
      label: "COMMISION RATE",
      field: "rate",
      sort: "asc",
      width: 100,
    },
    {
      label: "SOLD",
      field: "sold",
      sort: "asc",
      width: 100,
    },
    {
      label: "PAYMENT STATUS",
      field: "status",
      sort: "asc",
      width: 100,
    },
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
      status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>

    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <p className="align-items-center mt-3 fw-bold">Sofa</p>
        </div>
      ),
      designer: "Singzaif",
      date: "25.07.2023",
      price: "4000Rs",
      rate: "15%",
      sold: "15",
      status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>

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
      status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>

    },
    {
      product: (
        <div className="d-flex flex-row gap-4 align-items-center">
          <img src={Sofa} />
          <p className="align-items-center mt-3 fw-bold">Sofa</p>
        </div>
      ),
      designer: "De sofa's",
      date: "25.07.2023",
      price: "4000Rs",
      rate: "15%",
      sold: "15",
      status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>

    },
  ],
};

const DesignerPromotion = () => {
  const sessionItems = useSession();
  const userId = sessionItems.sessionData.userid;

  const apiBaseURL = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseURL,
    timeout: 5000,
  });

  const[vendorData, setVendorData] = useState([]);
  const[statusData, setStatusData] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API
    axiosInstance
      .get(`/designer/promotionrequests/d/${userId}`)
      .then((response) => {
        setStatusData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
    });
}, []);

  useEffect(() => {
    axiosInstance
      .get(`/filtertype/vendor`)
      .then((response) => {
        setVendorData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
    });
  }, []);

  const Columns = [
    {
        label: 'OFFER OVERVIEW',
        field: 'overview',
        sort: 'asc',
        width: 300
    },
    {
        label:'STATUS',
        field: 'status',
        sort: 'asc',
        width: 250
    },

  ];

  const findStatus = (status) => {
    if(status == 0){
        return "Pending";
    } else if(status == 1){
        return "Accepted";
    }
  };

  const AcceptedData = statusData.filter(vendoroffer => vendoroffer.status == 1);
  console.log(AcceptedData);

const PendingData = statusData.filter(vendoroffer => vendoroffer.status == 0);

const Rows1 = AcceptedData.map(vendoroffer=>({
  overview: <Link to={`/designer/promotion/Promotionrequest?id=${vendoroffer.promotionRequestID}`}><p className='align-items-center text-dark text-uppercase fs-6 fw-semibold mt-3 m-0'>{vendoroffer.overview}</p></Link>,
  status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>{findStatus(vendoroffer.status)}</p></div>
}));

const Rows = PendingData.map(vendoroffer=>({
  overview: <Link to={`/designer/promotion/Promotionrequest?id=${vendoroffer.promotionRequestID}`}><p className='align-items-center text-dark text-uppercase fs-6 fw-semibold mt-3 m-0'>{vendoroffer.overview}</p></Link>,
  status: <div className='ongoing d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>{findStatus(vendoroffer.status)}</p></div>

}));

  const mergeData = (acceptedData, vendorData) => {
    const mergedData = acceptedData.map(
      (acceptedItem) => {
      const matchingVendor = vendorData.find(
        (vendorItem) =>  vendorItem.userid === acceptedItem.vendorID
      );

     
  
      if (matchingVendor ) {
        // Merge the data from both sources
        return {
          ...acceptedItem,
          ...matchingVendor
        
        };
      } else {
        return {
            ...acceptedItem
        };
    }});
  
    return mergedData;
};

const mergedVendor = mergeData(AcceptedData, vendorData);
console.log("merged Data", mergedVendor);

  return(
  <>
    <div className="promotion-container background-promotion accordion rounded-3 mb-4 me-5">
      <div className="col-12 d-flex flex-column">
      <div className=" col-12 d-flex flex-column flex-lg-row flex-md-row gap-3">
          <div
            className="col-lg-8 bg-white rounded-3 my-2 shadow"
          >
            <div className="d-flex flex-row gap-3 p-3">
              <p className="fs-3 fw-bold Cabin-text">Partnered Vendors</p>

              <p
                className="fs-5 fw-semibold mt-2 Cabin-text"
                style={{ color: "#035C94" }}
              >
                See all
                <Icon.ArrowRight color="#035C94" />
              </p>
            </div>
            <div className="d-flex flex-wrap">
                <div class="row row-cols-1 row-cols-md-3 g-4 my-1 mx-4">
                {mergedVendor.map((vendor, index) => (
                  <div class="col">
                    <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                      <img
                        className="img-fluid"
                        src={`../../../../src/assets/img/profilePic/${vendor.profile_pic}`}
                        class="card-img-top"
                        alt="blacksofa"
                      />
                      <div class="card-body m-0 p-0 mt-3">
                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                          <div className="d-flex flex-column">
                            <p
                              className="card-text m-0 fs-6 fw-bold Cabin-text"
                              style={{ color: "#969696" }}
                            >
                              {vendor.username}
                            </p>
                            <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">
                              {vendor.type}
                            </p>
                          </div>
                          <Link to={`/vendor/promotion/viewdesigners?id=${vendor.userid}`}><Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} /></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                ))}
                </div>
              </div> 
              </div>   
          
          <div className="col-lg-4 border bg-white rounded-3 my-2 shadow p-3">
            <div className="d-flex flex-row gap-3 p-3">
              <p className="fs-3 fw-bold Cabin-text">Promotion Requests</p>

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
                      columns={Columns}
                      rows={Rows}
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
                      columns={Columns}
                      rows={Rows1}
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
        <div className="col-lg-12 container-fluid border bg-white rounded-3 my-2 shadow">
          <div className="d-flex flex-row gap-3 p-3">
            <p className="fs-3 fw-bold Cabin-text">
              Earnings From Paid Promotions
            </p>
            <Link to="earnings">
              <p
                className="fs-5 fw-semibold mt-2 Cabin-text"
                style={{ color: "#035C94" }}
              >
                See all
                <Icon.ArrowRight color="#035C94" />
              </p>
            </Link>
          </div>

          <div className="p-3">
            <MDBDataTableV5
              responsive
              striped
              bordered
              small
              data={largeTableData}
              sortable={false}
              exportToCSV={true}
              paging={false}
              searching={false}
            />
          </div>
        </div>
      </div>
  </>
)
};

export default DesignerPromotion;
