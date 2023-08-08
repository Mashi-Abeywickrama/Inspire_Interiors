import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Router,Route } from 'react-router-dom';

import * as Icon from 'react-bootstrap-icons';
import { RiBuilding2Fill,RiStore2Fill,RiBrushFill,RiShoppingBagFill,RiDashboardFill,RiSettings5Fill } from "react-icons/ri";

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './../../styles/customer/sidebar.css'


const SidebarDashboard = () => {
  

  return (
   <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
    
>
    
    <SideNav.Toggle   />
    <SideNav.Nav defaultSelected="dashboard">
        <NavItem eventKey="dashboard">
            <NavIcon>
                <i><RiDashboardFill /></i>
            </NavIcon>
            <NavText>
                Dashboard
            </NavText>
        </NavItem>

        <NavItem eventKey="designs">
            <NavIcon>
               <i><RiBuilding2Fill /></i>
            </NavIcon>
            <NavText>
                Designs
            </NavText>
        </NavItem>

        <NavItem eventKey="marketplace">
            <NavIcon>
                <a href="/customer/marketplace">
                 <i><RiStore2Fill /></i>
                 </a>
            </NavIcon>
            <NavText >
                <a href="/customer/marketplace">
                Marketplace
                </a>
            </NavText>
        </NavItem>

        <NavItem eventKey="Customization">
            <NavIcon>
                 <i><RiBrushFill /></i>
            </NavIcon>
            <NavText>
                Customization
            </NavText>
        </NavItem>

        <NavItem eventKey="orders">
            <NavIcon>
                <i><RiShoppingBagFill /></i>
            </NavIcon>
            <NavText>
                <a href="/customer/orders">
                My Orders
                </a>
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

export default SidebarDashboard;