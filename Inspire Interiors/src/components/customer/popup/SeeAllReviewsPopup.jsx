import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as Icon from 'react-bootstrap-icons';
import { FaStar, FaRegStar } from 'react-icons/fa';

import { Modal, Button } from 'react-bootstrap';
import { Form, Row, Col } from 'react-bootstrap';
import useAlert from '../../../components/useAlert';
import { useSession } from '../../../constants/SessionContext';

function SeeAllReviews({productData}) {
    const [showPopup, setReview] = useState(false);

    // Function to close the modal
    const closeModel = () => {
        setReview(false);
    };

    const apiBaseURL = 'http://localhost:8080';

    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000,
    });

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

    const starStyles = {
        filledStar: {
            color: '#f39c12',
            cursor: 'pointer',
        },
        emptyStar: {
            color: '#f39c12',
            cursor: 'pointer',
        },
    };

    function StarRating({ initialRating }) {
        const [rating, setRating] = useState(initialRating);

        const handleStarClick = (clickedRating) => {
            setRating(clickedRating);
        };

        const generateInputStars = (totalStars) => {
            const stars = [];
            for (let i = 1; i <= 5; i++) {
                stars.push(
                    <span
                        key={i}
                        onClick={() => handleStarClick(i)}
                        style={i <= rating ? starStyles.filledStar : starStyles.emptyStar}
                    >
                        {i <= rating ? <FaStar /> : <FaRegStar />}
                    </span>
                );
            }
            return stars;
        };
        return (
            <div className='d-flex align-items-center'>
                {generateInputStars(5)}
            </div>
        );
    }
    const [averageRating, setAverageRating] = useState(0.0);
    const [reviewData, setReviewData] = useState([]);
    const id = productData.product_id;
    // console.log('pid is',id)

    async function fetchAndStoreReviewData(id) {
        try {
          const response = await axiosInstance.get(`/rating/${id}`);
          setReviewData(response.data.reviews);
          console.log(reviewData)
          
          // Set the average rating from the response to the state
          setAverageRating(response.data.averageRating);
        } catch (error) {
          console.error('Error fetching review data:', error);
        }
    }

    useEffect(() => {
    fetchAndStoreReviewData(id);
    }, [id]);

    return (
        <div>
            <div>
                <button className="fs-6 fw-semibold Cabin-text bg-transparent" style={{ color: "#035C94" }} onClick={() => setReview(true)}>
                    See all reviews
                </button>
            </div>
            <div>
                <Modal show={showPopup} onHide={closeModel}>

                    <Modal.Header closeButton>
                        <Modal.Title className='w-100 d-flex justify-content-center'>{productData.product_name}</Modal.Title>
                    </Modal.Header>



                    <Modal.Body className='py-2 px-3'>
                        {/* Form for the popup */}
                        <Row className='g-4'>
                            <Col md>
                                <Form.Group>
                                    <Form.Label className='sub-heading Cabin-text'>Username****</Form.Label>
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group >
                                    <Form.Label className='sub-heading Cabin-text'>{generateStars(4)}</Form.Label>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className='g-4'>
                            <Col md>
                                <Form.Group className='mb-3'>
                                    <Form.Control
                                        type='text'
                                        name='review'
                                        value={"Aaaailaaviooooo!! Aaailavio This Much(❁´◡`❁)"}
                                        style={{ backgroundColor: '#F2FAFF' }}
                                        className='border-0'
                                    />
                                </Form.Group>
                            </Col>

                        </Row>

                    </Modal.Body>

                    <Modal.Footer className='d-flex justify-content-center'>
                        <Form className='w-100 px-2'>
                            <Row className='w-100'>
                                <Col md>
                                    <Form.Group className="mb-3">
                                        <div className="d-flex justify-content-between mb-2">
                                            <Form.Label className='sub-heading Cabin-text'>Add your review:</Form.Label>
                                            <StarRating initialRating={0} />
                                        </div>
                                        <div className="d-flex gap-1">
                                            <Form.Control
                                                type='text'
                                                placeholder="Type your comment here..."
                                                style={{ backgroundColor: '#F2FAFF' }}
                                            />
                                            <Button variant="primary" type="button">Send</Button>
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>

                        <Button variant="secondary" onClick={closeModel}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>
        </div >

    );
}

export default SeeAllReviews;