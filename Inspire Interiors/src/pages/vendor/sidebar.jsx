import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Router,Route } from 'react-router-dom';

import * as Icon from 'react-bootstrap-icons';
import { RiThumbUpFill,RiStore2Fill,RiHeartPulseFill,RiShoppingBagFill,RiDashboardFill,RiSettings5Fill } from "react-icons/ri";

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './../../styles/vendor/sidebar.css'


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

        <NavItem eventKey="inventory">
            <NavIcon>
               <i><RiStore2Fill /></i>
            </NavIcon>
            <NavText>
                Inventory
            </NavText>
        </NavItem>

        <NavItem eventKey="orders">
            <NavIcon>
                 <i><RiShoppingBagFill /></i>
            </NavIcon>
            <NavText >
                Orders
            </NavText>
        </NavItem>

        <NavItem eventKey="promotions">
            <NavIcon>
                 <i><RiThumbUpFill /></i>
            </NavIcon>
            <NavText>
                Promotions
            </NavText>
        </NavItem>

        <NavItem eventKey="complaints">
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

export default SidebarDashboard;