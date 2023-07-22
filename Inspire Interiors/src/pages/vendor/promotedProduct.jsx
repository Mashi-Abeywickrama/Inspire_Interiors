import React from 'react';
import "../../styles/vendor/promotedProduct.css";

import * as Icon from 'react-bootstrap-icons';
import VendorSidebar from "./sidebar";
import Navigationbar from "../../components/navigationbar";

const PromotedProduct = () => {
    return (
        <>
            <div className='d-flex flex-column col-12 gap-4' style={{ backgroundColor: "#F1F1F1", height: "100%" }}>
                <Navigationbar />
                <div className='w-auto'>
                    <div className='d-flex gap-3 w-100'>
                        <VendorSidebar />
                        <div className='product-container rounded-3 mb-4'>
                            <div className='col-lg-12 bg-white rounded-3 shadow py-3 px-4'>
                                <div className="d-flex flex-row gap-4">
                                        <p className="text-dark fs-3 fw-bold Cabin-text">Promotion</p>
                                        <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                                        <p className="fs-3 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>My network</p>
                                        <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                                        <p className="fs-3 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Victor Avocado</p>
                                        <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                                        <p className="fs-3 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Projects</p>
                                        
                                    </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>      
        </>
    )
}

export default PromotedProduct;