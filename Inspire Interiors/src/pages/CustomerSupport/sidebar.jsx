import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Router,Route } from 'react-router-dom';

import * as Icon from 'react-bootstrap-icons';
import { RiCurrencyFill,RiDashboardFill,RiSettings5Fill, RiTakeawayFill, RiDraftFill, RiFileList2Fill } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";

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

        <NavItem eventKey="chat">
            <NavIcon>
               <i><RiDraftFill /></i>
            </NavIcon>
            <NavText>
                Chat
            </NavText>
        </NavItem>

        <NavItem eventKey="Inquiries">
            <NavIcon>
                 <i><RiFileList2Fill /></i>
            </NavIcon>
            <NavText >
                Inquiries
            </NavText>
        </NavItem>

        <NavItem eventKey="Refund">
            <NavIcon>
                <i><RiCurrencyFill /></i>
            </NavIcon>
            <NavText>
                Refund 
            </NavText>
        </NavItem>

        <NavItem eventKey="Delivery">
            <NavIcon>
                 <i><RiTakeawayFill /></i>
            </NavIcon>
            <NavText>
                Delivery
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