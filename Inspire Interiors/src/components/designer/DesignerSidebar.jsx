import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { Router, Route } from "react-router-dom";

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
  return (
    <SideNav
      onSelect={(selected) => {
        // Add your code here
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="dashboard">
        <NavItem eventKey="dashboard">
          <NavIcon>
            <i>
              {/* <RiDashboardFill /> */}
              <AiOutlineDotChart />
            </i>
          </NavIcon>
          <NavText>Dashboard</NavText>
        </NavItem>

        <NavItem eventKey="designs">
          <NavIcon>
            <i>
              <RiBuilding2Fill />
            </i>
          </NavIcon>
          <NavText>My Designs</NavText>
        </NavItem>

        <NavItem eventKey="marketplace">
          <NavIcon>
            <i>
              <MdDesignServices />
            </i>
          </NavIcon>
          <NavText>Design Tool</NavText>
        </NavItem>

        <NavItem eventKey="Customization">
          <NavIcon>
            <i>
              <FaMoneyBillAlt />
            </i>
          </NavIcon>
          <NavText>Earnings</NavText>
        </NavItem>

        <NavItem eventKey="orders">
          <NavIcon>
            <i>
           < AiFillStar/>
            </i>
          </NavIcon>
          <NavText>Promotions</NavText>
        </NavItem>

        <NavItem eventKey="Settings">
          <NavIcon>
            <i>
              <RiSettings5Fill />
            </i>
          </NavIcon>
          <NavText>Settings</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default DesignerSidebar;
