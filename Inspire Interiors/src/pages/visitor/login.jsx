import React  from 'react';
import Header from "../../components/header";
import Footer from '../../components/footer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import './../../styles/login.css'
import { Form } from 'react-bootstrap';


import * as Icon from 'react-bootstrap-icons';


import './../../styles/home.css';
  
const Login = () => {
 return (
    <><div>
    <Header />
    <div className='row '>
      <div className='col align-self-start banner-login'>
        <Carousel className="login-carousel w-100">
          <Carousel.Item className='carousel-img'>
            <img
              className="d-block w-100 h-100 img-fluid"
              src="https://www.lovehappensmag.com/blog/wp-content/uploads/2019/08/Amman-Project.10.jpg"
              alt="Slide 1"

            />
          </Carousel.Item>
          <Carousel.Item className='carousel-img'>
            <img
              className="d-block w-100 h-100 img-fluid"
              src="https://i.pinimg.com/originals/99/0c/3b/990c3bd1c3d59ba694a430bb780d78c8.jpg"
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


      <div className='col align-self-start justify-content-center content-login'>
        <div className=" d-flex row justify-content-center w-100 login-form">
          <h2 className='text-center'>Welcome to Inspire Interiors</h2>
          <Form className='d-flex row w-98 gap-2'>
          <hr></hr><h6 className='text-center'>OR</h6><hr></hr>     
            
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            
            <Form.Group controlId="formPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <div className='d-flex row justify-content-center' controlId="fprememberMe">
              <Form.Group controlId="formRememberMe" className='d-flex col justify-content-start align-self-center w-100'>
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <div className="d-flex col justify-content-end form-options">
                <a href="/">Forgot password?</a>
              </div>
            </div>
            
            <Button className='d-flex justify-content-center align-self-center ' variant="primary" type="submit">Submit</Button>
          
          </Form> 
          <h6 className='text-center'>Don't have an Account?</h6>         
          <h6 className='text-center'>Register</h6>         
        </div>

      </div>


    </div>
  </div>
    </>
  );
};

export default Login;