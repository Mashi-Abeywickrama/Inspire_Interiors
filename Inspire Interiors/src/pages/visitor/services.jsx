import React from "react";
import Header from "./../../components/header";
import Footer from "./../../components/footer";

import * as Icon from "react-bootstrap-icons";
import Showing from './../../assets/img/services/showing.png';
import Couple from './../../assets/img/services/couple.png';
import Kitchen from './../../assets/img/services/kitchen.png';
import Accessories from './../../assets/img/services/accessories.png';
import Icon1 from './../../assets/img/services/Icon-1.png';
import Icon2 from './../../assets/img/services/Icon-2.png';
import Icon3 from './../../assets/img/services/Icon-3.png';
import Icon4 from './../../assets/img/services/Icon-4.png';


import "./../../styles/services.css";

const Services = () => {
  return (
    <>
      <Header />
      <div className="d-flex service-pic justify-content-center">
        <div className="d-flex col-lg-3 flex-column bg-white dialog-div rounded-top-4">
          <p
            className="lower-banner-title mt-4"
            style={{ fontSize: "2rem", lineHeight: "2.5rem" }}
          >
            Services
          </p>
          <p className="text-primary jost-text" style={{ lineHeight: "0rem" }}>
            Home / Services
          </p>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-center lower-banner gap-5">
        <div className="box col-lg-2 d-flex align-items-center flex-column">
          <p className="lower-banner-title text-center">Project Plan</p>
          <p className="lower-banner-sub-title text-center jost-text">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <p className="lower-banner-link jost-text">
            Read More
            <Icon.ArrowRight
              color="orange"
              size={15}
              className="align-center"
            />
          </p>
        </div>

        <div className="box col-lg-2 d-flex align-items-center flex-column">
          <p className="lower-banner-title text-center">Interior Work</p>
          <p className="lower-banner-sub-title text-center jost-text">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <p className="lower-banner-link jost-text">
            Read More
            <Icon.ArrowRight
              color="orange"
              size={15}
              className="align-center"
            />
          </p>
        </div>

        <div className="box col-lg-2 d-flex align-items-center flex-column">
          <p className="lower-banner-title text-center">Realization</p>
          <p className="lower-banner-sub-title text-center jost-text">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <p className="lower-banner-link jost-text">
            Read More
            <Icon.ArrowRight
              color="orange"
              size={15}
              className="align-center"
            />
          </p>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-center lower-banner gap-5">
        <div className="box col-lg-2 d-flex align-items-center flex-column">
          <p className="lower-banner-title text-center">2d / 3d Art Work</p>
          <p className="lower-banner-sub-title text-center jost-text">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <p className="lower-banner-link jost-text">
            Read More
            <Icon.ArrowRight
              color="orange"
              size={15}
              className="align-center"
            />
          </p>
        </div>

        <div className="box col-lg-2 d-flex align-items-center flex-column">
          <p className="lower-banner-title text-center">Interior Work</p>
          <p className="lower-banner-sub-title text-center jost-text">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <p className="lower-banner-link jost-text">
            Read More
            <Icon.ArrowRight
              color="orange"
              size={15}
              className="align-center"
            />
          </p>
        </div>

        <div className="box col-lg-2 d-flex align-items-center flex-column">
          <p className="lower-banner-title text-center">Decoration Work</p>
          <p className="lower-banner-sub-title text-center jost-text">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <p className="lower-banner-link jost-text">
            Read More
            <Icon.ArrowRight
              color="orange"
              size={15}
              className="align-center"
            />
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-center m-6">
        <div className="d-flex flex-column main-box col-lg-8 rounded-5">
          <div className="d-flex flex-column first-div">
            <p
              style={{ fontSize: "2rem"}}
              className="text-primary text-center m-2 dialog-2 heading"
            >
              How We Work
            </p>
            <p className="para-1 jost-text text-center">
              It is a long established fact will be distracted.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="d-flex flex-row container-fluid gap-4 service-flex">
            <img
              className="img-fluid col-lg-5"
              style={{
                marginTop: "4rem",
                width: "50%",
                maxWidth: "30rem",
                height: "30rem",
              }}
              src={Showing}
            />
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-evenly">
                <img
                  className="icon img-fluid"
                  style={{ height: "4rem", marginTop: "8rem" }}
                  src={Icon1}
                />
                <p className="text-warning num lower-banner-title">01</p>
              </div>

              <div className="d-flex flex-column">
                <p className="lower-banner-title">Concept & Details</p>
                <p className="para">
                  It is a long established fact will be distracted. Lorem Ipsum
                  is simply dummy from text of the and typesetting indufstry.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row-reverse container-fluid gap-4 service-flex">
            <img
              className="img-fluid col-lg-5"
              style={{
                marginTop: "4rem",
                width: "50%",
                maxWidth: "30rem",
                height: "30rem",
              }}
              src={Couple}
            />
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-evenly">
                <img
                  className="img-fluid"
                  style={{ height: "4rem", marginTop: "8rem" }}
                  src={Icon2}
                />
                <p className="num lower-banner-title">02</p>
              </div>

              <div className="d-flex flex-column">
                <p className="lower-banner-title">Idea for Work</p>
                <p className="para">
                  It is a long established fact will be distracted. Lorem Ipsum
                  is simply dummy from text of the and typesetting indufstry.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row container-fluid gap-4 service-flex">
            <img
              className="img-fluid col-lg-5"
              style={{
                marginTop: "4rem",
                width: "50%",
                maxWidth: "30rem",
                height: "30rem",
              }}
              src={Kitchen}
            />
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-evenly">
                <img
                  className="img-fluid"
                  style={{ height: "4rem", marginTop: "8rem" }}
                  src={Icon3}
                />
                <p className="text-warning num lower-banner-title">03</p>
              </div>

              <div className="d-flex flex-column second-div">
                <p className="lower-banner-title">Design</p>
                <p className="para">
                  It is a long established fact will be distracted. Lorem Ipsum
                  is simply dummy from text of the and typesetting indufstry.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row-reverse container-fluid gap-4 service-flex">
            <img
              className="img-fluid col-lg-5"
              style={{
                marginTop: "4rem",
                width: "50%",
                maxWidth: "30rem",
                height: "30rem",
              }}
              src={Accessories}
            />
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-evenly">
                <img
                  className="img-fluid"
                  style={{ height: "4rem", marginTop: "8rem" }}
                  src={Icon4}
                />
                <p className="num lower-banner-title">04</p>
              </div>

              <div className="d-flex flex-column">
                <p className="lower-banner-title">Perfection</p>
                <p className="para">
                  It is a long established fact will be distracted. Lorem Ipsum
                  is simply dummy from text of the and typesetting indufstry.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column container-fluid col-lg-8 rounded-5 justify-content-center dialog-box mb-5">
        <p
          className="text-white mt-5 lower-banner-title"
          style={{ lineHeight: "0.5rem" }}
        >
          Wanna join the interno?
        </p>
        <p className="text-white jost-text" style={{ lineHeight: "2rem" }}>
          It is a long established fact will be distracted.
        </p>
        <button className="btn btn-warning rounded-3 contact-btn mb-5 jost-text">
          Contact With Us
          <Icon.ArrowRight color="black" size={15} className="align-center" />
        </button>
      </div>

      <Footer />
    </>
  );
};

export default Services;
