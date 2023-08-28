import React from "react";
import '../../styles/vendor/promotionRequest.css';

import * as Icon from 'react-bootstrap-icons';
import { MDBDataTableV5, MDBTable } from 'mdbreact';
import Customer from '../../assets/img/vendor/customer.png';
import BlackSofa from "../../assets/img/vendor/blacksofa.png";

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import {Link} from 'react-router-dom';

const tabledata = {
    columns: [
      {
        label: 'PRICE RANGE',
        field: 'price',
        sort: 'asc',
        width: 200
      },
      {
        label: 'RATE OF COMMISION',
        field: 'commision',
        sort: 'asc',
        width: 200
      },
    ],
    rows: [
        {
            price: '0 - 1000',
            commision: '10%',
        },
        {
            price: '1000 - 5K',
            commision: '10%',
        },
        {
            price: '5K - 10K',
            commision: '10%',
        },
        {
            price: '10K - 50K',
            commision: '10%',
        },
        {
            price: '50K - 100K',
            commision: '10%',
        },
        {
            price: 'More than 100K',
            commision: '10%',
        },
          
    ],
};

const tabledata2 = {
    columns: [
      {
        label: 'PRICE RANGE',
        field: 'price',
        sort: 'asc',
        width: 200
      },
      {
        label: 'RATE OF COMMISION',
        field: 'commision',
        sort: 'asc',
        width: 200
      },
    ],
    rows: [
        {
            price: '0 - 1000',
            commision: <div className="d-flex flex-row gap-2">
                <Slider />
                <p className="fs-6 fw-semibold">15%</p>
            </div>,
        },
        {
            price: '1000 - 5K',
            commision: <div className="d-flex flex-row gap-2">
                <Slider />
                <p className="fs-6 fw-semibold">15%</p>
            </div>,
        },
        {
            price: '5K - 10K',
            commision: <div className="d-flex flex-row gap-2">
                <Slider />
                <p className="fs-6 fw-semibold">15%</p>
            </div>,
        },
        {
            price: '10K - 50K',
            commision: <div className="d-flex flex-row gap-2">
                <Slider />
                <p className="fs-6 fw-semibold">15%</p>
            </div>,
        },
        {
            price: '50K - 100K',
            commision: <div className="d-flex flex-row gap-2">
                <Slider />
                <p className="fs-6 fw-semibold">15%</p>
            </div>,
        },
        {
            price: 'More than 100K',
            commision: <div className="d-flex flex-row gap-2">
                <Slider />
                <p className="fs-6 fw-semibold">15%</p>
            </div>,
        },
          
    ],
};

const generateStars = (rate) => {
    const fullStars = Math.floor(rate);
    const halfStar = rate - fullStars >= 0.5;

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Icon.StarFill key={i} color='#FFC00C' />);
      } else if (i === fullStars + 1 && halfStar) {
        stars.push(<Icon.StarHalf key={i} color='#FFC00C' />);
      } else {
        stars.push(<Icon.Star key={i} color='#FFC00C' />);
      }
    }
    return stars;
};


