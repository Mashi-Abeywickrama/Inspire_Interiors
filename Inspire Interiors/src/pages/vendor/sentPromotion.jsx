import React from "react";

import './../../styles/vendor/sentPromotion.css';
import * as Icon from "react-bootstrap-icons";
import Arpico from "../../assets/img/vendor/arpico.png";
import Sofa from "../../assets/img/vendor/sofa.png"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/customer/myOrders.css';
import '../../styles/customer/table.css';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { MDBDataTableV5, MDBTable } from 'mdbreact';

import Carousel from 'react-bootstrap/Carousel';

const smallTableData = {
    columns: [
        {
          field: 'product',
          sort: 'asc',
          width: 150
        },
        {
          field: 'status',
          sort: 'asc',
          width: 270
        },
    ],
    rows: [
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <img src={Sofa}/>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>Sofa</p>
                        <p className="fs-6 fw-normal">Bed Room</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Accepted</p></div><p className="float-end">23 min ago</p></div>
        },
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <img src={Sofa}/>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>Sofa</p>
                        <p className="fs-6 fw-normal">Bed Room</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Withdraw</p></div><p className="float-end">2 days ago</p></div>
        },
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <img src={Sofa}/>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>Sofa</p>
                        <p className="fs-6 fw-normal">Bed Room</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Accepted</p></div><p className="float-end">23 min ago</p></div>
        },
        {   
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                    <img src={Sofa}/>
                    <div className="d-flex flex-column">
                        <p className='align-items-center fs-6 fw-semibold mt-3 m-0'>Sofa</p>
                        <p className="fs-6 fw-normal">Bed Room</p>
                    </div>
                </div>,
            status: <div className="d-flex flex-column"><div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Accepted</p></div><p className="float-end">23 min ago</p></div>
        }
    ]
}

const largeTableData = {
    columns: [
        {
          label: 'PRODUCT',
          field: 'product',
          sort: 'asc',
          width: 150
        },
        {
          label: 'DESIGNER',
          field: 'designer',
          sort: 'asc',
          width: 270
        },
        {
          label: 'DATE',
          field: 'date',
          sort: 'asc',
          width: 200
        },
        {
          label: 'PRODUCT PRICE',
          field: 'price',
          sort: 'asc',
          width: 150
        },
        {
           label: 'COMMISION RATE',
           field: 'rate',
           sort: 'asc',
           width: 100
        },
        {
          label: 'SOLD',
          field: 'sold',
          sort: 'asc',
          width: 100
        },
        {
          label: 'PAYMENT STATUS',
          field: 'status',
          sort: 'asc',
          width: 100
        }
    ],
    rows: [
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Received</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Received</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Received</p></div>
        },
        {
            product: <div className='d-flex flex-row gap-4 align-items-center'>
                <img src={Sofa}/>
                <p className='align-items-center mt-3 fw-bold'>Sofa</p>
            </div>,
            designer: 'Arpico',
            date: '25.07.2023',
            price: '4000Rs',
            rate: '15%',
            sold:'15',
            status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Received</p></div>
        },
    ]
}


