import React from "react";
import * as Icon from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination, Breadcrumb } from "react-bootstrap";
import SearchPage from "../../../components/customer/filterNsearch";
import './../../../styles/customer/designs.css';


const CustomBullet = () => (
    <span style={{ color: "orange", fontSize: "1.5em", marginRight: "0.5em" }}>
        •
    </span>
);

const data = [
    {
        image: "https://www.maticad.com/wp-content/uploads/2022/07/Colours_tips_maticad.jpg",
        title: "Anxiety webinar, from etiology to treatment",
        stars: 4.5,
        votes: 50,
        sold: 144,
        price: 24,
        column2: "Row 1, Column 2",
    }, {
        image: "https://cdn2.hubspot.net/hubfs/5208252/Corner%20RS%20110H%20Design%20Orly%20Dekter,%20Footage%20by%20Oded%20Smadar%206.jpg",
        title: "Anxiety webinar, from etiology to treatment",
        stars: 3.5,
        votes: 50,
        sold: 144,
        price: 24,
        column2: "Row 1, Column 2",
    }, {
        image: "https://cdn2.hubspot.net/hubfs/5208252/Corner%20RS%20110H%20Design%20Orly%20Dekter,%20Footage%20by%20Oded%20Smadar%206.jpg",
        title: "Anxiety webinar, from etiology to treatment",
        stars: 4.5,
        votes: 50,
        sold: 144,
        price: 24,
        column2: "Row 1, Column 2",
    }, {
        image: "https://www.maticad.com/wp-content/uploads/2022/07/Colours_tips_maticad.jpg",
        title: "Anxiety webinar, from etiology to treatment",
        stars: 4.5,
        votes: 50,
        sold: 144,
        price: 24,
        column2: "Row 1, Column 2",
    }, {
        image: "https://www.maticad.com/wp-content/uploads/2022/07/Colours_tips_maticad.jpg",
        title: "Anxiety webinar, from etiology to treatment",
        stars: 4.5,
        votes: 50,
        sold: 144,
        price: 24,
        column2: "Row 1, Column 2",
    }, {
        image: "https://www.maticad.com/wp-content/uploads/2022/07/Colours_tips_maticad.jpg",
        title: "Anxiety webinar, from etiology to treatment",
        stars: 4.5,
        votes: 50,
        sold: 144,
        price: 24,
        column2: "Row 1, Column 2",
    },

];


const BrowseDesigns = () => {

    const generateStars = (rate) => {
        const fullStars = Math.floor(rate);
        const halfStar = rate - fullStars >= 0.5;

        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<Icon.StarFill key={i} color='#f39c12' />);
            } else if (i === fullStars + 1 && halfStar) {
                stars.push(<Icon.StarHalf key={i} color='#f39c12' />);
            } else {
                stars.push(<Icon.Star key={i} color='#f39c12' />);
            }
        }

        return stars;
    };


    return (
        <>
            <div className="background d-flex flex-column justify-content-between w-100 bg-light rounded Cabin-text">
                {/* Topic, search and filter */}
                {/* Breadcrumb */}
                <div className='bg-light top-bar py-3'>
                    <div className='container'>
                        <div className='row d-flex align-items-center'>
                            <div className='col-md-4 col-sm-12 col-12 fs-4'>
                                <Breadcrumb className="fw-bold breadcrumb">
                                    <Breadcrumb.Item style={{ color: '#17183B !important' }}>
                                        Browse Designs
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item active>Top Paid</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                            <div className='col-md-4 col-sm-6 col-6 text-center'>
                            </div>
                            <div className='col-md-4 col-sm-6 col-6 text-end'>
                                <SearchPage />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content in the Middle */}
                <div className="py-1">
                    <div className='container'>
                        <div className='row flex-md-row flex-column'>
                            {data.map((item, index) => (
                                <div key={index} className="col-md-6 col-sm-6 col-12">
                                    <div className="mb-3 bg-white p-3 rounded">

                                        <div className="d-flex gap-2 flex-md-row flex-column" style={{ color: "#0A033C" }}>
                                            <div className="w-25 align-self-center">
                                                <img src={item.image} alt="Your Image" className="img-fluid rounded" />
                                            </div>

                                            <div className="w-75">

                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6 col-6">
                                                        <div className=" px-2 ">
                                                            Row 1, Column 1
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6 col-sm-6 col-6">
                                                        <div className="d-flex justify-content-end align-items-center">
                                                            <li style={{ color: "#0B7077", listStyleType: "none" }}>
                                                                <CustomBullet />
                                                                Bedroom
                                                            </li>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="fw-bold px-2">
                                                            <p>{item.title}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row fw-semibold" style={{ color: '#696984' }}>
                                                    <div className="col-md-6 col-sm-6 col-6">
                                                        <div className=" px-2">
                                                            {generateStars(item.stars)} ({item.votes} Votes)
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6 col-6">
                                                        <div className="d-flex justify-content-end px-2">
                                                            ({item.sold} Sold)
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className=" px-2">
                                                            <hr />
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6 col-6">
                                                        <div style={{ color: '#696984' }} className=" px-2">
                                                            Price : <span className="fs-5" style={{ color: "#0B7077" }}> ${item.price}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6 col-6">
                                                        <div className="d-flex justify-content-end ">
                                                            {item.column2}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                {/* Pagination at the Bottom */}
                <div className="py-1 ">
                    <div className='container'>
                        <div className='row'>
                            <div className='d-flex col text-center justify-content-center align-items-center'>
                                <Pagination>
                                    <Pagination.Prev />
                                    <Pagination.Item active>{1}</Pagination.Item>
                                    <Pagination.Item>{2}</Pagination.Item>
                                    <Pagination.Ellipsis />
                                    <Pagination.Item>{9}</Pagination.Item>
                                    <Pagination.Item >{10}</Pagination.Item>
                                    <Pagination.Next />
                                </Pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrowseDesigns;
