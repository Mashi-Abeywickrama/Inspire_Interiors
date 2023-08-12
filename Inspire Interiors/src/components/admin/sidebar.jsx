import React, { useState } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { useLocation } from "react-router-dom";
import { NavLink } from 'react-router-dom'; 

import * as Icon from 'react-bootstrap-icons';
import { RiCashFill,RiHandCoinFill,RiHeartPulseFill,RiShoppingBagFill,RiDashboardFill,RiSettings5Fill, RiUserFill, RiFileChartFill } from "react-icons/ri";

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
            <NavLink to="/admin/dashboard" activeClassName="active"><i><RiDashboardFill /></i></NavLink>
                
            </NavIcon>
            <NavText>
            <NavLink to="/admin/dashboard" activeClassName="active">Dashboard</NavLink>
                
            </NavText>
        </NavItem>

        <NavItem eventKey="user">
            <NavIcon>
            <NavLink to="/admin/user" activeClassName="active"> <i><RiUserFill /></i></NavLink>
            
            </NavIcon>
            <NavText>
                
            <NavLink to="/admin/user" activeClassName="active">user</NavLink>
            </NavText>
        </NavItem>

        <NavItem eventKey="orders">
            <NavIcon>
            <NavLink to="/admin/orders" activeClassName="active"><i><RiShoppingBagFill /></i></NavLink>
                 
            </NavIcon>
            <NavText >
            <NavLink to="/admin/orders" activeClassName="active">Orders</NavLink>
                
            </NavText>
        </NavItem>

        <NavItem eventKey="salary">
            <NavIcon>
            <NavLink to="/admin/salary" activeClassName="active"> <i><RiCashFill /></i></NavLink>
            </NavIcon>
            <NavText>
            <NavLink to="/admin/salary" activeClassName="active">Salary</NavLink>
            </NavText>
        </NavItem>

        <NavItem eventKey="commission">
            <NavIcon>
            <NavLink to="/admin/commission" activeClassName="active"><i><RiHandCoinFill /></i></NavLink>
            </NavIcon>
            <NavText>
            <NavLink to="/admin/commission" activeClassName="active">Commission</NavLink>
            </NavText>
        </NavItem>

        <NavItem eventKey="report">
            <NavIcon>
            <NavLink to="/admin/report" activeClassName="active"><i ><RiFileChartFill/></i></NavLink>
            </NavIcon>
            <NavText>
            <NavLink to="/admin/report" activeClassName="active">Report</NavLink> 
            </NavText>
        </NavItem>

        <NavItem eventKey="settings">
            <NavIcon>
            <NavLink to="/admin/settings" activeClassName="active"><i><RiSettings5Fill/></i></NavLink> 
            </NavIcon>
            <NavText>
            <NavLink to="/admin/settings" activeClassName="active">Settings</NavLink> 
            </NavText>
        </NavItem>

       
    </SideNav.Nav>
</SideNav>
  );
};

export default SidebarDashboard;