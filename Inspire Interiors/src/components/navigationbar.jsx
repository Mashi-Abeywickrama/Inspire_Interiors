import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';

import '../styles/navbar.css';

import Logo from './../assets/img/logo.svg';
import navbarImg from './../assets/img/visitor/navbarImg.png';
import { useSession } from '../constants/SessionContext';

const Navigationbar = () => {
    const sessionItems = useSession();
    const username = sessionItems.sessionData.username;
    return (
        <>
        <Navbar className='nav' expand="lg">
            <React.Fragment>
                <Navbar.Brand  href="/"> <img src={Logo} alt="inspire interiors"/></Navbar.Brand>
             
               
                    <Nav className="ms-auto">
                        <Nav.Link className='form-group mx-4 main-div d-flex flex-row'>
                          

                          <img className='img-fluid bg-white rounded-2' src={navbarImg} />
                          <p className='text-white mx-4 my-auto d-none d-sm-block d-md-block d-lg-block'>{username}</p>
                        </Nav.Link>
                    </Nav>
            

            </React.Fragment>
        </Navbar>
        </>
    );
};

export default Navigationbar;