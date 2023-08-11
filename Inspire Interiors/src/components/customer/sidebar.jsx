import React, { useState } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { NavLink } from 'react-router-dom'; // Use NavLink for active class
import { useLocation } from "react-router-dom";
import { RiBuilding2Fill, RiStore2Fill, RiBrushFill, RiShoppingBagFill, RiDashboardFill, RiSettings5Fill } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './../../styles/customer/sidebar.css';

import * as Icon from 'react-bootstrap-icons';



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
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected={splitLocation[2]}>
        <NavItem eventKey="dashboard">
          <NavIcon>
             <NavLink to="/customer/dashboard" activeClassName="active"><i><RiDashboardFill /></i></NavLink>
            
          </NavIcon>
          <NavText>
            <NavLink to="/customer/dashboard" activeClassName="active">Dashboard</NavLink>
          </NavText>
        </NavItem>

        <NavItem eventKey="designs">
          <NavIcon>
            <NavLink to="/customer/designs" activeClassName="active"><i><RiBuilding2Fill /></i></NavLink>
            
          </NavIcon>
          <NavText>
            <NavLink to="/customer/designs" activeClassName="active">Designs</NavLink>
          </NavText>
        </NavItem>

        <NavItem eventKey="marketplace">
          <NavIcon>
            <NavLink to="/customer/marketplace" activeClassName="active"><i><RiStore2Fill /></i></NavLink>
            
          </NavIcon>
          <NavText>
            <NavLink to="/customer/marketplace" activeClassName="active">Marketplace</NavLink>
          </NavText>
        </NavItem>

        <NavItem eventKey="customization">
          <NavIcon>
             <NavLink to="/customer/customization" activeClassName="active"> <i><RiBrushFill /></i></NavLink>
           
          </NavIcon>
          <NavText>
            <NavLink to="/customer/customization" activeClassName="active">Customization</NavLink>
          </NavText>
        </NavItem>

        <NavItem eventKey="orders">
          <NavIcon>
            <NavLink to="/customer/orders" activeClassName="active"><i><RiShoppingBagFill /></i></NavLink>
            
          </NavIcon>
          <NavText>
            <NavLink to="/customer/orders" activeClassName="active">My Orders</NavLink>
          </NavText>
        </NavItem>

        <NavItem eventKey="settings">
          <NavIcon>
            <NavLink to="/customer/settings" activeClassName="active"><i><RiSettings5Fill /></i></NavLink>
          </NavIcon>
          <NavText>
            <NavLink to="/customer/settings" activeClassName="active">Settings</NavLink>
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
