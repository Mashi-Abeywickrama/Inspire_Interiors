import React from "react";

import "./../../styles/vendor/addStock.css";
import * as Icon from "react-bootstrap-icons";
import {Link} from 'react-router-dom';

const AddStock = () => {
    return (
        <>
            <div className="stock-container p-4 bg-white rounded-3 mb-4 me-3">
                <div className="d-flex flex-row gap-4">
                    <Link to="/vendor/inventory"><p className="fs-5 fw-bold Cabin-text text-dark">Inventory</p></Link>
                    <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                    <Link to="/vendor/inventory/viewstock"><p className="fs-5 fw-bold Cabin-text text-dark">Stock</p></Link>
                    <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                    <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Add Stock</p>
                </div>
                <div className=" d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between">
                        <p className="text-dark fs-6 fw-bold text-decoration-underline Cabin-text" style={{ color: "#035C94" }}>Add Stock Details</p>
                    </div>
                    <div className=" divider" />
                </div>
                <div className="d-flex flex-column">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label fs-6 Cabin-text">Product Name:</label>
                        <input type="text" className="form-control w-25 Cabin-text" id="exampleFormControlInput1" placeholder="Enter product name here" value="" style={{ backgroundColor: "#F2FAFF" }} />
                    </div>
                    <div className="d-flex flex-column flex-lg-row flex-sm-row flex-md-row justify-content-between">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label fs-6 Cabin-text">Product Type:</label>
                            <input type="text" className="form-control Cabin-text" id="exampleFormControlInput1" placeholder="Enter product type here" value="" style={{ backgroundColor: "#F2FAFF" }} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label fs-6 Cabin-text">Quantity:</label>
                            <input className="form-control Cabin-text" type="number" id="exampleFormControlInput1" placeholder="Enter quantity here" value="" style={{ backgroundColor: "#F2FAFF" }} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label fs-6 Cabin-text">Entry Price:</label>
                            <input className="form-control Cabin-text" type="number" id="exampleFormControlInput1" placeholder="Enter price here" value="" style={{ backgroundColor: "#F2FAFF" }} />
                        </div>
                    </div>
                    <p className="fs-6 fw-semibold Cabin-text mt-3">Variation</p>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label fs-6 Cabin-text">Color</label>
                        <input type="text" className="form-control Cabin-text" id="exampleFormControlInput1" placeholder="Enter product color here" style={{ backgroundColor: "#F2FAFF" }} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label fs-6 Cabin-text">Material</label>
                        <input type="text" className="form-control Cabin-text" id="exampleFormControlInput1" placeholder="Enter product material here" style={{ backgroundColor: "#F2FAFF" }} />
                    </div>
                    <div class="mb-3">
                        <label for="formFile" className="form-label fs-6 Cabin-text">Product Image</label>
                        <input className="form-control w-25 Cabin-text" type="file" id="formFile" />
                    </div>
                </div>
                <div className="divider mt-5" />
                <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row justify-content-between">
                    <Link to="/vendor/inventory/viewstock"><button className="my-2 mx-5 Cabin-text " style={{ color: "#FF5C60", background: "#FFFFFF", borderRadius: "8px", border: "1px solid #FF5C60" }}>Cancel</button></Link>
                    <button className="my-2 mx-5 Cabin-text" style={{ color: "#FFFFFF", background: "#035C94", borderRadius: "8px" }}>Add Stock</button>
                </div>
            </div>
        </>
    );
}

export default AddStock;