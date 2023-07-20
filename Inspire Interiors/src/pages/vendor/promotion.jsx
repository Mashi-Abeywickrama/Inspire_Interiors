import React from "react";

import './../../styles/vendor/promotion.css';
import * as Icon from "react-bootstrap-icons";
import VendorSidebar from "./sidebar";
import Navigationbar from "../../components/navigationbar";

const Promotion = () => {
    return(
        <>
            <div className="d-flex flex-column  gap-3">
                <Navigationbar/>
                <div className="d-flex gap-4 ">
                    <VendorSidebar/>

                    <div className="background w-auto">
                        <div className="container-fluid bg-white rounded-3">

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Promotion;