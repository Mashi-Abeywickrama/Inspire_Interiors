import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../../components/header";

import axios from 'axios';

import {Link} from 'react-router-dom';


import { Container, Row, Col, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import './../../styles/login.css';
import { Form } from 'react-bootstrap';
import googleIcon from '../../assets/img/visitor/google.svg';
import facebookIcon from '../../assets/img/visitor/facebook.svg';


import * as Icon from 'react-bootstrap-icons';


import './../../styles/home.css';
import useAlert from '../../components/useAlert';
  
const Login = () => {

  const apiBaseURL = 'http://localhost:8080'; // Replace this with the base URL of your Spring Boot backend

  const axiosInstance = axios.create({
    baseURL: apiBaseURL,
    timeout: 5000, // You can adjust the timeout value as needed
    // You can also set other default config options if required
    // For example, you might want to set headers for authorization or other request-specific headers
  });

   const navigate = useNavigate(); // Initialize useNavigate
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const { setAlert } = useAlert();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/login', { 
        username: username, 
        password: password 
        });
      if (response.status === 200) {
        const userType = response.data.userType;

        if (userType === 'admin') {
          navigate('/admin');
        } else if (userType === 'customer') {
          setAlert('Successful Login!', 'success');
          setTimeout(() => {
            navigate('/customer');
        }, 3000);
        }
      }
    } catch (error) {
      console.error('Authentication failed');
      setAlert('Incorrect Credintials!', 'error');
    }
  };

  return (
    <>
      <div>
        {/* <Header /> */}

        <div className='row'>

          <div className='col-md-6 align-self-start banner-login'>
            {/* slider with 3 images */}
            <Carousel className="login-carousel w-100">
              <Carousel.Item className='carousel-img'>
                <img
                  className="d-block w-100 h-100 img-fluid"
                  src="https://i.pinimg.com/originals/99/0c/3b/990c3bd1c3d59ba694a430bb780d78c8.jpg"
                  alt="Slide 1"
                />
              </Carousel.Item>

              <Carousel.Item className='carousel-img'>
                <img
                  className="d-block w-100 h-100 img-fluid"
                  src="https://havenly.com/blog/wp-content/uploads/2022/07/render-final-2232106-38554-8220-106864de852c.jpeg"
                  alt="Slide 2"
                  style={{ objectFit: 'cover' }}
                />
              </Carousel.Item>

              <Carousel.Item className='carousel-img'>
                <img
                  className="d-block w-100 h-100 img-fluid"
                  src="https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg"
                  alt="Slide 3"
                  style={{ objectFit: 'cover' }}
                />
              </Carousel.Item>

        </Carousel>

          </div>

          <div className='col-md-6 align-self-start justify-content-center content-login'>
            <div className="d-flex row justify-content-center w-100 login-form">
              
              <h2 className='heading-txt mt-5 fw-400'>
                  Welcome to
              </h2>
               
              <h2 className='heading-txt mb-4 fw-600'>
                  Inspire Interiors
              </h2>
              {/* login form */}
              <Form className='d-flex row w-92 gap-2 ' onSubmit={handleLogin}>
                <Button
                  className="mb-4 w-100 btnstyle bg-transparent border-0 shadow-xs btn-lg"
                >
                  <img src={googleIcon} alt="Google" className="me-2 google-icon" />
                  Login with Google
                </Button>

                <Button
                  className="mb-4 w-100 btnstyle bg-transparent border-0 shadow-xs btn-lg"
                  >
                  <img src={facebookIcon} alt="Facebook" className="me-2 facebook-icon" />
                  Login with Facebook
                </Button>

                <div className="d-flex align-items-center justify-content-center mb-4">
                  <hr className="flex-grow-1" />
                  <h6 className="text-center mx-2">OR</h6>
                  <hr className="flex-grow-1" />
                </div>

                <Form.Group controlId="formName" >
                  <Form.Control
                  type="text"
                  placeholder="Name"
                  size='lg'
                  className='mb-3 bg-transparent'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Control
                  type="password"
                  className='mb-3 bg-transparent'
                  placeholder="Password"
                  size='lg'
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>

                <div className='d-flex row justify-content-center' controlId="fprememberMe">
                  
                  <Form.Group controlId="formRememberMe" className='d-flex col justify-content-start align-self-center w-100'>
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>
                  
                  <div className="d-flex col justify-content-end form-options">
                    <a href="/" style={{ color: '#023047 !important' }}>Forgot password?</a>
                  </div>
                
                </div>

                <Button
                  onClick={handleLogin}
                  className='d-flex justify-content-center align-self-center mb-4'
                  size='lg'
                  variant="primary"
                  style={{ backgroundColor: '#035C94', color: '#FFFFFF' }}
                  >
                  Login
                </Button>

              </Form>

              <h6 className='text-center fw-400'>
                  Don't have an Account?
              </h6>

              <h6 className='text-center'
                style={{color:'#023047'}}>
                 <Link to="/signup"> Register </Link> 
              </h6>

            </div>

          </div>


        </div>
       

      </div>
    </>
  );
};

export default Login;