import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

import axios from 'axios';


function AddNewInquiry({ addressData }) {

  const [showEditPopup, setInquiry] = useState(false);


  // Function to close the modal
  const closeAddInquiryModel = () => {
    setInquiry(false);
  };


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

          <Form className='p-4' >

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
                          onChange={(e) => handleInputChange(e, 'orderNo')}
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
                          onChange={(e) => handleInputChange(e, 'orderDate')}
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
                          onChange={(e) => handleInputChange(e, 'reason')}
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
                            handleInputChange(e, 'additionalRemarks')
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
                          onChange={(e) => handleInputChange(e, 'evidence')}
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
                          onChange={(e) => handleInputChange(e, 'orderNo')}
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
                          onChange={(e) => handleInputChange(e, 'orderDate')}
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
                          name='additionalRemarks'
                          placeholder='Enter Additional Remarks'
                          onChange={(e) =>
                            handleInputChange(e, 'additionalRemarks')
                          }
                          value={inquiryData.additionalRemarks}
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
