import React from "react";

import './../../styles/vendor/promotion.css';
import * as Icon from "react-bootstrap-icons";
import VendorSidebar from "./sidebar";
import Navigationbar from "../../components/navigationbar";
import Arpico from "../../assets/img/vendor/arpico.png";

const Promotion = () => {
    return(
        <>
            <div className="d-flex flex-column col-12 gap-3" style={{backgroundColor:"#F1F1F1" , height:"100%"}}>
                <Navigationbar/>
                <div className="w-auto">
                    <div className="d-flex gap-3 w-100">
                        <VendorSidebar/>
                        <div className="promotion-container rounded-3 mb-4">
                            <div className=" col-12 d-flex flex-column">
                                <div className=" col-12 d-flex flex-column flex-lg-row flex-md-row">
                                    <div className="col-lg-8 bg-white rounded-3 my-2 shadow">
                                        <div className="d-flex flex-row gap-3">
                                            <p style={{fontSize:"18px", fontWeight:"600"}}>Partnered Designers</p>
                                            <p style={{color:"#035C94", fontWeight:"400"}}>See all<Icon.ArrowRight color="#035C94"/></p>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-3 g-4">
                                            <div class="col">
                                                <div class="card p-2 h-100 mb-2 rounded-3">
                                                    <img className="img-fluid" src={Arpico} class="card-img-top" alt="arpico" />
                                                    <div class="card-body m-0 p-0">
                                                        <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-evenly align-items-center gap-3">
                                                            <div className="d-flex flex-column">
                                                                <p className="card-text m-0" style={{color:"#969696", fontSize:"12px", fontWeight:"600"}}>Furniture store</p>
                                                                <p class="card-title fw-semibold m-0" style={{fontSize:"14px", fontWeight:"400"}}>Arpico Furniture</p>
                                                            </div>
                                                            <Icon.Bag className="align-items-center" size={30} style={{color:"white", backgroundColor:"#035C94", padding:'8px', borderRadius:'5px'}}/> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card p-2 h-100 mb-2 rounded-3">
                                                    <img className="img-fluid" src={Arpico} class="card-img-top" alt="arpico" />
                                                    <div class="card-body m-0 p-0">
                                                        <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-evenly align-items-center gap-3">
                                                            <div className="d-flex flex-column">
                                                                <p className="card-text m-0" style={{color:"#969696", fontSize:"12px", fontWeight:"600"}}>Furniture store</p>
                                                                <p class="card-title fw-semibold m-0" style={{fontSize:"14px", fontWeight:"400"}}>Arpico Furniture</p>
                                                            </div>
                                                            <Icon.Bag className=" align-items-center" size={30} style={{color:"white", backgroundColor:"#035C94", padding:'8px', borderRadius:'5px'}}/> 
                                                        </div>    
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card p-2 h-100 mb-2 rounded-3">
                                                    <img className="img-fluid" src={Arpico} class="card-img-top" alt="arpico" />
                                                    <div class="card-body m-0 p-0">
                                                        <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-evenly align-items-center gap-3">
                                                            <div className="d-flex flex-column">
                                                                <p className="card-text m-0" style={{color:"#969696", fontSize:"12px", fontWeight:"600"}}>Furniture store</p>
                                                                <p class="card-title fw-semibold m-0" style={{fontSize:"14px", fontWeight:"400"}}>Arpico Furniture</p>
                                                            </div>
                                                            <Icon.Bag className=" align-items-center" size={30} style={{color:"white", backgroundColor:"#035C94", padding:'8px', borderRadius:'5px'}}/> 
                                                        </div>    
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                    </div>
                                    <div className="col-lg-3 container-fluid border bg-white rounded-3 my-2 shadow">

                                    </div>
                                </div>
                                <div className="col-lg-11 container-fluid border bg-white rounded-3 my-2 shadow">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Promotion;