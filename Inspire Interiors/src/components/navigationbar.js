import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';

import '../styles/navbar.css';

const Navigationbar = () => {
    return (
        <Navbar className='nav' expand="lg">
            <React.Fragment className="nav-div">
                <Navbar.Brand  href="/"> <img src={require('./../assets/img/logo.svg')} alt="inspire interiors"/></Navbar.Brand>
                <Navbar.Toggle  aria-controls="navbar-element"/>
                <Navbar.Collapse id="navbar-element">
                    <Nav className="ms-auto">
                        <Nav.Link className='form-group mx-4 main-div d-flex flex-row'>
                          <input className='form-control-lg rounded-3 px-3' type='text' id='search' name='search' placeholder='Search'></input>
                          <div className='mx-4 my-2'><Icon.BellFill size={20} color='white'/></div>
                          <img className='img-fluid bg-white rounded-2' src={require("../assets/img/navbarImg.png")} />
                          <Nav.Link className='text-white mx-4 my-2'>Harish AR</Nav.Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </React.Fragment>
        </Navbar>
    );
};

export default Navigationbar;