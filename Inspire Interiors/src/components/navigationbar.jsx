import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';

import '../styles/navbar.css';

import Logo from './../assets/img/logo.svg';
import navbarImg from './../assets/img/visitor/navbarImg.png';

const Navigationbar = () => {
    return (
        <>
        <Navbar className='nav' expand="lg">
            <React.Fragment>
                <Navbar.Brand  href="/"> <img src={Logo} alt="inspire interiors"/></Navbar.Brand>
             
               
                    <Nav className="ms-auto">
                        <Nav.Link className='form-group mx-4 main-div d-flex flex-row'>
                          
                          <div className='mx-4 my-2'><Icon.BellFill size={20} color='white'/></div>
                          <img className='img-fluid bg-white rounded-2' src={navbarImg} />
                          <Nav.Link className='text-white mx-4 my-2 d-none d-sm-block d-md-block d-lg-block'>Philosopher Shin</Nav.Link>
                        </Nav.Link>
                    </Nav>
            

            </React.Fragment>
        </Navbar>
        </>
    );
};

export default Navigationbar;