import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css';
import Logo from './../assets/img/logo.svg';

const Header = () => {
  return (
    <Navbar className="nav" expand="lg">
      <div className="nav-div">
        <Navbar.Brand href="/">
          <img src={Logo} alt="inspire interiors" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-white m-2 jost-text" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-white m-2 jost-text" href="/about">
              About Us
            </Nav.Link>
            <Nav.Link className="text-white m-2 jost-text" href="/services">
              Services
            </Nav.Link>
            <Nav.Link className="text-white m-2 jost-text" href="/projects">
              Our Projects
            </Nav.Link>
            <Nav.Link className="text-white m-2 jost-text" href="/team">
              Our Team
            </Nav.Link>
            <Nav.Link className="text-white m-2 jost-text" href="/contact">
              Contact Us
            </Nav.Link>
            <Nav.Link className=" m-2 text-center jost-text login-btn" href="#link">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
