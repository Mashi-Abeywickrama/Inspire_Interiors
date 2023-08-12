import "./../styles/footer.css";

import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";

import Logo from './../assets/img/logo.svg';

import * as Icon from "react-bootstrap-icons";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="d-flex container footer-flex justify-content-evenly gap-5">
          <div className="footer-asst mt-4">
            <img
              src={Logo}
              alt="inspire interiors"
            />
            <div className="d-flex flex-column">
              <p className="para text-white m-2 jost-text">
                It is a long established fact that a reader will be distracted
                lookings.
              </p>
              <div className="icons d-flex flex-row gap-5 py-4 px-5">
                <Icon.Facebook color="#FFBA42" />
                <Icon.Twitter color="#FFBA42" />
                <Icon.Linkedin color="#FFBA42" />
                <Icon.Instagram color="#FFBA42" />
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row align-content-center justify-content-center gap-5 ">
            <div className="d-flex flex-column mt-4">
              <p className="text-warning lower-banner-title">Pages</p>
              <p className="text-white jost-text">About Us</p>
              <p className="text-white jost-text">Our Projects</p>
              <p className="text-white jost-text">Our Team</p>
              <p className="text-white jost-text">Contact Us</p>
              <p className=" text-white jost-text">Services</p>
            </div>

            <div className="d-flex flex-column mt-4">
              <p className="text-warning lower-banner-title">Services</p>
              <p className="text-white jost-text">Kitchen</p>
              <p className="text-white jost-text">Living Area</p>
              <p className="text-white jost-text">Bathroom</p>
              <p className="text-white jost-text">Dining Hall</p>
              <p className="text-white jost-text">Bedroom</p>
            </div>

            <div className="d-flex flex-column mt-4">
              <p className="text-warning lower-banner-title">Contact</p>
              <p className="text-white jost-text">55 East Birchwood Ave. Brooklyn, New York 11201</p>
              <p className="text-white jost-text">contact@interno.com</p>
              <p className="text-white jost-text">(123) 456 - 7890</p>
            </div>
          </div>
        </div>
        <hr className="divider" />
        <div className="text-white text-center footer-para jost-text">
          Copyright © Group 46
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
