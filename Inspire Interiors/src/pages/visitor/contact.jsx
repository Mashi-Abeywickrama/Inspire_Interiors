import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

import * as Icon from "react-bootstrap-icons";

import "./../../styles/contact.css";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="d-flex contact-pic justify-content-center">
        <div className="d-flex col-lg-3 flex-column bg-white dialog-div rounded-top-4">
          <p
            className="dialog-1 mt-4"
            style={{ fontSize: "2rem", lineHeight: "2.5rem" }}
          >
            Contact Us
          </p>
          <p className="text-primary jost-text" style={{ lineHeight: "0rem" }}>
            Home / Contact
          </p>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center my-5">
        <p
          className="text-primary justify-content-center align-content-center mt-4"
          style={{ fontSize: "2rem" }}
        >
          We love meeting new people and helping them.
        </p>
        <div className="d-flex gap-5 justify-content-evenly main-div">
          <div className="container-fluid col-lg-4 container-div rounded-4">
            <div className="d-flex flex-column justify-content-center align-content-center">
              <p className="py-2 my-2 jost-text"><Icon.Envelope color='orange' size={20} className="mx-1 bg-white p-1 rounded-circle"/>info@yourdomain.com</p>
              <p className="py-2 jost-text"><Icon.Telephone color='orange' size={20} className="mx-1 bg-white p-1 rounded-circle"/>+1 (378) 400-1234</p>
              <p className="py-2 jost-text"><Icon.GlobeAmericas color='orange' size={20} className="mx-1 bg-white rounded-circle p-1 rounded-circle"/>www.yourdomain.com</p>

              <div className="d-flex flex-row gap-4 px-5">
                <Icon.Facebook size={20}/>
                <Icon.Twitter size={20}/>
                <Icon.Linkedin size={20}/>
                <Icon.Instagram size={20}/>
              </div>
            </div>
          </div>
          <form>
            <div className="form-group mx-4 form-div">
              <div className="d-flex flex-column justify-content-center ">
                <div className="d-flex flex-row gap-4">
                  <input
                    type="text"
                    className="form-control input-form name-form jost-text"
                    id="name"
                    placeholder="Name"
                  ></input>
                  <input
                    type="email"
                    className="form-control input-form email-form jost-text"
                    id="email"
                    placeholder="Email"
                  ></input>
                </div>
                <div className="d-flex flex-row gap-4">
                  <input
                    type="text"
                    className="form-control input-form subject-form jost-text"
                    id="subject"
                    placeholder="Subject"
                  ></input>
                  <input
                    type="text"
                    className="form-control input-form phone-form jost-text"
                    id="phone"
                    placeholder="Phone"
                  ></input>
                </div>
                <p className="mt-4 jost-text">Hello I am Intersted in...</p>
                <input
                  type="text"
                  className="form-control input-form empty-form"
                ></input>
                <div className=" d-flex justify-content-end align-content-end">
                  <button className=" col-lg-4 btn mt-4 send-btn jost-text">
                    Send Now
                    <Icon.ArrowRight
                      color="orange"
                      size={15}
                      className="align-center"
                    />
                  </button>
                </div>
              </div>
            </div>
          </form>
          
        </div>
         <iframe className="map-custom col-md-6 col-lg-6 col-sm-11 col-xs-11" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29899.813812995286!2d79.82896047335797!3d6.896915573845097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sUniversity%20of%20Colombo%20School%20of%20Computing%20(UCSC)!5e0!3m2!1sen!2slk!4v1689599664706!5m2!1sen!2slk"></iframe>

       
        
      </div>

     
      <Footer/>
    </>
  );
};

export default Contact;
