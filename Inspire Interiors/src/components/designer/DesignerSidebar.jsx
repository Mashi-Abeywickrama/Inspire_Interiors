import React, { useState } from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { NavLink, useLocation } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import * as Icon from "react-bootstrap-icons";
import {
  RiBuilding2Fill,
  RiStore2Fill,
  RiBrushFill,
  RiShoppingBagFill,
  RiDashboardFill,
  RiSettings5Fill,
} from "react-icons/ri";
import { AiOutlineDotChart, AiFillStar } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./../../styles/customer/sidebar.css";

const DesignerSidebar = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const [selected, setSelected] = useState(splitLocation[2]); // State to track selected link
  //console.log(splitLocation[2]);

  return (
    <SideNav onSelect={(selected) => setSelected(splitLocation[2])}>
      <SideNav.Toggle />
      <SideNav.Nav
        defaultSelected={
          splitLocation[2] !== "" ? splitLocation[2] : "dashboard"
        }
      >
        <NavItem eventKey="dashboard">
          <NavIcon>
            <NavLink to="">
              <i>
                <AiOutlineDotChart />
              </i>
            </NavLink>
          </NavIcon>
          <NavText>
            <NavLink to="">Dashboard</NavLink>
          </NavText>
        </NavItem>

        <NavItem eventKey="mydesigns">
          <NavIcon>
            <NavLink to="mydesigns">
              <i>
                <RiBuilding2Fill />
              </i>
            </NavLink>
          </NavIcon>
          <NavText>
            <NavLink to="mydesigns">My Designs</NavLink>
          </NavText>
        </NavItem>

        <NavItem eventKey="designtool">
          <NavIcon>
            <NavLink to="designtool">
              <i>
                <MdDesignServices />
              </i>
            </NavLink>
          </NavIcon>
          <NavText>
            <NavLink to="designtool">Design Tool</NavLink>
          </NavText>
        </NavItem>

        <NavItem eventKey="earnings">
          <NavIcon>
            <NavLink to="earnings">
              <i>
                <FaMoneyBillAlt />
              </i>
            </NavLink>
          </NavIcon>
          <NavText>
            <NavLink
              to="earnings
            "
            >
              Earnings
            </NavLink>
          </NavText>
        </NavItem>

        <NavItem eventKey="promotion">
          <NavIcon>
            <NavLink to="promotion">
              <i>
                <AiFillStar />
              </i>
            </NavLink>
          </NavIcon>
          <NavText>
            <NavLink
              to="promotion
            "
            >
              Promotions
            </NavLink>
          </NavText>
        </NavItem>

        <NavItem eventKey="setting">
          <NavIcon>
            <NavLink to="setting">
              <i>
                <RiSettings5Fill />
              </i>
            </NavLink>
          </NavIcon>
          <NavText>
            <NavLink to="setting">Settings</NavLink>
          </NavText>
        </NavItem>

        <NavItem eventKey="logout">
          <NavIcon>
            <NavLink to="/" activeClassName="active">
              <i>
                <TbLogout2 />
              </i>
            </NavLink>
          </NavIcon>
          <NavText>
            <NavLink to="/" activeClassName="active">
              Logout
            </NavLink>
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default DesignerSidebar;
