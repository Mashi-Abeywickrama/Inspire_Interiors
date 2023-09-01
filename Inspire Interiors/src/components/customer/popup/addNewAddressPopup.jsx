import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Modal, Button } from 'react-bootstrap';
import { Form, Row, Col } from 'react-bootstrap';
import useAlert from '../../../components/useAlert';

function AddNewAddressPopup({ onClose }) {

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    validateField(field);
  };


  const apiBaseURL = 'http://localhost:8080'; // Replace this with the base URL of your Spring Boot backend

  const axiosInstance = axios.create({
    baseURL: apiBaseURL,
    timeout: 5000,
  });

  const [tag, setTag] = useState('');
  const [address_title, setAddress_title] = useState('');
  const [lane, setLane_no] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [province, setProvince] = useState('');
  const [customer_id, setCustomer_id] = useState('');

  const { setAlert } = useAlert();


  

  const stateValues = {
    tag,
    address_title,
    lane,
    city,
    district,
    province,
    customer_id
  };

  const handleAddress = async (e) => {
    // setAlert('Successfully Added!', 'success');
    e.preventDefault();



    try {
      // Validate each field individually before making the API call
    
        const response = await axiosInstance.post('/shippingaddress', {
          tag: tag,
          address_title: address_title,
          lane: lane,
          city: city,
          district: district,
          province: province
        });
        if (response.status === 200) {
          setAlert('Successfully Added!', 'success');
          console.log('Successful!');
          onClose();
          setTimeout(() => {
            // navigate('/login');
          }, 2000);


        }
        else {
          console.log('Failed to Add');
        }
      }
    catch (error) {
      console.error('Failed');
    }
  };

  return (
    <Modal show={true} onHide={onClose}>

        <Modal.Header closeButton >
          <Modal.Title>Add New Address</Modal.Title>
        </Modal.Header>

        <Form className='p-4' onSubmit={handleAddress}>

        <Modal.Body className='py-2 px-3'>
          {/* Form for the popup */}
          <Row className='g-4'>
            <Col md>
              <Form.Group className='mb-3'>
                <Form.Label className='sub-heading Cabin-text'>Tag:</Form.Label>
                <Form.Control
                  type='text'
                  placeholder="Home/Office"
                  onChange={(e) => setTag(e.target.value)}
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
                  placeholder="Huzefa Bagwala"
                  onChange={(e) => setAddress_title(e.target.value)}
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
                  placeholder="1131"
                  onChange={(e) => setLane_no(e.target.value)}
                  style={{ backgroundColor: '#F2FAFF' }}
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className='mb-3'>
                <Form.Label className='sub-heading Cabin-text'>City:</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Dusty Townline'
                  onChange={(e) => setCity(e.target.value)}
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
                  placeholder="Jacksonville"
                  onChange={(e) => setDistrict(e.target.value)}
                  style={{ backgroundColor: '#F2FAFF' }}
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className='mb-3'>
                <Form.Label className='sub-heading Cabin-text'>Province:</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='TX 40322'
                  onChange={(e) => setProvince(e.target.value)}
                  style={{ backgroundColor: '#F2FAFF' }}
                />
              </Form.Group>
            </Col>
          </Row>


        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default AddNewAddressPopup;
