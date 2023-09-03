import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

import axios from 'axios';


function EditAddressButton({ addressData }) {

  const [showEditPopup, setShowEditPopup] = useState(false);


  // Function to close the modal
  const closeEditAddressModal = () => {
    setShowEditPopup(false);
  };


  // State variables to hold updated address data
  const [updatedAddressData, setUpdatedAddress] = useState({});


  // Effect to update state when the modal is opened
  const handleAddressEdit = (event, field) => {
    const { value } = event.target;
    setUpdatedAddress((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleAddressUpdate = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const apiBaseURL = 'http://localhost:8080'; // Replace this with the base URL of your Spring Boot backend

    const axiosInstance = axios.create({
      baseURL: apiBaseURL,
      timeout: 5000,
    });

    if (updatedAddressData.tag === undefined || updatedAddressData.tag === null) {
      updatedAddressData.tag = addressData.tag;
    }
    if (updatedAddressData.address_title === undefined || updatedAddressData.address_title === null) {
      updatedAddressData.address_title = addressData.address_title;
    }
    if (updatedAddressData.lane_no === undefined || updatedAddressData.lane_no === null) {
      updatedAddressData.lane_no = addressData.lane;
    }
    if (updatedAddressData.city === undefined || updatedAddressData.city === null) {
      updatedAddressData.city = addressData.city;
    }
    if (updatedAddressData.districts === undefined || updatedAddressData.districts === null) {
      updatedAddressData.districts = addressData.district;
    }
    if (updatedAddressData.provi === undefined || updatedAddressData.provi === null) {
      updatedAddressData.provi = addressData.province;
    }

    // Create an object with the updated address data
    const updatedAddress = {
      addressId: addressData.addressid,
      tag: updatedAddressData.tag,
      addressTitle: updatedAddressData.address_title,
      lane: updatedAddressData.lane_no,
      city: updatedAddressData.city,
      district: updatedAddressData.districts,
      province: updatedAddressData.provi,
      // Add other properties you need (e.g., address ID)
    };
    console.log(updatedAddressData);
    console.log(updatedAddress);

    // Send a request to your backend to update the address using axios or your preferred HTTP library
    axiosInstance
      .put('/update-address', updatedAddress) // Replace with your actual API endpoint
      .then(response => {
        // Handle success response if needed
        console.log('Address updated successfully:', response.data);
        // Close the modal or perform any other necessary actions
        closeEditAddressModal();
      })
      .catch(error => {
        // Handle error response if needed
        console.error('Error updating address:', error);
      });
  };

  return (
    <div>

      <button onClick={() => setShowEditPopup(true)} className="edit-address Cabin-text">Edit</button>

      <div>
        <Modal show={showEditPopup} onHide={closeEditAddressModal}>

          <Modal.Header closeButton >
            <Modal.Title>Edit Address</Modal.Title>
          </Modal.Header>

          <Form className='p-4' onSubmit={handleAddressUpdate}>

            <Modal.Body className='py-2 px-3'>
              {/* Form for the popup */}
              <Row className='g-4'>
                <Col md>
                  <Form.Group className='mb-3'>
                    <Form.Label className='sub-heading Cabin-text'>Tag:</Form.Label>
                    <Form.Control
                      type='text'
                      Value={addressData.tag}
                      onChange={(e) => handleAddressEdit(e, 'tag')}
                      style={{ backgroundColor: '#F2FAFF' }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className='g-4'>
                <Col md>
                  <Form.Group className='mb-3'>
                    <Form.Label className='sub-heading Cabin-text'>Address Title:</Form.Label>
                    <Form.Control
                      type='text'
                      Value={addressData.address_title}
                      onChange={(e) => handleAddressEdit(e, 'address_title')}
                      style={{ backgroundColor: '#F2FAFF' }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className='g-4'>
                <Col md>
                  <Form.Group className='mb-3'>
                    <Form.Label className='sub-heading Cabin-text'>Lane:</Form.Label>
                    <Form.Control
                      type='text'
                      Value={addressData.lane}
                      onChange={(e) => handleAddressEdit(e, 'lane_no')}
                      style={{ backgroundColor: '#F2FAFF' }}
                    />
                  </Form.Group>
                </Col>
                <Col md>
                  <Form.Group className='mb-3'>
                    <Form.Label className='sub-heading Cabin-text'>City:</Form.Label>
                    <Form.Control
                      type='text'
                      Value={addressData.city}
                      onChange={(e) => handleAddressEdit(e, 'city')}
                      style={{ backgroundColor: '#F2FAFF' }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className='g-4'>
                <Col md>
                  <Form.Group className='mb-3'>
                    <Form.Label className='sub-heading Cabin-text'>District:</Form.Label>
                    <Form.Control
                      type='text'
                      Value={addressData.district}
                      onChange={(e) => handleAddressEdit(e, 'districts')}
                      style={{ backgroundColor: '#F2FAFF' }}
                    />
                  </Form.Group>
                </Col>
                <Col md>
                  <Form.Group className='mb-3'>
                    <Form.Label className='sub-heading Cabin-text'>Province:</Form.Label>
                    <Form.Control
                      type='text'
                      Value={addressData.province}
                      onChange={(e) => handleAddressEdit(e, 'provi')}
                      style={{ backgroundColor: '#F2FAFF' }}
                    />
                  </Form.Group>
                </Col>
              </Row>


            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={closeEditAddressModal}>
                Close
              </Button>
              <Button type="submit" variant="primary" >
                Save Changes
              </Button>
            </Modal.Footer>
            
          </Form>
        </Modal>
      </div>
    </div>
  );
}

export default EditAddressButton;
