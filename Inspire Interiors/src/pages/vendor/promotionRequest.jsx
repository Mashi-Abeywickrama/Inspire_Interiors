import React from "react";
import '../../styles/vendor/promotionRequest.css';

import * as Icon from 'react-bootstrap-icons';
import { MDBDataTableV5, MDBTable } from 'mdbreact';
import Customer from '../../assets/img/vendor/customer.png';
import Furniture from '../../assets/img/vendor/furniture.png';

import ReactStars from "react-rating-stars-component";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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

const stardata = {
    data:"4.5"
}

const PromotionRequest = () => (
    <>
        <div className="request-container">
            <div className="col-12 d-flex flex-column flex-lg-row flex-md-row gap-3">
                <div className="d-flex flex-column gap-4">
                    <div className='col-lg-12 bg-white rounded-3 shadow p-4'>
                        <div className="d-flex flex-row gap-4">
                            <p className="text-dark fs-3 fw-bold Cabin-text ">Promotion</p>
                            <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                            <p className="fs-3 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>My Network</p>
                            <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                            <p className="fs-3 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Sent</p>
                            <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                            <p className="fs-3 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Victor Avocado</p>
                        </div>
                        <div className="d-flex flex-column">
                            <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563" }}>Offer Overview</p>
                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B" }}>We wish to partner with you in our works blah blah. you can negotiate or decline dont accept we wont pay anything. We are just trying to make this para 2 lines. Happy that we got two lines that's all thank you bye bye.</p>
                        </div>
                        <div className="d-flex flex-column">
                            <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563" }}>Offer Details</p>
                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B" }}>For various price ranges you will receive a kind of percentage from our product value. But only we will pay after the return periods end. so dont ask for money. we dont have atleast 10 rupees. Thank you.</p>
                        </div>
                        <div className=''>
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
                        <button className="withdraw-btn float-end Cabin-text">Withdraw Request</button>
                    </div>
                    <div className='col-lg-12 bg-white rounded-3 shadow gap-2 p-4'>
                        <p className="fs-6 fw-semibold Cabin-text">Negotiate</p>
                        <p className="fw-normal fs-6 Cabin-text">Select Promotion Rates</p>
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
                        <div className="d-flex flex-row gap-4 float-end">
                            <button className="negotiate-btn float-end Cabin-text" style={{ color: "#545563" }}>Negotiate</button>
                            <button className="accept-btn float-end Cabin-text">Accept Order</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className='col-lg-12 bg-white rounded-3 shadow p-4'>
                        <p className="fs-3 fw-bold Cabin-text">About Victor Avocado</p>
                        <div className="d-flex flex-column flex-lg-row flex-md-row gap-4">
                            <img style={{ backgroundColor: "#FEE4CB" }} className="img-fluid p-3 rounded-4 border" src={Customer} />
                            <div className="d-flex flex-column">
                                <p className="fs-4 fw-bold Cabin-text">Victor Avocado</p>
                                <div className="d-flex flex-row gap-3">
                                    <p className="fs-6 fw-semibold Cabin-text mt-2">Interior Designer</p>
                                    <div className="d-flex flex-column">
                                        <ReactStars
                                            count={5}
                                            onChange={stardata}
                                            size={24}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700" />
                                        <div className="d-flex flex-row gap-1 float-end">
                                            <p className="fs-6 fw-bold Cabin-text">4.6/5.0</p>
                                            <p className="fs-6 fw-bold Cabin-text" style={{color:"#A2A3B1"}}>(556)</p>
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
                            <div className="d-flex flex-column gap-2">
                                <p className="fs-1 fw-semibold Cabin-text" style={{ color: "#FFC00C" }}>120</p>
                                <p className="fs-6 fw-bold Cabin-text">Designs</p>
                            </div>
                            <div className="d-flex flex-column gap-2">
                                <p className="fs-1 fw-semibold Cabin-text" style={{ color: "#FFC00C" }}>120</p>
                                <p className="fs-6 fw-bold Cabin-text">Custom designs sold</p>
                            </div>
                            <div className="d-flex flex-column gap-2">
                                <p className="fs-1 fw-semibold Cabin-text" style={{ color: "#FFC00C" }}>120</p>
                                <p className="fs-6 fw-bold Cabin-text">Satisfied customers</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563" }}>Bio</p>
                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B" }}>For various price ranges you will receive a kind of percentage from our product value. But only we will pay after the return periods end. so dont ask for money. we dont have atleast 10 rupees. Thank you.</p>
                        </div>
                        <div className="d-flex flex-column">
                            <p className="fs-6 fw-bold Cabin-text" style={{ color: "#545563" }}>Specialities</p>
                            <div className="badge w-25 Cabin-text" style={{ color: "#000000", backgroundColor: "#CCF8FE" }}>Bed Room</div>
                        </div>
                        <div className="d-flex flex-row gap-4 mt-5">
                            <p className="fs-4 fw-bold Cabin-text">Top Selling Designs</p>
                            <p className="fs-5 fw-semibold Cabin-text" style={{ color: "#035C94" }}>See all<Icon.ArrowRight color="#035C94" className="mt-2" /></p>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row">
                                <div className="d-flex flex-column">
                                    
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