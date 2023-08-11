import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { NavLink } from "react-router-dom";

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
              <AiOutlineDotChart />
            </i>
          </NavIcon>
          <NavText>
            <NavLink to="">Dashboard</NavLink>
          </NavText>
        </NavItem>

        <NavItem eventKey="designs">
          <NavIcon>
            <i>
              <RiBuilding2Fill />
            </i>
          </NavIcon>
          <NavText>
            <NavLink to="mydesigns">My Designs</NavLink>
          </NavText>
        </NavItem>

        <NavItem eventKey="marketplace">
          <NavIcon>
            <i>
              <MdDesignServices />
            </i>
          </NavIcon>
          <NavText>
            <a href="http://localhost:8000">Design Tool </a>
          </NavText>
        </NavItem>

        <NavItem eventKey="Customization">
          <NavIcon>
            <i>
              <FaMoneyBillAlt />
            </i>
          </NavIcon>
          <NavText>
            <NavLink
              to="earningsall
            "
            >
              Earnings
            </NavLink>
          </NavText>
        </NavItem>

        <NavItem eventKey="orders">
          <NavIcon>
            <i>
              <AiFillStar />
            </i>
          </NavIcon>
          <NavText>
            <NavLink
              to="promotions
            "
            >
              Promotions
            </NavLink>
          </NavText>
        </NavItem>

        <NavItem eventKey="Settings">
          <NavIcon>
            <i>
              <RiSettings5Fill />
            </i>
          </NavIcon>
          <NavText>
            <NavLink to={"setting"}>Settings</NavLink>
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default DesignerSidebar;
