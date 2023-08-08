import React from "react";

import "./../../styles/customerSupport/viewInquiry.css";
import * as Icon from "react-bootstrap-icons";

const ViewInquiry = () => (
    <>
        <div className="inquiry-container p-4 bg-white rounded-3 mb-4 me-3">
            <div className="col-12 d-flex flex-row gap-4">
                <p className="text-dark fs-3 fw-bold Cabin-text">Inquiries</p>
                <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                <p className="fs-3 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>View</p>
                <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                <p className="fs-3 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>2564</p>
            </div>
            <div className="col-12 d-flex flex-column">
                <div className="d-flex flex-row justify-content-between">
                    <p className="text-dark fs-6 fw-bold text-decoration-underline Cabin-text">Quotation Request</p>
                    <div className="badge fw-semibold rounded-3 Cabin-text mx-5" style={{ height: "1.5rem", background: "#F6E3AC", color: "#6B4605" }}><Icon.CircleFill size={7} className="mx-1" />Delayed</div>
                </div>
                <div className=" divider" />
            </div>
            <div className="d-flex flex-column">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label Cabin-text">Reference No:</label>
                    <input type="number" className="form-control w-25 Cabin-text" id="exampleFormControlInput1" placeholder="Enter a valid number" style={{ backgroundColor: "#F2FAFF" }} />
                </div>
                <div className="d-flex flex-column flex-lg-row flex-sm-row flex-md-row justify-content-between">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label Cabin-text">Customer Name:</label>
                        <input type="text" className="form-control Cabin-text" id="exampleFormControlInput1" placeholder="Enter a valid name" style={{ backgroundColor: "#F2FAFF" }} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label Cabin-text">Requested Date:</label>
                        <input type="date" className="form-control Cabin-text" id="exampleFormControlInput1" style={{ backgroundColor: "#F2FAFF" }} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label Cabin-text">Date of Completion/ Cancelation:</label>
                        <input type="date" className="form-control Cabin-text" id="exampleFormControlInput1" style={{ backgroundColor: "#F2FAFF" }} />
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label Cabin-text">Remarks</label>
                    <input type="text" className="form-control Cabin-text" id="exampleFormControlInput1" placeholder="Enter your remarks here" style={{ backgroundColor: "#F2FAFF" }} />
                </div>

                <div class="mb-3">
                    <label for="formFile" className="form-label Cabin-text">Send Quotation</label>
                    <div className="d-flex flex-row gap-5">
                        <input className="form-control w-25 Cabin-text" type="file" id="formFile"  />
                        <button className="Cabin-text" style={{ color: "#FFFFFF", background: "#035C94", borderRadius: "8px" }}>Send</button>
                    </div>
                </div>

            </div>
            <div className="divider mt-5" />
            <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row justify-content-between">
                <button className="my-2 mx-5 Cabin-text " style={{ color: "#FF5C60", background: "#FFFFFF", borderRadius: "8px", border: "1px solid #FF5C60" }}>Mark as Canceled</button>
                <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-1">
                    <button className="my-2 mx-5 Cabin-text" style={{ color: "#83859C", background: "#FFFFFF", borderRadius: "8px", border: "1px solid #83859C" }}>Discard Changes</button>
                    <button className="my-2 mx-5 Cabin-text" style={{ color: "#FFFFFF", background: "#035C94", borderRadius: "8px" }}>Complete Inquiry</button>
                </div>
            </div>
        </div>
    </>
)

export default ViewInquiry;