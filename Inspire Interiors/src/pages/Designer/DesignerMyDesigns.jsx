import React, { useState } from "react";
import Img1 from "../../assets/Designer/Mydesign.png";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import PageNumb from "../../components/customer/pagenum";
import "./../../styles/customer/designs.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Pagination } from "@mui/material";
import AddNewDesignPopup from "../../components/designer/Popup/AddNewDesignPopupHook";

import { useLoaderData } from "react-router-dom";
import { DesignLoader } from "../../Loaders/Designer/MyDesignsLoader";

function DesignerMyDesigns() {
  //Loader initiate
  const MyDesigns = useLoaderData(DesignLoader);

  return (
    <div className="overview-container rounded-3 mb-4">
      <p className="text-primary d-flex justify-content-between">
        <p className="fs-2 fw-medium">My Designs</p>
        <AddNewDesignPopup />
      </p>
      <div className="d-flex flex-row flex-wrap gap-3">
        {/* Cart */}
        <div class="card" style={{ width: "23%" }}>
          <img
            src={Img1}
            className="card-img-top img-fluid rounded-2"
            alt="design"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Grey Theme</h5>
            <p className="card-text fw-medium">Living Room</p>
            <p className="text  d-flex gap-2 justify-content-around">
              <p className="text-decoration-line-throug text-secondary ">
                $549
              </p>

              <p className="text-decoration-none text-danger">$400</p>
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
            </p>
          </div>
        </div>
        <div class="card" style={{ width: "23%" }}>
          <img
            src={Img1}
            className="card-img-top img-fluid rounded-2"
            alt="design"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Grey Theme</h5>
            <p className="card-text fw-medium">Living Room</p>
            <p className="text  d-flex gap-2 justify-content-around">
              <p className="text-decoration-line-throug text-secondary ">
                $549
              </p>

              <p className="text-decoration-none text-danger">$400</p>
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
            </p>
          </div>
        </div>
        <div class="card" style={{ width: "23%" }}>
          <img
            src={Img1}
            className="card-img-top img-fluid rounded-2"
            alt="design"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Grey Theme</h5>
            <p className="card-text fw-medium">Living Room</p>
            <p className="text  d-flex gap-2 justify-content-around">
              <p className="text-decoration-line-throug text-secondary ">
                $549
              </p>

              <p className="text-decoration-none text-danger">$400</p>
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
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "23%" }}>
          <img
            src={Img1}
            className="card-img-top img-fluid rounded-2"
            alt="design"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Grey Theme</h5>
            <p className="card-text fw-medium">Living Room</p>
            <p className="text  d-flex gap-2 justify-content-around">
              <p className="text-decoration-line-throug text-secondary ">
                $549
              </p>

              <p className="text-decoration-none text-danger">$400</p>
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
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "23%" }}>
          <img
            src={Img1}
            className="card-img-top img-fluid rounded-2"
            alt="design"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Grey Theme</h5>
            <p className="card-text fw-medium">Living Room</p>
            <p className="text  d-flex gap-2 justify-content-around">
              <p className="text-decoration-line-throug text-secondary ">
                $549
              </p>

              <p className="text-decoration-none text-danger">$400</p>
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
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "23%" }}>
          <img
            src={Img1}
            className="card-img-top img-fluid rounded-2"
            alt="design"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Grey Theme</h5>
            <p className="card-text fw-medium">Living Room</p>
            <p className="text  d-flex gap-2 justify-content-around">
              <p className="text-decoration-line-throug text-secondary ">
                $549
              </p>

              <p className="text-decoration-none text-danger">$400</p>
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
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "23%" }}>
          <img
            src={Img1}
            className="card-img-top img-fluid rounded-2"
            alt="design"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Grey Theme</h5>
            <p className="card-text fw-medium">Living Room</p>
            <p className="text  d-flex gap-2 justify-content-around">
              <p className="text-decoration-line-throug text-secondary ">
                $549
              </p>

              <p className="text-decoration-none text-danger">$400</p>
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
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "23%" }}>
          <img
            src={Img1}
            className="card-img-top img-fluid rounded-2"
            alt="design"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Grey Theme</h5>
            <p className="card-text fw-medium">Living Room</p>
            <p className="text  d-flex gap-2 justify-content-around">
              <p className="text-decoration-line-throug text-secondary ">
                $549
              </p>

              <p className="text-decoration-none text-danger">$400</p>
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
            </p>
          </div>
        </div>
        {MyDesigns.map((design) => (
          <div class="card" style={{ width: "23%" }}>
            <img
              src={Img1}
              className="card-img-top img-fluid rounded-2"
              alt="design"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{design.name}</h5>
              <p className="card-text fw-medium">{design.description}</p>
              <p className="text  d-flex gap-2 justify-content-around">
                <p className="text-decoration-line-throug text-secondary ">
                  $549
                </p>

                <p className="text-decoration-none text-danger">$400</p>
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
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3">
        <div className="container">
          <div className="row">
            <div className="d-flex col text-center justify-content-center align-items-center ">
              <PageNumb />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignerMyDesigns;
