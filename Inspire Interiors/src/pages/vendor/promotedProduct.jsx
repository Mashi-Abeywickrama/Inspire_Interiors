import React from 'react';
import "../../styles/vendor/promotedProduct.css";

import Arpico from "../../assets/img/vendor/arpico.png";
import BlackSofa from "../../assets/img/vendor/blacksofa.png";
import YellowSofa from "../../assets/img/vendor/yellowsofa.png";
import TableSet from "../../assets/img/vendor/tableset.png";
import WhiteSofa from "../../assets/img/vendor/whitesofa.png";

import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const PromotedProduct = () => {
    return (
        <>
            <div className='product-container rounded-3 mb-4'>
                <div className='col-lg-12 bg-white rounded-3 shadow py-3 px-4'>
                    <div className="d-flex flex-column flex-lg-row flex-md-row gap-4 justify-content-between">
                        <div className='d-flex flex-row gap-3'>
                            <Link to="/vendor/promotion/mynetwork"><p className="text-dark fs-5 fw-bold Cabin-text text-dark">Promotion</p></Link>
                            <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                            <Link to="/vendor/promotion/mynetwork"><p className="fs-5 fw-bold Cabin-text text-dark">My network</p></Link>
                            <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                            <Link to="/vendor/promotion/promotionrequest"><p className="fs-5 fw-bold Cabin-text text-dark">Victor Avocado</p></Link>
                            <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                            <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Projects</p>
                        </div>
                        <div className='form-group '>
                            <input type="text" className="form-control search-form" id="search" placeholder="Search"></input>
                        </div>
                    </div>
                    <div className='d-flex flex-column gap-3'>
                        <div className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-3'>
                            <div class="col">
                                <div class="card p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                    <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-semibold Cabin-text" style={{ color: "#969696"}}>SOFA</p>
                                                <p class="card-title fw-bold fs-6 m-0 Cabin-text">Landskrona</p>
                                                <p className="card-text m-0 fs-6 fw-bolder Cabin-text">$499</p>
                                            </div>
                                            <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                    <img className="img-fluid" src={YellowSofa} class="card-img-top" alt="yellowsofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-semibold Cabin-text" style={{ color: "#969696"}}>CHAIR</p>
                                                <p class="card-title fw-bold fs-6 m-0 Cabin-text">Strandmon</p>
                                                <p className="card-text m-0 fw-bolder fs-6 Cabin-text">$499</p>
                                            </div>
                                            <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                    <img className="img-fluid" src={TableSet} class="card-img-top" alt="tableset" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-semibold Cabin-text" style={{ color: "#969696"}}>TABLE</p>
                                                <p class="card-title fw-bold fs-6 m-0 Cabin-text">Odger</p>
                                                <p className="card-text m-0 fw-bolder fs-6 Cabin-text">$499</p>
                                            </div>
                                            <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                    <img className="img-fluid" src={WhiteSofa} class="card-img-top" alt="whitesofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-semibold Cabin-text" style={{ color: "#969696"}}>SOFA</p>
                                                <p class="card-title fw-bold fs-6 m-0 Cabin-text">Soderhamn</p>
                                                <p className="card-text fs-6 fw-bolder m-0 Cabin-text">$499</p>
                                            </div>
                                            <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-3'>
                            <div class="col">
                                <div class="card p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                    <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-semibold Cabin-text" style={{ color: "#969696"}}>SOFA</p>
                                                <p class="card-title fw-bold fs-6 m-0 Cabin-text">Landskrona</p>
                                                <p className="card-text m-0 fs-6 fw-bolder Cabin-text">$499</p>
                                            </div>
                                            <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                    <img className="img-fluid" src={YellowSofa} class="card-img-top" alt="yellowsofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-semibold Cabin-text" style={{ color: "#969696"}}>CHAIR</p>
                                                <p class="card-title fs-6 fw-bold m-0 Cabin-text">Strandmon</p>
                                                <p className="card-text m-0 fs-6 fw-bolder Cabin-text">$499</p>
                                            </div>
                                            <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                    <img className="img-fluid" src={TableSet} class="card-img-top" alt="tableset" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fw-semibold fs-6 Cabin-text" style={{ color: "#969696"}}>TABLE</p>
                                                <p class="card-title fw-bold fs-6 m-0 Cabin-text">Odger</p>
                                                <p className="card-text m-0 fs-6 fw-bolder Cabin-text">$499</p>
                                            </div>
                                            <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                    <img className="img-fluid" src={WhiteSofa} class="card-img-top" alt="whitesofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-semibold Cabin-text" style={{ color: "#969696"}}>SOFA</p>
                                                <p class="card-title fs-6 fw-bold m-0 Cabin-text">Soderhamn</p>
                                                <p className="card-text fs-6 fw-bolder m-0 Cabin-text">$499</p>
                                            </div>
                                            <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default PromotedProduct;