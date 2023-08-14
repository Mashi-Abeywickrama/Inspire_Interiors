import React from "react";

import "./../../styles/customerSupport/viewRefund.css";
import * as Icon from "react-bootstrap-icons";

const ViewRefund = () => {
    return (
        <>
            <div className="refund-container p-4 bg-white rounded-3 mb-4 me-3">
                <div className="col-12 d-flex flex-row gap-4">
                    <p className="text-dark fs-5 fw-bold Cabin-text">Refund Requests</p>
                    <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                    <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>View</p>
                    <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                    <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>2564</p>
                </div>
                <div className="col-12 d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between">
                        <p className="text-dark fs-6 fw-bold text-decoration-underline Cabin-text" style={{ color: "#035C94" }}>Request Status</p>
                        <div className="badge fw-semibold rounded-3 Cabin-text mx-5" style={{ height: "1.5rem", background: "#F6E3AC", color: "#6B4605" }}><Icon.CircleFill size={7} className="mx-1" />Delayed</div>
                    </div>
                    <div className=" divider" />
                </div>
                <div className="d-flex flex-column">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label Cabin-text">Reference No:</label>
                        <input type="number" className="form-control w-25 Cabin-text" id="exampleFormControlInput1" placeholder="14598" value="14598" style={{ backgroundColor: "#F2FAFF" }} disabled/>
                    </div>
                    <div className="d-flex flex-column flex-lg-row flex-sm-row flex-md-row justify-content-between">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label Cabin-text">Customer Name:</label>
                            <input type="text" className="form-control Cabin-text" id="exampleFormControlInput1" placeholder="Kumar Sanga" value="Kumar Sanga" style={{ backgroundColor: "#F2FAFF" }} disabled/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label Cabin-text">Requested Date:</label>
                            <input className="form-control Cabin-text" id="exampleFormControlInput1" value="2023/07/25" style={{ backgroundColor: "#F2FAFF" }} disabled/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label Cabin-text">Date of Completion/ Cancelation:</label>
                            <input className="form-control Cabin-text" id="exampleFormControlInput1" value="2023/08/25" style={{ backgroundColor: "#F2FAFF" }} disabled/>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row flex-sm-row flex-md-row justify-content-between">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label Cabin-text">Vendor Code:</label>
                            <input type="text" className="form-control Cabin-text" id="exampleFormControlInput1" placeholder="25998" value="25998" style={{ backgroundColor: "#F2FAFF" }} disabled/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label Cabin-text">Total Amount:</label>
                            <input type="number" className="form-control Cabin-text" id="exampleFormControlInput1" placeholder="30000" value="30000" style={{ backgroundColor: "#F2FAFF" }} disabled/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label Cabin-text">Order Date:</label>
                            <input className="form-control Cabin-text" id="exampleFormControlInput1" value="2023/07/30" style={{ backgroundColor: "#F2FAFF" }} disabled/>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label Cabin-text">Remarks</label>
                        <input type="text" className="form-control Cabin-text" id="exampleFormControlInput1" placeholder="Enter your remarks here" style={{ backgroundColor: "#F2FAFF" }} disabled/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label Cabin-text">Additional Remarks</label>
                        <input type="text" className="form-control Cabin-text" id="exampleFormControlInput1" placeholder="Enter your additional remarks here" style={{ backgroundColor: "#F2FAFF" }} disabled/>
                    </div>
                </div>
                <div className="divider mt-5" />
                <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row justify-content-between">
                    <button className="my-2 mx-5 Cabin-text " style={{ color: "#FF5C60", background: "#FFFFFF", borderRadius: "8px", border: "1px solid #FF5C60" }}>Mark as Canceled</button>
                    <button className="my-2 mx-5 Cabin-text" style={{ color: "#FFFFFF", background: "#035C94", borderRadius: "8px" }}>Complete Refund</button>
                </div>
            </div>
        </>
    );
}

export default ViewRefund;