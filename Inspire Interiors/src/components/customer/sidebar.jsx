import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Router,Route } from 'react-router-dom';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './../../styles/customer/sidebar.css'


const SidebarDashboard = () => {
  

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
                <i className="bi bi-columns-gap" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>

        <NavItem eventKey="designa">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Designs
            </NavText>
        </NavItem>

        <NavItem eventKey="marketplace">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Marketplace
            </NavText>
        </NavItem>

        <NavItem eventKey="Customization">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Customization
            </NavText>
        </NavItem>

        <NavItem eventKey="orders">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                My Orders
            </NavText>
        </NavItem>

        <NavItem eventKey="Settings">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
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