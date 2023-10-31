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
    const [userReview, setUserReview] = useState('');
     const [rating, setRating] = useState(0 );
    const [userData, setUserData] = useState([]);

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

    useEffect(() => {
        // Make an API request to fetch the shipping addresses from the backend
        axiosInstance.get('/users')
            .then(response => {
                setUserData(response.data); // Assuming the response is an array of shipping addresses
               
            })
            .catch(error => {
                console.error('Error fetching shipping addresses:', error);
            });
    }, []); // Fetch the addresses when the component mounts

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
       

        const handleStarClick = (clickedRating) => {
            setRating(clickedRating);
            console.log(clickedRating);
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
    const sessionItems = useSession();
    const userId = sessionItems.sessionData.userid;

    const handleAddReview = async () => {
        console.log('Adding review:', userReview);
        try {
            // Make an API request to add the user's review
            const response = await axiosInstance.post(`/rating`, {
                designId:0,
                productId: id,
                reviewDate: new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear()    ,
                starRating:rating,
                review: userReview, 
                userId:userId
            });

            // Handle the response or update the UI as needed
            console.log(response);

            // Close the review modal
            closeModel();
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };

    const mergeData = (reviewData, userData) => {
        const mergedData = reviewData.map(
          (reviewItem) => {
          const matchingUser = userData.find(
            (userItem) =>  userItem.userid === reviewItem.userId
          );
    
         
      
          if (matchingUser ) {
            // Merge the data from both sources
            return {
              ...reviewItem,
              ...matchingUser
            
            };
          } else {
            return {
                ...reviewItem
            };
        }});
      
        return mergedData;
    };
    
    const mergedDesigner = mergeData(reviewData, userData);
    console.log("merged Data", mergedDesigner);
    

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
                  
                        {mergedDesigner.map((review, index) => (
                            <div key={index} className='d-flex flex-column gap-2'>
                                <div className='d-flex justify-content-between'>
                                    <span className='sub-heading Cabin-text'>{review.username}</span>
                                    <span className='sub-heading Cabin-text'>{review.review_date}</span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <span className='sub-heading Cabin-text'>{generateStars(review.starRating)}</span>
                                    
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <span className='sub-heading Cabin-text'>{review.review}</span>
                                </div>
                            </div>
    ))}

                    </Modal.Body>

                    <Modal.Footer className='d-flex justify-content-center'>
                        <Form className='w-100 px-2'onSubmit={handleAddReview}>
                            <Row className='w-100'>
                                <Col md>
                                    <Form.Group className="mb-3">
                                        <div className="d-flex justify-content-between mb-2">
                                            <Form.Label className='sub-heading Cabin-text'>Add your review:</Form.Label>
                                            <StarRating initialRating={rating || 0}  />
                                        </div>
                                        <div className="d-flex gap-1">
                                            <Form.Control
                                                type='text'
                                                placeholder="Type your comment here..."
                                                style={{ backgroundColor: '#F2FAFF' }}
                                                value={userReview}
                                                onChange={(e) => setUserReview(e.target.value)}
                                                required
                                            />
                                            <Button variant="primary" type="submit">Send</Button>
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