const PromotionRequest = () => (
    <>
        <div className="request-container">
            <div className="col-12 d-flex flex-column flex-lg-row flex-md-row gap-3">
                <div className="d-flex flex-column gap-4 h-100">
                    <div className='col-lg-12 bg-white rounded-3 shadow p-4'>
                        <div className="d-flex flex-row gap-4">
                            <Link to="/vendor/promotion"><p className="text-dark fs-5 fw-bold Cabin-text ">Promotion</p></Link>
                            <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                            <Link to="/vendor/promotion/mynetwork"><p className="fs-5 fw-bold Cabin-text text-dark">My Network</p></Link>
                            <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                            <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Received</p>
                            <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                            <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Victor Avocado</p>
                        </div>
                        <div className="d-flex flex-column">
                            <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563" }}>Offer Overview</p>
                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B" }}>We wish to partner with you in our works blah blah. you can negotiate or decline dont accept we wont pay anything. We are just trying to make this para 2 lines. Happy that we got two lines that's all thank you bye bye.</p>
                        </div>
                        <div className="d-flex flex-column">
                            <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563" }}>Offer Details</p>
                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B" }}>For various price ranges you will receive a kind of percentage from our product value. But only we will pay after the return periods end. so dont ask for money. we dont have atleast 10 rupees. Thank you.</p>
                        </div>
                        <div className='p-4'>
                            <MDBDataTableV5 responsive
                                striped
                                bordered
                                small
                                data={tabledata}
                                sortable={false}
                                exportToCSV={true}
                                paging={false}
                                searching={false} />
                        </div>
                        <Link to="/vendor/promotion/mynetwork"><button className="withdraw-btn float-end Cabin-text">Withdraw Request</button></Link>
                    </div>
                    <div className='col-lg-12 bg-white rounded-3 shadow gap-2 p-4 mb-3'>
                        <p className="fs-5 fw-bold Cabin-text">Negotiate</p>
                        <p className="fw-semibold fs-6 Cabin-text">Select Promotion Rates</p>
                        <div className=''>
                            <MDBDataTableV5 responsive
                                striped
                                bordered
                                small
                                data={tabledata2}
                                sortable={false}
                                exportToCSV={true}
                                paging={false}
                                searching={false} />
                        </div>
                        <div className="d-flex flex-row gap-4 float-end my-3">
                            <Link to="/vendor/promotion/mynetwork"><button className="negotiate-btn float-end Cabin-text" style={{ color: "#545563" }}>Negotiate</button></Link>
                            <Link to="/vendor/promotion/mynetwork"><button className="accept-btn float-end Cabin-text">Accept Order</button></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-3">
                    <div className='col-lg-12 h-100 bg-white rounded-3 shadow p-4 '>
                        <p className="fs-5 fw-bold Cabin-text">About Victor Avocado</p>
                        <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-4">
                            <img style={{ backgroundColor: "#FEE4CB", objectFit: "cover" }} className="img-fluid p-2 rounded-4 border" src={Customer} />
                            <div className="d-flex flex-column">
                                <p className="fs-6 fw-bold Cabin-text">Victor Avocado</p>
                                <div className="d-flex flex-row gap-4">
                                    <p className="fs-6 fw-semibold Cabin-text">Interior Designer</p>
                                    <div className="d-flex flex-column mt-1 gap-2">
                                        <div className="d-flex flex-row gap-1">{generateStars(4.5)}</div>
                                        <div className="d-flex flex-row gap-1 float-end">
                                            <p className="fs-6 fw-bold Cabin-text">4.5/5.0</p>
                                            <p className="fs-6 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>(556)</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex flex-row gap-4">
                                    <Icon.Twitter size={25} color="#575757" />
                                    <Icon.Linkedin size={25} color="#575757" />
                                    <Icon.Youtube size={25} color="#575757" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-evenly mt-4">
                            <div className="d-flex flex-column">
                                <p className="fs-1 fw-semibold Cabin-text text-center m-0" style={{ color: "#FFC00C" }}>120</p>
                                <p className="fs-6 fw-bold Cabin-text text-center m-0">Designs</p>
                            </div>
                            <div className="d-flex flex-column">
                                <p className="fs-1 fw-semibold Cabin-text text-center m-0" style={{ color: "#FFC00C" }}>30</p>
                                <p className="fs-6 fw-bold Cabin-text text-center m-0">Custom designs sold</p>
                            </div>
                            <div className="d-flex flex-column">
                                <p className="fs-1 fw-semibold Cabin-text text-center m-0" style={{ color: "#FFC00C" }}>25</p>
                                <p className="fs-6 fw-bold Cabin-text text-center m-0">Satisfied customers</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column my-1">
                            <p className="fs-6 fw-bold Cabin-text mt-3" style={{ color: "#545563" }}>Bio</p>
                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B" }}>For various price ranges you will receive a kind of percentage from our product value. But only we will pay after the return periods end. so dont ask too many commission. Thank you.</p>
                        </div>
                        <div className="d-flex flex-column my-3">
                            <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563" }}>Specialities</p>
                            <div className="badge w-25 Cabin-text" style={{ color: "#000000", backgroundColor: "#CCF8FE" }}>Bed Room</div>
                        </div>
                        <div className="d-flex flex-row gap-4 mt-3">
                            <p className="fs-5 fw-bold Cabin-text">Top Selling Designs</p>
                            <Link to="/vendor/promotion/promoteproduct"><p className="fs-6 fw-semibold Cabin-text mt-1" style={{ color: "#035C94" }}>See all<Icon.ArrowRight color="#035C94" className="mx-1" /></p></Link>
                        </div>
                        <div class="row row-cols-1 row-cols-md-3 g-4 mx-4">
                            <div class="col w-50">
                                <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                    <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                            </div>
                                            <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col w-50">
                                <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                    <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                            </div>
                                            <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col w-50">
                                <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                    <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                            </div>
                                            <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col w-50">
                                <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                    <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                            </div>
                                            <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row row-cols-1 row-cols-md-3 g-4 my-1 mx-4">
                        <div class="col w-50">
                                <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                    <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                            </div>
                                            <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col w-50">
                                <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                    <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                            </div>
                                            <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col w-50">
                                <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                    <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                            </div>
                                            <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col w-50">
                                <div class="card card-wid p-2 h-100 mb-2 rounded-3 border-0 shadow">
                                    <img className="img-fluid" src={BlackSofa} class="card-img-top" alt="blacksofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-bold Cabin-text" style={{ color: "#969696" }}>WELCOME ROOM</p>
                                                <p class="card-title fw-semibold m-0 fs-6 fw-semibold Cabin-text">Landskrona</p>
                                            </div>
                                            <Icon.EyeFill className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>
)

export default PromotionRequest;