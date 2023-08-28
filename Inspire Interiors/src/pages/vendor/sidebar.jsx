import React, { useState } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { useLocation } from "react-router-dom";
import { NavLink } from 'react-router-dom'; 
import { TbLogout2 } from "react-icons/tb";
import * as Icon from 'react-bootstrap-icons';
import { RiThumbUpFill,RiStore2Fill,RiDraftFill,RiShoppingBagFill,RiDashboardFill,RiSettings5Fill, RiWechatFill } from "react-icons/ri";
import { FaHandshakeSimple, FaHandshake, FaCommentDots } from "react-icons/fa6";

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
    console.log(splitLocation[2]);

  return (
   <SideNav  onSelect={(selected) => setSelected(splitLocation[2])}>
    
    <SideNav.Toggle   />
    <SideNav.Nav defaultSelected={splitLocation[2]}>
        <NavItem eventKey="dashboard">
            <NavIcon>
            <NavLink to="/vendor/dashboard" activeClassName="active"><i><RiDashboardFill /></i></NavLink>
                
            </NavIcon>
            <NavText>
                <NavLink to="/vendor/dashboard" activeClassName="active">Dashboard</NavLink>
                
            </NavText>
        </NavItem>

        <NavItem eventKey="inventory">
            <NavIcon>
            <NavLink to="/vendor/inventory" activeClassName="active"> <i><RiStore2Fill /></i></NavLink>
              
            </NavIcon>
            <NavText>
            <NavLink to="/vendor/inventory" activeClassName="active">Inventory</NavLink>
                
            </NavText>
        </NavItem>

        <NavItem eventKey="order">
            <NavIcon>
            <NavLink to="/vendor/order" activeClassName="active"><i><RiShoppingBagFill /></i></NavLink>
                 
            </NavIcon>
            <NavText >
            <NavLink to="/vendor/order" activeClassName="active">Orders</NavLink>
                
            </NavText>
        </NavItem>

        <NavItem eventKey="promotion">
            <NavIcon>
            <NavLink to="/vendor/promotion" activeClassName="active"><i><FaHandshake /></i></NavLink>
                 
            </NavIcon>
            <NavText>
            <NavLink to="/vendor/promotion" activeClassName="active">Promotions</NavLink>
                
            </NavText>
        </NavItem>

        <NavItem eventKey="complaints">
            <NavIcon>
            <NavLink to="/vendor/complaints" activeClassName="active"><i><RiDraftFill /></i></NavLink>
            </NavIcon>
            <NavText>
            <NavLink to="/vendor/complaints" activeClassName="active">Complaints</NavLink>
            </NavText>
        </NavItem>

        <NavItem eventKey="setting">
            <NavIcon>
            <NavLink to="/vendor/setting" activeClassName="active"><i><RiSettings5Fill /></i></NavLink>
            </NavIcon>
            <NavText>
            <NavLink to="/vendor/setting" activeClassName="active">Settings</NavLink>
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