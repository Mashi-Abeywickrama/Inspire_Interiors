import React from "react";
import Header from "../../components/header";

import "./../../styles/error.css";
import * as Icon from "react-bootstrap-icons";
import Furniture from "./../../assets/img/error/furniture.png";
import HeaderT from "../../components/HeaderT";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <HeaderT />
      <div className="d-flex flex-row error-flex">
        <div className="d-flex flex-column justify-content-center align-content-center px-5 py-4">
          <p className="text-warning" style={{ fontSize: "10rem" }}>
            404
          </p>
          <p className="pb-2" style={{ fontSize: "2rem" }}>
            We are sorry, but the page you requested was not found
          </p>
          <button className="btn col-lg-4 back-btn mt-2">
            <NavLink to="/" className="text-light">
              Back to Home{" "}
              <Icon.ArrowRight
                size={15}
                color="orange"
                className="align-center"
              />
            </NavLink>
          </button>
        </div>
        <img className="img-fluid col-lg-5" src={Furniture} />
      </div>
    </>
  );
};

export default Error;
