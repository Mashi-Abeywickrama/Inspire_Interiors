import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { LinkContainer } from "react-router-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "../styles/header.css";
import Logo from "./../assets/img/logo.svg";
import { NavLink } from "react-router-dom";

const HeaderT = () => {
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
    <div>
      <nav className=" nav navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="inspire interiors" />
          </NavLink>

          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav jost-text ms-auto">
              {headerItems.map((item, index) => (
                <li
                  key={item}
                  className="nav-item nav-underline mx-1"
                  onClick={() => {
                    setActive(index);
                  }}
                >
                  <NavLink to={linkItems[index]}>
                    <a
                      className={
                        active === index
                          ? "nav-link text-light active"
                          : "nav-link text-light "
                      }
                    >
                      {item}
                    </a>
                  </NavLink>
                </li>
              ))}
              <li className=" m-2 text-center jost-text login-btn">
                <a href="/login" className="nav-link text-dark">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderT;
