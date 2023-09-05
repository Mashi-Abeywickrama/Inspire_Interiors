import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

import axios from 'axios';
import { useSession } from '../../../constants/SessionContext';


function AddNewInquiry() {
    const initialInquiryData = {
        username: '',
        type: '',
        orderNo: '',
        orderDate: '',
        reason: '',
        additionalRemarks: '',
    };

    const resetForm = () => {
        setInquiryData({ ...initialInquiryData });
        setEvidenceFile(null);
    };

    const sessionItems = useSession();

  const [showEditPopup, setInquiry] = useState(false);
   const [evidenceFile, setEvidenceFile] = useState();


  // Function to close the modal
  const closeAddInquiryModel = () => {
    setInquiry(false);
  };

    const apiBaseURL = 'http://localhost:8080'; // Replace this with the base URL of your Spring Boot backend

  const axiosInstance = axios.create({
      baseURL: apiBaseURL,
      timeout: 5000,
    });


  // State variables to hold updated address data
  const [inquiryData, setInquiryData] = useState({});


  // Effect to update state when the modal is opened
  const handleInquiryAdd = (event, field) => {
    const { value } = event.target;
    setInquiryData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleEvidenceUpload = (event) => {
    const file = event.target.files[0];
    setEvidenceFile(file);
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  // Prepare the data object to send to the server
  const inquiryDataToSend = {
      inquiry_type: inquiryData.type,
      username: inquiryData.username,
      order_no: inquiryData.orderNo,
      order_date: inquiryData.orderDate,
      reason: inquiryData.reason,
      remarks: inquiryData.remarks,
      additional_remarks: inquiryData.additionalRemarks, // Note the corrected field name
      customer_support_id: sessionItems.sessionData.userid
    };


    console.log('Data to send:', inquiryDataToSend);
  // Send the data to your server or perform the necessary actions
  try {
    
      const response = await axiosInstance.post('/inquiry', inquiryDataToSend);
        resetForm();
      // Close the modal or perform any other actions
      closeAddInquiryModel();
      window.location.reload();
      console.log("Response from API:", response.data.reference);
      if (evidenceFile !== null) {
        console.log("Uploading evidence...");
        const formData = new FormData();
        formData.append('reference', response.data.reference);
        formData.append('evidence', evidenceFile);
        try {
            const evidenceResponse = await axiosInstance.put('/upload-evidence', formData);
            console.log("Response from API:", evidenceResponse.data);
        } catch (error) {
            // Handle the error
            console.log("Response from API:", evidenceResponse.data);
            console.error('Error:', error);
        }

        // Reset the evidence file input
        setEvidenceFile(null);
      }  
    } catch (error) {
      // Handle the error
      console.error('Error:', error);
    }
  };

  
  return (
    <div>

        <div>
            <button onClick={() => setInquiry(true)} className='add-btn m-4'><Icon.PlusLg color="white" size={20} />Add Inquiry</button>
        </div>

      <div>
        <Modal show={showEditPopup} onHide={closeAddInquiryModel}>

          <Modal.Header closeButton >
            <Modal.Title>Add Inquiry</Modal.Title>
          </Modal.Header>

          <Form className='p-4'  onSubmit={handleInquirySubmit} >

            <Modal.Body className='py-2 px-3'>
              {/* Form for the popup */}
              <Row className='g-4'>
                <Col md>
                  <Form.Group className='mb-3'>
                    <Form.Label className='sub-heading Cabin-text'>
                      Customer Username:
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter Customer Username'
                      onChange={(e) => handleInquiryAdd(e, 'username')}
                      value={inquiryData.username}
                      style={{ backgroundColor: '#F2FAFF' }}
                    />
                  </Form.Group>
                </Col>
                </Row>
                <Row className='g-4'>
                <Col md>
                  <Form.Group className='mb-3'>
                    <Form.Label className='sub-heading Cabin-text'>
                      Inquiry Type:
                    </Form.Label>
                    <Form.Control
                      as='select' // Use a dropdown select input
                      onChange={(e) => handleInquiryAdd(e, 'type')}
                      value={inquiryData.type}
                      style={{ backgroundColor: '#F2FAFF' }}
                    >
                      <option value=''>Select Type</option>
                      <option value='quotations'>Quotations</option>
                      <option value='refund'>Refund</option>
                      <option value='orderComplaints'>Order Complaints</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              {inquiryData.type === 'quotations' && (
                <Row className='g-4'>
                  <Col md>
                    <Form.Group className='mb-3'>
                      <Form.Label className='sub-heading Cabin-text'>
                        Remarks:
                      </Form.Label>
                      <Form.Control
                        type='textarea'
                        placeholder='Enter Remarks'
                        onChange={(e) => handleInquiryAdd(e, 'remarks')}
                        value={inquiryData.remarks}
                        style={{ backgroundColor: '#F2FAFF' }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              )}

              {inquiryData.type === 'refund' && (
                <>
                  <Row className='g-4'>
                    <Col md>
                      <Form.Group className='mb-3'>
                        <Form.Label className='sub-heading Cabin-text'>
                          Order No:
                        </Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter Order No'
                          name='orderNo'
                          onChange={(e) => handleInquiryAdd(e, 'orderNo')}
                          value={inquiryData.orderNo}
                          style={{ backgroundColor: '#F2FAFF' }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md>
                      <Form.Group className='mb-3'>
                        <Form.Label className='sub-heading Cabin-text'>
                          Order Date:
                        </Form.Label>
                        <Form.Control
                          type='date'
                          name='orderDate'
                          onChange={(e) => handleInquiryAdd(e, 'orderDate')}
                          value={inquiryData.orderDate}
                          style={{ backgroundColor: '#F2FAFF' }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className='g-4'>
                    <Col md>
                      <Form.Group className='mb-3'>
                        <Form.Label className='sub-heading Cabin-text'>
                          Reason:
                        </Form.Label>
                        <Form.Control
                          as='textarea'
                          rows={3}
                          name='reason'
                          placeholder='Enter Reason'
                          onChange={(e) => handleInquiryAdd(e, 'reason')}
                          value={inquiryData.reason}
                          style={{ backgroundColor: '#F2FAFF' }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className='g-4'>
                    <Col md>
                      <Form.Group className='mb-3'>
                        <Form.Label className='sub-heading Cabin-text'>
                          Additional Remarks:
                        </Form.Label>
                        <Form.Control
                          as='textarea'
                          rows={3}
                          name='additionalRemarks'
                          placeholder='Enter Additional Remarks'
                          onChange={(e) =>
                            handleInquiryAdd(e, 'additionalRemarks')
                          }
                          value={inquiryData.additionalRemarks}
                          style={{ backgroundColor: '#F2FAFF' }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className='g-4'>
                    <Col md>
                      <Form.Group className='mb-3'>
                        <Form.Label className='sub-heading Cabin-text'>
                          Evidence (File Upload):
                        </Form.Label>
                        <Form.Control
                          type='file'
                          name='evidence'
                          onChange={ handleEvidenceUpload}
                          style={{ backgroundColor: '#F2FAFF' }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </>
              )}

              {inquiryData.type === 'orderComplaints' && (
                <>
                <Row className='g-4'>
                    <Col md>
                      <Form.Group className='mb-3'>
                        <Form.Label className='sub-heading Cabin-text'>
                          Order No:
                        </Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter Order No'
                          name='orderNo'
                          onChange={(e) => handleInquiryAdd(e, 'orderNo')}
                          value={inquiryData.orderNo}
                          style={{ backgroundColor: '#F2FAFF' }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md>
                      <Form.Group className='mb-3'>
                        <Form.Label className='sub-heading Cabin-text'>
                          Order Date:
                        </Form.Label>
                        <Form.Control
                          type='date'
                          name='orderDate'
                          onChange={(e) => handleInquiryAdd(e, 'orderDate')}
                          value={inquiryData.orderDate}
                          style={{ backgroundColor: '#F2FAFF' }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                 <Row className='g-4'>
                    <Col md>
                      <Form.Group className='mb-3'>
                        <Form.Label className='sub-heading Cabin-text'>
                          Remarks:
                        </Form.Label>
                        <Form.Control
                          as='textarea'
                          rows={3}
                          name='remarks'
                          placeholder='Enter Additional Remarks'
                          onChange={(e) =>
                            handleInquiryAdd(e, 'remarks')
                          }
                          value={inquiryData.remarks}
                          style={{ backgroundColor: '#F2FAFF' }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  </>
              )}
              


            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={closeAddInquiryModel}>
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

export default AddNewInquiry;
