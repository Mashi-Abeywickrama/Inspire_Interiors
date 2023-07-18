import React from "react";

import "./../../styles/vendor/viewOrder.css";
import * as Icon from "react-bootstrap-icons";
import Chair from './../../assets/img/vendor/chair.png';

const ViewOrder = () => {
 return(
    <>
        <div className="background">
            <div className="container-md bg-white rounded-3">
                <div className="d-flex flex-row gap-4">
                    <p className="text-dark fs-3 fw-bold">Orders</p>
                    <Icon.ChevronRight color="#A2A3B1" size={25}className="mt-2" />
                    <p className="fs-3 fw-bold " style={{color:"#A2A3B1"}}>Delayed</p>
                    <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                    <p className="fs-3 fw-bold" style={{color:"#A2A3B1"}}>25786</p>
                </div>
                    
                <div className="d-flex flex-row flex-md-row flex-sm-column justify-content-between">
                    <p className="text-dark fs-5 fw-bold text-decoration-underline">Order Details - #76565722</p>
                    <div className="badge fw-semibold rounded-3" style={{height:"1.5rem", background:"#F6E3AC", color:"#6B4605"}}><Icon.CircleFill size={7} className="mx-1"/>Delayed</div>
                </div>
                <div className="divider"/>

                <div className="d-flex flex-row">
                    <div className="d-flex flex-column">
                        <div className="col-lg-12 border rounded-3 my-2">
                            <p className="fs-4 fw-bold mx-3 my-2">Product Details</p>
                            <div className="d-flex flex-row flex-md-row flex-sm-column flex-xs-column justify-content-start">
                                <img src={Chair}/>
                                <div className="d-flex flex-column">
                                    <p className="fs-3 fw-semibold">Customizable Armchair</p>
                                    <div className="d-flex flex-row">
                                        <p className="fs-4 fw-semibold" style={{color:"#A2A3B1"}}>Type:</p>
                                        <p className="mx-3 fs-4 fw-semibold">Chair</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <p className="fs-4 fw-semibold" style={{color:"#A2A3B1"}}>Color:</p>
                                        <Icon.CircleFill size={30} color="#C1BDB3" className="mx-3 mt-1" />
                                    </div>
                                    <div className="d-flex flex-row">
                                        <p className="fs-4 fw-semibold" style={{color:"#A2A3B1"}}>Quantity:</p>
                                        <p className="mx-3 fs-4 fw-semibold">2 it is not enough for ur back</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <p className="fs-4 fw-semibold" style={{color:"#A2A3B1"}}>Price:</p>
                                        <p className="mx-3 fs-4 fw-semibold">Rs 4000 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 border rounded-3 my-2">
                            <p className="fs-4 fw-bold mx-3 my-2">Order Status</p>
                                <div className="d-flex flex-column">
                                    <div className="d-flex flex-row justify-content-between">
                                        <div className="d-flex flex-row">
                                            <p className="fs-5 fw-semibold mx-5">Vender Confirmation:</p>
                                            <p className="fs-5 fw-normal">Confirmed By Damro</p>
                                        </div>
                                        <p className="fs-5 fw-semibold mx-4">01 Feb, 2023</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="fs-5 fw-semibold mx-5">Package Preparation:</p>
                                        <div className="badge fw-semibold rounded-3 mx-5" style={{height:"1.5rem", background:"#BFE5FD", color:"#000000"}}><Icon.CircleFill size={7} className="mx-1"/>Delayed</div>
                                    </div>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="fs-5 fw-semibold mx-5">Shipping:</p>
                                        <div className="badge fw-semibold rounded-3 mx-5" style={{height:"1.5rem", background:"#E6E6E6", color:"#979797"}}><Icon.CircleFill size={7} className="mx-1"/>Delayed</div>
                                    </div>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="fs-5 fw-semibold mx-5">Delivery:</p>
                                        <div className="badge fw-semibold rounded-3 mx-5" style={{height:"1.5rem", background:"#E6E6E6", color:"#979797"}}><Icon.CircleFill size={7} className="mx-1"/>Delayed</div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 border mx-5 my-2">
                        <p className="fs-4 fw-bold mx-3 my-2">Order Summary</p>
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row flex-md-row flex-sm-column justify-content-between">
                                <p className="fs-5 fw-normal mx-3 my-2">Product</p>
                                <p className="fs-5 fw-normal mx-3 my-2">Customizable Armchair</p>
                            </div>
                            <div className="d-flex flex-row flex-md-row flex-sm-column justify-content-between">
                                <p className="fs-5 fw-normal mx-3 my-2">Price</p>
                                <p className="fs-5 fw-normal mx-3 my-2">Rs 4000</p>
                            </div>
                            <div className="d-flex flex-row flex-md-row flex-sm-column justify-content-between">
                                <p className="fs-5 fw-normal mx-3 my-2">Quantity</p>
                                <p className="fs-5 fw-normal mx-3 my-2">2</p>
                            </div>
                            <div className="d-flex flex-row flex-md-row flex-sm-column justify-content-between">
                                <p className="fs-5 fw-normal mx-3 my-2">Shipping</p>
                                <p className="fs-5 fw-normal mx-3 my-2">Rs 1000</p>
                            </div>
                            <div col-lg-2 className="divider"/>
                            <div className="d-flex flex-row flex-md-row flex-sm-column justify-content-between">
                                <p className="fs-5 fw-normal mx-3 my-2">TOTAL</p>
                                <p className="fs-5 fw-normal mx-3 my-2">Rs 8000</p>
                            </div>
                            <div className="d-flex flex-row flex-md-row flex-sm-column justify-content-between">
                                <p className="fs-5 fw-normal mx-3 my-2">Estimated Delivery by</p>
                                <p className="fs-5 fw-normal mx-3 my-2">01 Feb, 2023</p>
                            </div>
                            <div col-lg-2 className="divider"/>
                            <p className="fs-5 fw-bold mx-3 my-1">Delivery Address</p>
                            <div className="d-flex flex-row flex-md-row flex-sm-column justify-content-between">
                                <p className="fs-5 fw-normal mx-3 my-2">House No and Lane</p>
                                <p className="fs-5 fw-normal mx-3 my-2">Philosophy Home, Legends' Lane</p>
                            </div>
                            <div className="d-flex flex-row flex-md-row flex-sm-column justify-content-between">
                                <p className="fs-5 fw-normal mx-3 my-2">Town/City</p>
                                <p className="fs-5 fw-normal mx-3 my-2">Philosophy Town</p>
                            </div>
                            <div className="d-flex flex-row flex-md-row flex-sm-column justify-content-between">
                                <p className="fs-5 fw-normal mx-3 my-2">District</p>
                                <p className="fs-5 fw-normal mx-3 my-2">Philosophy North</p>
                            </div>
                            <div className="d-flex flex-row flex-md-row flex-sm-column justify-content-between">
                                <p className="fs-5 fw-normal mx-3 my-2">Postal Code</p>
                                <p className="fs-5 fw-normal mx-3 my-2">82100</p>
                            </div>
                            <div className="d-flex flex-row flex-md-row flex-sm-column justify-content-between">
                                <p className="fs-5 fw-normal mx-3 my-2">Country</p>
                                <p className="fs-5 fw-normal mx-3 my-2">SriLanka</p>
                            </div>
                        </div>
                    </div>
                </div>
                
    
            </div>
        </div>
    </>

 )   
}

export default ViewOrder;