const SentPromotion = () => (
    <>

        <div className="sendpromotion-container rounded-3 mb-4 me-5">
            <div className=" col-12 d-flex flex-column">
                <div className=" col-12 d-flex flex-column flex-lg-row flex-md-row gap-4">
                    <div className="col-lg-8 bg-white rounded-3 my-2 shadow" style={{ height: "10%" }}>
                        <div className="d-flex flex-row gap-3 p-3">
                            <p className="fs-3 fw-bold Cabin-text">Partnered Designers</p>
                            <p className="fs-5 fw-semibold mt-2 Cabin-text" style={{ color: "#035C94"}}>See all<Icon.ArrowRight color="#035C94" /></p>
                        </div>
                        <Carousel className="w-100">
                            <Carousel.Item className='carousel-img'>
                                <div class="row row-cols-1 row-cols-md-3 g-4 my-1 mx-4">
                                    <div class="col">
                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                            <img className="img-fluid" src={Arpico} class="card-img-top" alt="blacksofa" />
                                            <div class="card-body m-0 p-0 mt-3">
                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                    <div className="d-flex flex-column">
                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696"}}>SOFA</p>
                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                    </div>
                                                    <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                            <img className="img-fluid" src={Arpico} class="card-img-top" alt="blacksofa" />
                                            <div class="card-body m-0 p-0 mt-3">
                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                    <div className="d-flex flex-column">
                                                        <p className="card-text m-0 fw-bold fs-6 Cabin-text" style={{ color: "#969696"}}>SOFA</p>
                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                    </div>
                                                    <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                            <img className="img-fluid" src={Arpico} class="card-img-top" alt="blacksofa" />
                                            <div class="card-body m-0 p-0 mt-3">
                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                    <div className="d-flex flex-column">
                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696"}}>SOFA</p>
                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                    </div>
                                                    <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className='carousel-img'>
                                <div class="row row-cols-1 row-cols-md-3 g-4 my-1 mx-4">
                                    <div class="col">
                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                            <img className="img-fluid" src={Arpico} class="card-img-top" alt="blacksofa" />
                                            <div class="card-body m-0 p-0 mt-3">
                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                    <div className="d-flex flex-column">
                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696"}}>SOFA</p>
                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                    </div>
                                                    <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                            <img className="img-fluid" src={Arpico} class="card-img-top" alt="blacksofa" />
                                            <div class="card-body m-0 p-0 mt-3">
                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                    <div className="d-flex flex-column">
                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696"}}>SOFA</p>
                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                    </div>
                                                    <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                            <img className="img-fluid" src={Arpico} class="card-img-top" alt="blacksofa" />
                                            <div class="card-body m-0 p-0 mt-3">
                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                    <div className="d-flex flex-column">
                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696"}}>SOFA</p>
                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>

                                                    </div>
                                                    <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className='carousel-img'>
                                <div class="row row-cols-1 row-cols-md-3 g-4 my-1 mx-4">
                                    <div class="col">
                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                            <img className="img-fluid" src={Arpico} class="card-img-top" alt="blacksofa" />
                                            <div class="card-body m-0 p-0 mt-3">
                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                    <div className="d-flex flex-column">
                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696"}}>SOFA</p>
                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                    </div>
                                                    <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                            <img className="img-fluid" src={Arpico} class="card-img-top" alt="blacksofa" />
                                            <div class="card-body m-0 p-0 mt-3">
                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                    <div className="d-flex flex-column">
                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696"}}>SOFA</p>
                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                                    </div>
                                                    <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                            <img className="img-fluid" src={Arpico} class="card-img-top" alt="blacksofa" />
                                            <div class="card-body m-0 p-0 mt-3">
                                                <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                    <div className="d-flex flex-column">
                                                        <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696"}}>SOFA</p>
                                                        <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>

                                                    </div>
                                                    <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>

                        </Carousel>
                    </div>
                    <div className="col-lg-4 container-fluid border bg-white rounded-3 my-2 shadow p-3">
                        <p className="fs-3 fw-bold Cabin-text">My Network</p>
                        <div className='p-4'>

                            <MDBDataTableV5 responsive
                                striped
                                bordered
                                small
                                data={smallTableData}
                                sortable={false}
                                exportToCSV={true}
                                paging={false}
                                searching={false} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 container-fluid border bg-white rounded-3 my-2 shadow">
                    <div className="d-flex flex-row gap-3 p-3">
                        <p className="fs-3 fw-bold Cabin-text">Partnered Designers</p>
                        <p className="fs-5 fw-semibold mt-2 Cabin-text" style={{ color: "#035C94"}}>See all<Icon.ArrowRight color="#035C94" /></p>
                    </div>
                    <div className='p-3'>

                            <MDBDataTableV5 responsive
                                striped
                                bordered
                                small
                                data={largeTableData}
                                sortable={false}
                                exportToCSV={true}
                                paging={false}
                                searching={false} />
                        </div>
                </div>
            </div>
        </div>

    </>
)

export default SentPromotion;