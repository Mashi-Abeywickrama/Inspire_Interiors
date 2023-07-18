import React from "react";

import "./../../styles/vendor/viewOrder.css";
import * as Icon from "react-bootstrap-icons";
import Chair from './../../assets/img/vendor/chair.png';
import SidebarDashboard from "../../components/customer/sidebar";
import Navigationbar from "../../components/navigationbar";

const ViewOrder = () => {
 return(
    <>
    <div className="d-flex flex-column  gap-3">
     <Navigationbar/>
    <div className="d-flex gap-4 ">
       
        <SidebarDashboard/>
    
        <div className="background w-auto">
            <div className="container-fluid col-12 bg-white rounded-3">
                <div className="d-flex flex-row gap-4">
                    <p className="text-dark fs-3 fw-bold Cabin-text">Orders</p>
                    <Icon.ChevronRight color="#A2A3B1" size={25}className="mt-2" />
                    <p className="fs-3 fw-bold Cabin-text" style={{color:"#A2A3B1"}}>Delayed</p>
                    <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                    <p className="fs-3 fw-bold Cabin-text" style={{color:"#A2A3B1"}}>25786</p>
                </div>
                    
                <div className="d-flex flex-row flex-md-row  justify-content-between">
                    <p className="text-dark fs-5 fw-bold text-decoration-underline Cabin-text">Order Details - #76565722</p>
                    <div className="badge fw-semibold rounded-3 Cabin-text mx-5" style={{height:"1.5rem", background:"#F6E3AC", color:"#6B4605"}}><Icon.CircleFill size={7} className="mx-1"/>Delayed</div>
                </div>
                <div className="divider"/>

                <div className="d-flex flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between gap-4">
                    <div className="d-flex col-lg-6 col-12 col-6 flex-column">
                        <div className="col-lg-12 border rounded-3 my-2 shadow">
                            <p className="fs-4 fw-bold px-3 py-2 Cabin-text" style={{color:"#023047"}}>Product Details</p>
                            <div className="d-flex flex-row flex-lg-row flex-md-column flex-sm-column flex-column justify-content-start">
                                <img className=" img-fluid" src={Chair}/>
                                <div className="d-flex flex-column">
                                    <p className="fs-3 fw-semibold Cabin-text">Customizable Armchair</p>
                                    <div className="d-flex flex-row">
                                        <p className="fs-4 fw-semibold Cabin-text" style={{color:"#A2A3B1"}}>Type:</p>
                                        <p className="px-3 fs-4 fw-semibold Cabin-text">Chair</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <p className="fs-4 fw-semibold Cabin-text" style={{color:"#A2A3B1"}}>Color:</p>
                                        <Icon.CircleFill size={30} color="#C1BDB3" className="mx-3 mt-1" />
                                    </div>
                                    <div className="d-flex flex-row">
                                        <p className="fs-4 fw-semibold Cabin-text" style={{color:"#A2A3B1"}}>Quantity:</p>
                                        <p className="px-3 fs-4 fw-semibold Cabin-text">2 it is not enough for ur back</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <p className="fs-4 fw-semibold Cabin-text" style={{color:"#A2A3B1"}}>Price:</p>
                                        <p className="px-3 fs-4 fw-semibold Cabin-text">Rs 4000 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 border rounded-3 my-4 shadow">
                            <p className="fs-4 fw-bold px-3 py-2 Cabin-text">Order Status</p>
                                <div className="d-flex flex-column">
                                    <div className="d-flex flex-row justify-content-between">
                                        <div className="d-flex flex-row">
                                            <p className="fs-5 fw-semibold px-5 Cabin-text">Vender Confirmation:</p>
                                            <p className="fs-5 fw-normal Cabin-text">Confirmed By Damro</p>
                                        </div>
                                        <p className="fs-5 fw-semibold px-4 Cabin-text">01 Feb, 2023</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="fs-5 fw-semibold px-5 Cabin-text">Package Preparation:</p>
                                        <div className="badge fw-semibold rounded-3 mx-5 Cabin-text" style={{height:"1.5rem", background:"#BFE5FD", color:"#000000"}}><Icon.CircleFill size={7} className="mx-1"/>Delayed</div>
                                    </div>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="fs-5 fw-semibold px-5 Cabin-text">Shipping:</p>
                                        <div className="badge fw-semibold rounded-3 mx-5 Cabin-text" style={{height:"1.5rem", background:"#E6E6E6", color:"#979797"}}><Icon.CircleFill size={7} className="mx-1"/>Delayed</div>
                                    </div>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="fs-5 fw-semibold px-5 Cabin-text">Delivery:</p>
                                        <div className="badge fw-semibold rounded-3 mx-5 Cabin-text" style={{height:"1.5rem", background:"#E6E6E6", color:"#979797"}}><Icon.CircleFill size={7} className="mx-1"/>Delayed</div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-6  border  my-2 shadow">
                        <p className="fs-4 fw-bold px-3 py-2 Cabin-text">Order Summary</p>
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">Product</p>
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">Customizable Armchair</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">Price</p>
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">Rs 4000</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">Quantity</p>
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">2</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">Shipping</p>
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">Rs 1000</p>
                            </div>
                            <div className="divider"/>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">TOTAL</p>
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">Rs 8000</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">Estimated Delivery by</p>
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">01 Feb, 2023</p>
                            </div>
                            <div className="divider"/>
                            <p className="fs-5 fw-bold px-3 my-1 Cabin-text">Delivery Address</p>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">House No and Lane</p>
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">Philosophy Home, Legends' Lane</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">Town/City</p>
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">Philosophy Town</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">District</p>
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">Philosophy North</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">Postal Code</p>
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">82100</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">Country</p>
                                <p className="fs-5 fw-normal px-3 py-2 Cabin-text">SriLanka</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider my-1"/>
                <button className="my-3" style={{color:"#FF5C60", borderRadius:"8px", border:"1px solid #FF5C60"}}>Cancel Order</button>
    
            </div>
        </div>
        </div>
        </div>
    </>

 )   
}

export default ViewOrder;