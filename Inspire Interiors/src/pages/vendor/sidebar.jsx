import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Router,Route } from 'react-router-dom';

import * as Icon from 'react-bootstrap-icons';
import { RiStore2Fill,RiThumbUpFill,RiShoppingBagFill,RiDashboardFill,RiSettings5Fill, RiHeartPulseFill } from "react-icons/ri";

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './../../styles/vendor/sidebar.css'


const VendorSidebar = () => {
  

  return (
   <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    
    <SideNav.Toggle  />
        <SideNav.Nav defaultSelected="dashboard">
            <NavItem eventKey="dashboard">
                <NavIcon>
                    <i><RiDashboardFill /></i>
                </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>

            <NavItem eventKey="Inventory">
                <NavIcon>
                <i><RiStore2Fill /></i>
                </NavIcon>
                <NavText>
                    Inventory
                </NavText>
            </NavItem>

            <NavItem eventKey="Orders">
                <NavIcon>
                    <i><RiShoppingBagFill /></i>
                </NavIcon>
                <NavText >
                    Orders
                </NavText>
            </NavItem>

            <NavItem eventKey="Promotions">
                <NavIcon>
                    <i><RiThumbUpFill /></i>
                </NavIcon>
                <NavText>
                    Promotions
                </NavText>
            </NavItem>

            <NavItem eventKey="Complaints">
                <NavIcon>
                    <i><RiHeartPulseFill /></i>
                </NavIcon>
                <NavText>
                    Complaints
                </NavText>
            </NavItem>

            <NavItem eventKey="Settings">
                <NavIcon>
                    <i><RiSettings5Fill /></i>
                </NavIcon>
                <NavText>
                    Settings
                </NavText>
            </NavItem>

        </SideNav.Nav>
    </SideNav>
  );
};

export default VendorSidebar;