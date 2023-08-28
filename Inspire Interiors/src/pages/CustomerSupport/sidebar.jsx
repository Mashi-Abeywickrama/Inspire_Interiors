import React, { useState } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { NavLink } from 'react-router-dom'; // Use NavLink for active class
import { useLocation } from "react-router-dom";

import { Router,Route } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import { RiCurrencyFill,RiDashboardFill,RiSettings5Fill, RiTakeawayFill, RiDraftFill, RiFileList2Fill } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './../../styles/vendor/sidebar.css'


const SidebarDashboard = () => {
  
   //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    const [selected, setSelected] = useState(splitLocation[2]); // State to track selected link
    // console.log(splitLocation[2]);

  return (
   <SideNav onSelect={(selected) => setSelected(splitLocation[2])}>
   
    
    <SideNav.Toggle   />
    <SideNav.Nav defaultSelected={splitLocation[2]}>
        <NavItem eventKey="dashboard">
            <NavIcon>
                 <NavLink to="/customersupport/dashboard" activeClassName="active"><i><RiDashboardFill /></i></NavLink>
                
            </NavIcon>
            <NavText>
                <NavLink to="/customersupport/dashboard" activeClassName="active">Dashboard</NavLink>
                
            </NavText>
        </NavItem>

        <NavItem eventKey="chat">
            <NavIcon>
                <NavLink to="https://app.papercups.io/inboxes/b5ab1911-b400-4046-bdde-9d570d258db2/conversations/f5a4cdf5-6faf-4b2a-b565-169db2e03e3d" activeClassName="active"><i><RiDraftFill /></i></NavLink>
               
            </NavIcon>
            <NavText>
                 <NavLink to="https://app.papercups.io/inboxes/b5ab1911-b400-4046-bdde-9d570d258db2/conversations/f5a4cdf5-6faf-4b2a-b565-169db2e03e3d" activeClassName="active">Chat</NavLink>
                
            </NavText>
        </NavItem>

        <NavItem eventKey="inquiry">
            <NavIcon>
                 <NavLink to="/customersupport/inquiry" activeClassName="active"><i><RiFileList2Fill /></i></NavLink>
                 
            </NavIcon>
            <NavText >
                <NavLink to="/customersupport/inquiry" activeClassName="active">Inquiries</NavLink>
                
            </NavText>
        </NavItem>

        <NavItem eventKey="refund">
            <NavIcon>
                <NavLink to="/customersupport/refund" activeClassName="active"><i><RiCurrencyFill /></i></NavLink>
                
            </NavIcon>
            <NavText>
                <NavLink to="/customersupport/refund" activeClassName="active">Refund </NavLink>
                
            </NavText>
        </NavItem>

        <NavItem eventKey="delivery">
            <NavIcon>
                <NavLink to="/customersupport/delivery" activeClassName="active"><i><RiTakeawayFill /></i></NavLink>
                 
            </NavIcon>
            <NavText>
                 <NavLink to="/customersupport/delivery" activeClassName="active">Delivery</NavLink>
                
            </NavText>
        </NavItem>

        <NavItem eventKey="settings">
            <NavIcon>
                <NavLink to="/customersupport/settings" activeClassName="active"><i><RiSettings5Fill /></i></NavLink>
                 
            </NavIcon>
            <NavText>
                <NavLink to="/customersupport/settings" activeClassName="active">Settings</NavLink>
                
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

export default SidebarDashboard;