import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { NavLink } from "react-router-dom";
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

        <NavItem eventKey="marketplace">
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

        <NavItem eventKey="Customization">
          <NavIcon>
          <NavLink
              to="earnings
            "
            >
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

        <NavItem eventKey="orders">
          <NavIcon>
          <NavLink
              to="promotion
            "
            >
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

        <NavItem eventKey="Settings">
          <NavIcon>
          <NavLink to={"setting"}>
            <i>
              <RiSettings5Fill />
            </i>
            </NavLink>
          </NavIcon>
          <NavText>
            <NavLink to={"setting"}>Settings</NavLink>
          </NavText>
        </NavItem>

        <NavItem eventKey="logout">
          <NavIcon>
            <NavLink to="/" activeClassName="active"><i><TbLogout2 /></i></NavLink>
          </NavIcon>
          <NavText>
            <NavLink to="/" activeClassName="active">Logout</NavLink>
          </NavText>
        </NavItem>

      </SideNav.Nav>
    </SideNav>
  );
};

export default DesignerSidebar;
