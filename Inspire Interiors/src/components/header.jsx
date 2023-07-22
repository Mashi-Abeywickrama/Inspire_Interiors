import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { LinkContainer } from "react-router-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.css";
import Logo from "./../assets/img/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  //array of items
  const headerItems = [
    "Home",
    "About Us",
    "Services",
    "Our Projects",
    "Our Team",
    "Contact Us",
  ];

  const linkItems = ["/", "about", "services", "projects", "team", "contact"];

  //hook
  const [active, setActive] = useState(0);
  return (
    <Navbar className="nav" expand="lg">
      <div className="nav-div">
        <Navbar.Brand href="/">
          <img src={Logo} alt="inspire interiors" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="ms-auto"
            variant="underline"
            defaultActiveKey={active}
          >
            <Nav.Link
              className="text-white m-2 jost-text"
              eventKey="0"
              onClick={() => {
                setActive(0);
              }}
            >
              <NavLink to="/">Home</NavLink>
            </Nav.Link>
            <Nav.Link
              className="text-white m-2 jost-text"
              href="/about"
              eventKey="1"
              onClick={() => {
                setActive(1);
              }}
            >
              About Us
            </Nav.Link>

            <Nav.Link
              className="text-white m-2 jost-text"
              eventKey="2"
              onClick={() => {
                setActive(2);
              }}
            >
              <NavLink to="/services">Services </NavLink>
            </Nav.Link>


            <Nav.Link
              className="text-white m-2 jost-text"
              href="/projects"
              eventKey="3"
              onClick={() => {
                setActive(3);
              }}
            >

              Our Projects
            </Nav.Link>
            <Nav.Link
              className="text-white m-2 jost-text"
              href="/team"
              eventKey="4"
              onClick={() => {
                setActive(4);
              }}
            >
              Our Team
            </Nav.Link>
            <Nav.Link
              className="text-white m-2 jost-text"
              eventKey="5"
              href="/contact"
              onClick={() => {
                setActive(5);
              }}
            >
              Contact Us
            </Nav.Link>
            <Nav.Link
              className=" m-2 text-center jost-text login-btn"
              href="/login"
              eventKey="-1"
            >
              Login
            </Nav.Link>
          </Nav>
          {/* <Nav variant="underline" defaultActiveKey="0" className="ms-auto">
            {headerItems.map((item, index) => (
              <Nav.Link
                className="text-white m-2 jost-text nav-link text-light"
                eventKey={index}
                href={linkItems[index]}
              >
                {item}
              </Nav.Link>
            ))}
            <Nav.Link
              className=" m-2 text-center jost-text login-btn"
              href="/login"
              eventKey="-1"
            >
              Login
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
