import React, { useState,useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


function QRPopup() {

    const apiBaseURL = 'http://localhost:8080';
    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000, // You can adjust the timeout value as needed
    });

    const [QRData, setQRData] = useState([]);

     const location = useLocation();

     // Get the current URL
    const currentURL = window.location.href;
    const splitURL = currentURL.split("/");
    const id = decodeURIComponent(splitURL[6]);
    console.log("id",id)

      // Function to fetch and store the product data
    async function fetchQR(id) {
        try {
            const response = await axiosInstance.get(`/armodel/${id}`);
            setQRData(response.data);
            
        } catch (error) {
            console.error('Error fetching products by Type:', error);
        }
    }
    
    // Call the function to fetch and store the product data
    useEffect(() => {
    fetchQR(id);
    }, []);

    //destructuring pathname from location
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const [selected, setSelected] = useState(splitLocation[5]);

    
    const [showPopup, setShowModel] = useState(false);
    const [additionalRemarks, setAdditionalRemarks] = useState(''); // Add state for additionalRemarks

    // Function to close the modal
    const closeModel = () => {
        setShowModel(false);
    };

    // Function to handle the form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const apiBaseURL = 'http://localhost:8080';
        const axiosInstance = axios.create({
            baseURL: apiBaseURL,
            timeout: 5000,
        });

        // Create an object with the updated data
        const updatedData = {
            additional_remarks: additionalRemarks,
        };

        axiosInstance
            .put(`/mark-as-canceled/${selected}`, updatedData)
            .then(response => {
                console.log('Inquiry updated successfully:', response.data);
                closeModel();
            })
            .catch(error => {
                console.error('Error updating inquiry:', error);
            });
    };

    return (
        <div>
            <img
            src='https://static.thenounproject.com/png/2300882-200.png'
            onClick={() => setShowModel(true)}
            className="my-2 mx-5 Cabin-text "
            style={{ color: "#FF5C60", background: "#FFFFFF", borderRadius: "8px", width:"35px" }}>
                
            </img>

            <Modal show={showPopup} onHide={closeModel}>

                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "#000" }}>
                        Scan on mobile to experience 
                    </Modal.Title>
                </Modal.Header>

                <Form className='p-4' method='POST' onSubmit={handleFormSubmit}>

                    <Modal.Body className='py-2 px-3'>
                        <Row className='g-4'>
                            <Col md className='d-flex justify-content-center'>
                                
                                {QRData.modelFile === undefined &&(
                                    <img
                                src={ (`https://www.aepint.nl/wp-content/uploads/2014/12/No_image_available.jpg`)}>
                                </img>

                                )}
                                {QRData.modelFile !== undefined &&(
                                    <img
                                src={ (`../../../../../src/assets/img/qr_code/${QRData.modelFile}`)}>
                                </img>

                                )}


                                
                                
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer className='d-flex justify-content-between'>
                        <Button
                        className="Cabin-text"
                        style={{ color: "#83859C", background: "#FFFFFF", borderRadius: "8px", border: "1px solid #83859C" }}
                        onClick={closeModel}>
                            OK
                        </Button>

                        
                    </Modal.Footer>

                </Form>
            </Modal>
        </div>
    );
}

export default QRPopup;